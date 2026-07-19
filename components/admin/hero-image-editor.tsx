"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function HeroImageEditor({ path }: { path: string }) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsAdmin(document.cookie.split("; ").some((c) => c.startsWith("zbr_admin_ui=")));
    check();
    const onAdmin = () => setIsAdmin(true);
    window.addEventListener("zbr-admin", onAdmin);
    return () => window.removeEventListener("zbr-admin", onAdmin);
  }, []);

  if (!isAdmin) return null;

  async function onFile(file: File) {
    setBusy(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const up = await fetch("/api/admin/upload", { method: "POST", body: fd });
      if (!up.ok) throw new Error("upload");
      const { url } = await up.json();
      const res = await fetch("/api/admin/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, url }),
      });
      if (!res.ok) throw new Error("save");
      router.refresh();
    } catch {
      alert("Не удалось заменить фон");
    } finally {
      setBusy(false);
    }
  }

  return (
    <label className="absolute right-4 top-4 z-20 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-md ring-1 ring-black/10 transition hover:text-[#5c7887]">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7h3l2-2h6l2 2h3v12H4z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="3.2" />
      </svg>
      {busy ? "Загрузка…" : "Заменить фон"}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        disabled={busy}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onFile(f);
        }}
      />
    </label>
  );
}
