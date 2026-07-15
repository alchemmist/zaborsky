"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { FaqItem } from "@/lib/types";
import {
  Modal,
  fieldClass,
  labelClass,
  primaryBtn,
  ghostBtn,
} from "@/components/admin/modal";
import { AdminBar } from "@/components/admin/admin-bar";

export function FaqEditor({ faq }: { faq: FaqItem[] }) {
  const router = useRouter();
  const [items, setItems] = useState<FaqItem[]>(faq);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [draft, setDraft] = useState<FaqItem>({ question: "", answer: "" });
  const [saving, setSaving] = useState(false);

  const signature = JSON.stringify(faq);
  useEffect(() => {
    setItems(faq);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  async function persist(next: FaqItem[]) {
    setSaving(true);
    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ faq: next }),
    });
    setSaving(false);
    if (res.ok) {
      setItems(next);
      router.refresh();
    } else {
      alert("Не удалось сохранить");
    }
  }

  function openEdit(i: number) {
    setEditIdx(i);
    setDraft(items[i]);
  }
  function openAdd() {
    setEditIdx(-1);
    setDraft({ question: "", answer: "" });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const next = [...items];
    if (editIdx === -1) next.push(draft);
    else if (editIdx !== null) next[editIdx] = draft;
    await persist(next);
    setEditIdx(null);
  }

  async function remove(i: number) {
    if (!confirm(`Удалить вопрос «${items[i].question}»?`)) return;
    await persist(items.filter((_, idx) => idx !== i));
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-3xl">
          Часто задаваемые вопросы
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {items.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-3 px-6 py-5">
                <div className="min-w-0">
                  <p className="text-base font-semibold uppercase tracking-[0.1em] text-slate-900 sm:text-lg">
                    {item.question}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500">{item.answer}</p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  <button type="button" onClick={() => openEdit(index)} className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-[#5c7887]" title="Редактировать">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <button type="button" onClick={() => remove(index)} className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-red-600" title="Удалить">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-3xl">
          <button type="button" onClick={openAdd} className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-slate-300 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 transition hover:border-[#5c7887] hover:text-[#5c7887]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
            Добавить вопрос
          </button>
        </div>
      </div>

      {editIdx !== null ? (
        <Modal title={editIdx === -1 ? "Новый вопрос" : "Редактировать вопрос"} onClose={() => setEditIdx(null)}>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className={labelClass}>Вопрос</label>
              <textarea className={`${fieldClass} min-h-16`} value={draft.question} onChange={(e) => setDraft({ ...draft, question: e.target.value })} required />
            </div>
            <div>
              <label className={labelClass}>Ответ</label>
              <textarea className={`${fieldClass} min-h-40`} value={draft.answer} onChange={(e) => setDraft({ ...draft, answer: e.target.value })} required />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" className={ghostBtn} onClick={() => setEditIdx(null)}>Отмена</button>
              <button type="submit" className={primaryBtn} disabled={saving}>{saving ? "Сохранение…" : "Сохранить"}</button>
            </div>
          </form>
        </Modal>
      ) : null}
      <AdminBar />
    </section>
  );
}
