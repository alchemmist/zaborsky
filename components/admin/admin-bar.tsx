"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Modal,
  fieldClass,
  labelClass,
  primaryBtn,
  ghostBtn,
} from "@/components/admin/modal";

function ChangePasswordModal({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (next !== confirm) {
      setError("Новый пароль и подтверждение не совпадают");
      return;
    }
    setSaving(true);
    const res = await fetch("/api/admin/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ current, next }),
    });
    setSaving(false);
    if (res.ok) {
      setDone(true);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Не удалось сменить пароль");
    }
  }

  return (
    <Modal title="Смена пароля" onClose={onClose}>
      {done ? (
        <div className="space-y-4">
          <p className="text-sm text-slate-700">
            Пароль изменён. При следующем входе используйте новый пароль.
          </p>
          <div className="flex justify-end">
            <button type="button" className={primaryBtn} onClick={onClose}>
              Готово
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className={labelClass}>Текущий пароль</label>
            <input type="password" className={fieldClass} value={current} onChange={(e) => setCurrent(e.target.value)} required autoComplete="current-password" />
          </div>
          <div>
            <label className={labelClass}>Новый пароль</label>
            <input type="password" className={fieldClass} value={next} onChange={(e) => setNext(e.target.value)} required autoComplete="new-password" />
          </div>
          <div>
            <label className={labelClass}>Повторите новый пароль</label>
            <input type="password" className={fieldClass} value={confirm} onChange={(e) => setConfirm(e.target.value)} required autoComplete="new-password" />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" className={ghostBtn} onClick={onClose}>Отмена</button>
            <button type="submit" className={primaryBtn} disabled={saving}>{saving ? "Сохранение…" : "Сменить пароль"}</button>
          </div>
        </form>
      )}
    </Modal>
  );
}

export function AdminBar() {
  const router = useRouter();
  const [pwOpen, setPwOpen] = useState(false);

  // Ставим клиентскую метку админа, чтобы кнопки редактирования (в т.ч. замена
  // фона шапки) появлялись и у сессий, залогиненных до её появления.
  useEffect(() => {
    document.cookie = `zbr_admin_ui=1; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`;
    window.dispatchEvent(new Event("zbr-admin"));
  }, []);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    document.cookie = "zbr_admin_ui=; path=/; max-age=0";
    router.refresh();
  }

  return (
    <>
      <div className="fixed bottom-4 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-3 rounded-full bg-slate-900/95 px-5 py-2.5 text-sm text-white shadow-xl ring-1 ring-white/10 backdrop-blur">
        <span className="flex items-center gap-2 font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Режим редактирования
        </span>
        <button
          type="button"
          onClick={() => setPwOpen(true)}
          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white/20"
        >
          Пароль
        </button>
        <button
          type="button"
          onClick={logout}
          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white/20"
        >
          Выйти
        </button>
      </div>
      {pwOpen ? <ChangePasswordModal onClose={() => setPwOpen(false)} /> : null}
    </>
  );
}
