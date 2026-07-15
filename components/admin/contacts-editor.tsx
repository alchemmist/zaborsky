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

export function ContactsEditor({
  phone,
  email,
}: {
  phone: string;
  email: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [ph, setPh] = useState(phone);
  const [em, setEm] = useState(email);
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: ph, email: em }),
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
        className="inline-flex items-center gap-2 rounded-full border border-[#5c7887] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5c7887] transition hover:bg-[#5c7887] hover:text-white"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Редактировать контакты
      </button>
      {open ? (
        <Modal title="Контакты" onClose={() => setOpen(false)}>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className={labelClass}>Телефон</label>
              <input className={fieldClass} value={ph} onChange={(e) => setPh(e.target.value)} placeholder="8-965-938-33-73" required />
              <p className="mt-1 text-xs text-slate-500">Меняется сразу на всём сайте: в шапке-подвале, на главной, в контактах.</p>
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input className={fieldClass} type="email" value={em} onChange={(e) => setEm(e.target.value)} placeholder="mail@example.ru" required />
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
