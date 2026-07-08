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

export function SectionMetaEditor({
  slug,
  description,
  specs,
  hasSpecs,
}: {
  slug: string;
  description: string;
  specs: string[];
  hasSpecs: boolean;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState(description);
  const [specsText, setSpecsText] = useState(specs.join("\n"));
  const [saving, setSaving] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const body: { slug: string; description: string; specs?: string[] } = {
      slug,
      description: desc,
    };
    if (hasSpecs) {
      body.specs = specsText.split("\n").map((s) => s.trim()).filter(Boolean);
    }
    const res = await fetch("/api/admin/section", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
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
        Редактировать текст
      </button>
      {open ? (
        <Modal title="Описание раздела" onClose={() => setOpen(false)}>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className={labelClass}>Описание</label>
              <textarea
                className={`${fieldClass} min-h-24`}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            {hasSpecs ? (
              <div>
                <label className={labelClass}>Характеристики (по одной в строке)</label>
                <textarea
                  className={`${fieldClass} min-h-40`}
                  value={specsText}
                  onChange={(e) => setSpecsText(e.target.value)}
                />
              </div>
            ) : null}
            <div className="flex justify-end gap-3 pt-2">
              <button type="button" className={ghostBtn} onClick={() => setOpen(false)}>
                Отмена
              </button>
              <button type="submit" className={primaryBtn} disabled={saving}>
                {saving ? "Сохранение…" : "Сохранить"}
              </button>
            </div>
          </form>
        </Modal>
      ) : null}
    </>
  );
}
