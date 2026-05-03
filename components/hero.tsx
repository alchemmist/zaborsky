import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#111827]"
    >
      <Image
        src="/images/hero-house-fence.svg"
        alt="Современный дом с ограждением ZABORSKY"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0b1220]/60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center text-white">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-white/70">
            ZABORSKY · fences & landscaping
          </p>
          <h1 className="text-4xl font-semibold uppercase tracking-[0.22em] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            СТИЛЬ СНАРУЖИ И ВНУТРИ
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm uppercase tracking-[0.26em] text-white/80 sm:text-base md:text-lg">
            ЗАБОРЫ ЖАЛЮЗИ — ЛУЧШИЙ СТИЛЬ ВАШЕГО УЧАСТКА
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="tel:+79659383373"
              className="inline-flex w-full items-center justify-center rounded-none bg-[#d9c9b1] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#101723] transition hover:bg-[#efe1cc] sm:w-auto sm:min-w-[260px]"
            >
              Запланировать звонок
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
