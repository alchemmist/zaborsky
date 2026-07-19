"use client";

import { useState } from "react";
import { labelClass } from "@/components/admin/modal";

export function MultiImageField({
  value,
  onChange,
}: {
  value: string[];
  onChange: (urls: string[]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function addFiles(files: FileList) {
    setUploading(true);
    setError(null);
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
        if (!res.ok) throw new Error("upload");
        const data = await res.json();
        uploaded.push(data.url as string);
      }
      onChange([...value, ...uploaded]);
    } catch {
      setError("Не удалось загрузить фото");
    } finally {
      setUploading(false);
    }
  }

  function remove(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  }

  return (
    <div>
      <span className={labelClass}>Фото (можно несколько, первое — обложка)</span>
      {value.length > 0 ? (
        <div className="mb-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {value.map((url, i) => (
            <div key={url + i} className="group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt="" className="aspect-square w-full object-cover" />
              {i === 0 ? (
                <span className="absolute left-1 top-1 rounded bg-[#5c7887] px-1.5 py-0.5 text-[10px] font-semibold uppercase text-white">
                  Обложка
                </span>
              ) : null}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/45 px-1 py-1 opacity-0 transition group-hover:opacity-100">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className="px-1 text-white disabled:opacity-30" aria-label="Левее">‹</button>
                <button type="button" onClick={() => remove(i)} className="px-1 text-white hover:text-red-300" aria-label="Удалить">✕</button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === value.length - 1} className="px-1 text-white disabled:opacity-30" aria-label="Правее">›</button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <label className="inline-flex cursor-pointer rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
        {uploading ? "Загрузка…" : "Добавить фото"}
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length) addFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </label>
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
