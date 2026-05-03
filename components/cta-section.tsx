export function CtaSection() {
  return (
    <section className="border-y border-black/10 bg-[#f6f1e8]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-700 md:text-base">
          Хотите проконсультироваться по заборам жалюзи?
        </p>
        <a
          href="tel:+79659383373"
          className="inline-flex w-full items-center justify-center rounded-none bg-[#17202b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#263243] md:w-auto"
        >
          Запланировать звонок
        </a>
      </div>
    </section>
  );
}
