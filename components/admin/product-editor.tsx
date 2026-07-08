"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CatalogProduct } from "@/lib/types";
import { ImageField } from "@/components/admin/image-field";
import {
  Modal,
  fieldClass,
  labelClass,
  primaryBtn,
  ghostBtn,
} from "@/components/admin/modal";

type Draft = {
  title: string;
  color: string;
  extra: string;
  price: string;
  image: string;
};

function toDraft(p?: CatalogProduct): Draft {
  return {
    title: p?.title ?? "",
    color: p?.color ?? "",
    extra: p?.extra ?? "",
    price: p?.price ?? "",
    image: p?.image ?? "",
  };
}

function ProductForm({
  slug,
  product,
  onClose,
}: {
  slug: string;
  product?: CatalogProduct;
  onClose: () => void;
}) {
  const router = useRouter();
  const [draft, setDraft] = useState<Draft>(toDraft(product));
  const [saving, setSaving] = useState(false);
  const set = (k: keyof Draft) => (v: string) => setDraft((d) => ({ ...d, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload: CatalogProduct = {
      id: product?.id ?? "",
      title: draft.title,
      color: draft.color,
      extra: draft.extra || undefined,
      price: draft.price,
      image: draft.image,
      alt: `${draft.title} ${draft.color}`.trim() || draft.title,
    };
    const res = await fetch("/api/admin/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, product: payload }),
    });
    setSaving(false);
    if (res.ok) {
      onClose();
      router.refresh();
    } else {
      alert("Не удалось сохранить");
    }
  }

  return (
    <Modal title={product ? "Редактировать товар" : "Новый товар"} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className={labelClass}>Название</label>
          <input className={fieldClass} value={draft.title} onChange={(e) => set("title")(e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Цвет / описание</label>
          <input className={fieldClass} value={draft.color} onChange={(e) => set("color")(e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Дополнительно (покрытие и т.п.)</label>
          <input className={fieldClass} value={draft.extra} onChange={(e) => set("extra")(e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Цена</label>
          <input className={fieldClass} value={draft.price} onChange={(e) => set("price")(e.target.value)} placeholder="напр. Цена 188 руб п/м" />
        </div>
        <ImageField value={draft.image} onChange={set("image")} />
        <div className="flex justify-end gap-3 pt-2">
          <button type="button" className={ghostBtn} onClick={onClose}>
            Отмена
          </button>
          <button type="submit" className={primaryBtn} disabled={saving}>
            {saving ? "Сохранение…" : "Сохранить"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export function ProductEditControls({
  slug,
  product,
}: {
  slug: string;
  product: CatalogProduct;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function remove() {
    if (!confirm(`Удалить товар «${product.title}»?`)) return;
    const res = await fetch("/api/admin/product", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, id: product.id }),
    });
    if (res.ok) router.refresh();
    else alert("Не удалось удалить");
  }

  async function toggleHidden() {
    const res = await fetch("/api/admin/product", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, id: product.id, hidden: !product.hidden }),
    });
    if (res.ok) router.refresh();
    else alert("Не удалось изменить видимость");
  }

  return (
    <>
      <div className="absolute right-2 top-2 z-20 flex gap-1.5">
        <button
          type="button"
          onClick={toggleHidden}
          className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-slate-700 shadow-md ring-1 ring-black/10 transition hover:bg-white hover:text-[#5c7887]"
          aria-label={product.hidden ? "Показать" : "Скрыть"}
          title={product.hidden ? "Показать товар" : "Скрыть товар"}
        >
          {product.hidden ? (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.4 5.2A9.5 9.5 0 0 1 12 5c5 0 9 5 9 7a12 12 0 0 1-2.2 2.9M6.1 6.1C3.9 7.4 2 9.9 2 12c0 2 4 7 10 7a9.6 9.6 0 0 0 3.1-.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-slate-700 shadow-md ring-1 ring-black/10 transition hover:bg-white hover:text-[#5c7887]"
          aria-label="Редактировать"
          title="Редактировать"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={remove}
          className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-slate-700 shadow-md ring-1 ring-black/10 transition hover:bg-white hover:text-red-600"
          aria-label="Удалить"
          title="Удалить"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {open ? <ProductForm slug={slug} product={product} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

export function AddProductButton({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex min-h-[280px] w-full flex-col items-center justify-center gap-3 rounded-none border-2 border-dashed border-slate-300 bg-slate-50 text-slate-500 transition hover:border-[#5c7887] hover:text-[#5c7887]"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
        <span className="text-sm font-semibold uppercase tracking-[0.18em]">Добавить товар</span>
      </button>
      {open ? <ProductForm slug={slug} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
