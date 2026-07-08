"use client";

import { useRouter } from "next/navigation";

export function AdminBar() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-3 rounded-full bg-slate-900/95 px-5 py-2.5 text-sm text-white shadow-xl ring-1 ring-white/10 backdrop-blur">
      <span className="flex items-center gap-2 font-medium">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Режим редактирования
      </span>
      <button
        type="button"
        onClick={logout}
        className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white/20"
      >
        Выйти
      </button>
    </div>
  );
}
