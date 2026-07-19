"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { sitePath } from "@/components/site-path";

export function ProductGallery({
  images,
  alt,
  compact,
}: {
  images: string[];
  alt: string;
  compact?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  const list = images.length > 0 ? images : [""];
  const count = list.length;
  const current = list[Math.min(index, count - 1)];
  const uploaded = current.startsWith("/uploads/");

  function go(delta: number) {
    setIndex((v) => (v + delta + count) % count);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null || count < 2) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  }

  return (
    <div
      className={compact ? "relative px-6 pt-6" : "relative aspect-[4/3] overflow-hidden"}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Image
        src={sitePath(current)}
        alt={alt}
        fill={!compact}
        width={compact ? 300 : undefined}
        height={compact ? 300 : undefined}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        unoptimized={uploaded}
        className={
          compact
            ? "mx-auto object-contain transition duration-500 group-hover:scale-110"
            : "object-cover transition duration-500 group-hover:scale-110"
        }
      />

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              go(-1);
            }}
            className="absolute left-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-slate-800 shadow ring-1 ring-black/10 transition hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Следующее фото"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              go(1);
            }}
            className="absolute right-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-slate-800 shadow ring-1 ring-black/10 transition hover:bg-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">
            {list.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === Math.min(index, count - 1) ? "w-4 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
