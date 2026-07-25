"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [open, setOpen] = useState(false);
  const touchX = useRef<number | null>(null);
  const swiped = useRef(false);
  const lbTouchX = useRef<number | null>(null);

  const list = images.length > 0 ? images : [""];
  const count = list.length;
  const i = Math.min(index, count - 1);
  const current = list[i];
  const uploaded = current.startsWith("/uploads/");

  function go(delta: number) {
    setIndex((v) => (v + delta + count) % count);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
    swiped.current = false;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      swiped.current = true;
      if (count > 1) go(dx < 0 ? 1 : -1);
    }
    touchX.current = null;
  }

  function openLightbox() {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    if (current) setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, count]);

  function lbTouchStart(e: React.TouchEvent) {
    lbTouchX.current = e.touches[0].clientX;
  }
  function lbTouchEnd(e: React.TouchEvent) {
    if (lbTouchX.current === null || count < 2) return;
    const dx = e.changedTouches[0].clientX - lbTouchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    lbTouchX.current = null;
  }

  const arrowBtn =
    "absolute top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-slate-800 shadow ring-1 ring-black/10 transition hover:bg-white";

  return (
    <>
      <div
        className={
          (compact ? "relative px-6 pt-6" : "relative aspect-[4/3] overflow-hidden") +
          " cursor-zoom-in"
        }
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={openLightbox}
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
              className={`${arrowBtn} left-2`}
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
              className={`${arrowBtn} right-2`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">
              {list.map((_, di) => (
                <span
                  key={di}
                  className={`h-1.5 rounded-full transition-all ${
                    di === i ? "w-4 bg-white" : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {open && typeof document !== "undefined"
        ? createPortal(
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
          onTouchStart={lbTouchStart}
          onTouchEnd={lbTouchEnd}
        >
          <button
            type="button"
            aria-label="Закрыть"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className="relative flex h-[85vh] w-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={sitePath(current)}
              alt={alt}
              fill
              sizes="100vw"
              unoptimized={uploaded}
              className="object-contain"
            />
          </div>

          {count > 1 ? (
            <>
              <button
                type="button"
                aria-label="Предыдущее фото"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className="absolute left-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:left-6"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Следующее фото"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                className="absolute right-3 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:right-6"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white">
                {i + 1} / {count}
              </div>
            </>
          ) : null}
        </div>,
          document.body
        )
        : null}
    </>
  );
}
