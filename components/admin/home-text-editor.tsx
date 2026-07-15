"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Modal,
  fieldClass,
  labelClass,
  primaryBtn,
  ghostBtn,
} from "@/components/admin/modal";

export function HomeTextEditor({
  heroTitle,
  heroSubtitle,
}: {
  heroTitle: string;
  heroSubtitle: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(heroTitle);
  const [subtitle, setSubtitle] = useState(heroSubtitle);
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ heroTitle: title, heroSubtitle: subtitle }),
    });
    setSaving(false);
    if (res.ok) {
      setOpen(false);
      router.refresh();
    } else {
      alert("Не удалось сохранить");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute right-4 top-20 z-20 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-md ring-1 ring-black/10 transition hover:text-[#5c7887]"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Редактировать текст
      </button>
      {open ? (
        <Modal title="Текст на главной" onClose={() => setOpen(false)}>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className={labelClass}>Заголовок</label>
              <textarea className={`${fieldClass} min-h-20`} value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <label className={labelClass}>Подзаголовок</label>
              <textarea className={`${fieldClass} min-h-20`} value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" className={ghostBtn} onClick={() => setOpen(false)}>Отмена</button>
              <button type="submit" className={primaryBtn} disabled={saving}>{saving ? "Сохранение…" : "Сохранить"}</button>
            </div>
          </form>
        </Modal>
      ) : null}
    </>
  );
}
