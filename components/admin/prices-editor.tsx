"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PriceRow } from "@/lib/types";
import {
  Modal,
  fieldClass,
  labelClass,
  primaryBtn,
  ghostBtn,
} from "@/components/admin/modal";

const emptyRow: PriceRow = { name: "", price: "", href: "/", colors: "" };

export function PricesEditor({ rows: initial }: { rows: PriceRow[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<PriceRow[]>(initial);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [draft, setDraft] = useState<PriceRow>(emptyRow);
  const [saving, setSaving] = useState(false);

  async function persist(next: PriceRow[]) {
    setSaving(true);
    const res = await fetch("/api/admin/prices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rows: next }),
    });
    setSaving(false);
    if (res.ok) {
      setRows(next);
      router.refresh();
    } else {
      alert("Не удалось сохранить");
    }
  }

  function openEdit(idx: number) {
    setEditIdx(idx);
    setDraft(rows[idx]);
  }
  function openAdd() {
    setEditIdx(-1);
    setDraft(emptyRow);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const next = [...rows];
    if (editIdx === -1) next.push(draft);
    else if (editIdx !== null) next[editIdx] = draft;
    await persist(next);
    setEditIdx(null);
  }

  async function remove(idx: number) {
    if (!confirm(`Удалить строку «${rows[idx].name}»?`)) return;
    await persist(rows.filter((_, i) => i !== idx));
  }

  return (
    <>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm sm:text-base">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-4 font-semibold uppercase tracking-[0.1em] text-slate-500 sm:px-6">Тип</th>
              <th className="px-4 py-4 font-semibold uppercase tracking-[0.1em] text-slate-500 sm:px-6">Цена</th>
              <th className="hidden px-4 py-4 font-semibold uppercase tracking-[0.1em] text-slate-500 sm:table-cell sm:px-6">Цвета / Виды</th>
              <th className="px-4 py-4 font-semibold uppercase tracking-[0.1em] text-slate-500 sm:px-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((item, idx) => (
              <tr key={idx} className="transition hover:bg-slate-50">
                <td className="px-4 py-4 font-medium text-slate-900 sm:px-6">{item.name}</td>
                <td className="px-4 py-4 text-slate-700 sm:px-6">{item.price}</td>
                <td className="hidden px-4 py-4 text-sm text-slate-500 sm:table-cell sm:px-6">{item.colors}</td>
                <td className="px-4 py-4 sm:px-6">
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => openEdit(idx)} className="grid h-8 w-8 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-[#5c7887]" title="Редактировать">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button type="button" onClick={() => remove(idx)} className="grid h-8 w-8 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-red-600" title="Удалить">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={openAdd} className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-slate-300 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 transition hover:border-[#5c7887] hover:text-[#5c7887]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
        Добавить строку
      </button>

      {editIdx !== null ? (
        <Modal title={editIdx === -1 ? "Новая строка" : "Редактировать строку"} onClose={() => setEditIdx(null)}>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className={labelClass}>Название</label>
              <input className={fieldClass} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} required />
            </div>
            <div>
              <label className={labelClass}>Цена</label>
              <input className={fieldClass} value={draft.price} onChange={(e) => setDraft({ ...draft, price: e.target.value })} required />
            </div>
            <div>
              <label className={labelClass}>Цвета / виды</label>
              <input className={fieldClass} value={draft.colors} onChange={(e) => setDraft({ ...draft, colors: e.target.value })} />
            </div>
            <div>
              <label className={labelClass}>Ссылка «Подробнее»</label>
              <input className={fieldClass} value={draft.href} onChange={(e) => setDraft({ ...draft, href: e.target.value })} placeholder="/fences/..." />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" className={ghostBtn} onClick={() => setEditIdx(null)}>Отмена</button>
              <button type="submit" className={primaryBtn} disabled={saving}>{saving ? "Сохранение…" : "Сохранить"}</button>
            </div>
          </form>
        </Modal>
      ) : null}
    </>
  );
}
