import Image from "next/image";
import { sitePath } from "@/components/site-path";

export function Hero() {
  return (
    <section id="hero" className="relative h-[50svh] min-h-[420px] overflow-hidden bg-[#5c7887]">
      <Image
        src={sitePath("/images/home-background.png")}
        alt="Современный дом с ограждением ZABORSKY"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#1d262b]/60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-3xl uppercase text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            СТИЛЬ СНАРУЖИ И ВНУТРИ
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm uppercase tracking-[0.26em] text-white/80 sm:text-base md:text-lg">
            ЗАБОРЫ ЖАЛЮЗИ — ЛУЧШИЙ СТИЛЬ ВАШЕГО УЧАСТКА
          </p>
        </div>
      </div>
    </section>
  );
}
