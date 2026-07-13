"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { CatalogProduct } from "@/lib/types";
import { CatalogProductCard } from "@/components/catalog-product-card";
import { ProductEditControls, AddProductButton } from "@/components/admin/product-editor";

export function SortableProductGrid({
  slug,
  products,
  compact,
}: {
  slug: string;
  products: CatalogProduct[];
  compact?: boolean;
}) {
  const router = useRouter();
  const [items, setItems] = useState<CatalogProduct[]>(products);
  const dragId = useRef<string | null>(null);
  const [dragging, setDragging] = useState<string | null>(null);

  const signature = JSON.stringify(products);
  useEffect(() => {
    setItems(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  function onDragEnter(overId: string) {
    const fromId = dragId.current;
    if (!fromId || fromId === overId) return;
    setItems((prev) => {
      const from = prev.findIndex((p) => p.id === fromId);
      const to = prev.findIndex((p) => p.id === overId);
      if (from < 0 || to < 0 || from === to) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }

  async function persist(ordered: CatalogProduct[]) {
    const ids = ordered.map((p) => p.id);
    if (ids.join(",") === products.map((p) => p.id).join(",")) return;
    const res = await fetch("/api/admin/reorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, ids }),
    });
    if (res.ok) router.refresh();
    else alert("Не удалось сохранить порядок");
  }

  function onDragEnd() {
    dragId.current = null;
    setDragging(null);
    setItems((current) => {
      persist(current);
      return current;
    });
  }

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((product) => (
        <div
          key={product.id}
          draggable
          onDragStart={() => {
            dragId.current = product.id;
            setDragging(product.id);
          }}
          onDragEnter={() => onDragEnter(product.id)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnd={onDragEnd}
          className={`relative cursor-move transition ${product.hidden ? "opacity-50" : ""} ${
            dragging === product.id ? "opacity-40 ring-2 ring-[#5c7887]" : ""
          }`}
        >
          <div className="absolute left-2 top-2 z-20 flex items-center gap-1.5">
            <span
              className="grid h-8 w-8 place-items-center rounded-full bg-white/95 text-slate-500 shadow-md ring-1 ring-black/10"
              title="Перетащите, чтобы изменить порядок"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="9" cy="6" r="1.6" />
                <circle cx="15" cy="6" r="1.6" />
                <circle cx="9" cy="12" r="1.6" />
                <circle cx="15" cy="12" r="1.6" />
                <circle cx="9" cy="18" r="1.6" />
                <circle cx="15" cy="18" r="1.6" />
              </svg>
            </span>
            {product.hidden ? (
              <span className="rounded-full bg-slate-900/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                Скрыт
              </span>
            ) : null}
          </div>
          <ProductEditControls slug={slug} product={product} />
          <CatalogProductCard product={product} compact={compact} />
        </div>
      ))}
      <AddProductButton slug={slug} />
    </div>
  );
}
