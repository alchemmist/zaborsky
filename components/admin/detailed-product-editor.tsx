"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { DetailedCatalogProduct } from "@/lib/types";
import {
  Modal,
  fieldClass,
  labelClass,
  primaryBtn,
  ghostBtn,
} from "@/components/admin/modal";

type Draft = {
  title: string;
  diameter: string;
  size: string;
  coating: string;
  cell: string;
  rodDiameter: string;
  colors: string;
  additional: string;
  price: string;
};

function toDraft(p?: DetailedCatalogProduct): Draft {
  return {
    title: p?.title ?? "3D сетка Гиттер",
    diameter: p?.diameter ?? "",
    size: p?.size ?? "",
    coating: p?.coating ?? "",
    cell: p?.cell ?? "",
    rodDiameter: p?.rodDiameter ?? "",
    colors: p?.colors?.join(", ") ?? "",
    additional: p?.additional ?? "",
    price: p?.price ?? "",
  };
}

const rows: { key: keyof Draft; label: string }[] = [
  { key: "title", label: "Название" },
  { key: "diameter", label: "Диаметр" },
  { key: "size", label: "Размер" },
  { key: "coating", label: "Покрытие" },
  { key: "cell", label: "Ячейка" },
  { key: "rodDiameter", label: "Пруток" },
  { key: "colors", label: "Цвета (через запятую)" },
  { key: "additional", label: "Дополнительно" },
  { key: "price", label: "Цена" },
];

function DetailedForm({
  slug,
  product,
  onClose,
}: {
  slug: string;
  product?: DetailedCatalogProduct;
  onClose: () => void;
}) {
  const router = useRouter();
  const [draft, setDraft] = useState<Draft>(toDraft(product));
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload: DetailedCatalogProduct = {
      id: product?.id ?? "",
      title: draft.title,
      diameter: draft.diameter,
      size: draft.size,
      coating: draft.coating,
      cell: draft.cell,
      rodDiameter: draft.rodDiameter,
      colors: draft.colors.split(",").map((c) => c.trim()).filter(Boolean),
      additional: draft.additional || undefined,
      price: draft.price,
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
    <Modal title={product ? "Редактировать позицию" : "Новая позиция"} onClose={onClose}>
      <form onSubmit={submit} className="space-y-3">
        {rows.map(({ key, label }) => (
          <div key={key}>
            <label className={labelClass}>{label}</label>
            <input
              className={fieldClass}
              value={draft[key]}
              onChange={(e) => setDraft((d) => ({ ...d, [key]: e.target.value }))}
              required={key === "title" || key === "price"}
            />
          </div>
        ))}
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

export function DetailedProductEditControls({
  slug,
  product,
}: {
  slug: string;
  product: DetailedCatalogProduct;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function remove() {
    if (!confirm("Удалить позицию?")) return;
    const res = await fetch("/api/admin/product", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, id: product.id }),
    });
    if (res.ok) router.refresh();
    else alert("Не удалось удалить");
  }

  return (
    <>
      <div className="absolute right-2 top-2 z-20 flex gap-1.5">
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
      {open ? <DetailedForm slug={slug} product={product} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

export function AddDetailedProductButton({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex min-h-[280px] w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-300 bg-slate-50 text-slate-500 transition hover:border-[#5c7887] hover:text-[#5c7887]"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
        <span className="text-sm font-semibold uppercase tracking-[0.18em]">Добавить позицию</span>
      </button>
      {open ? <DetailedForm slug={slug} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
