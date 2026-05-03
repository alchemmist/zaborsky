export function Footer() {
  return (
    <footer className="bg-[#5c7887] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-white/80">
          Чтобы получить консультацию по всем нашим товарам, позвоните или
          напишите нам:
        </p>
        <div className="flex flex-col items-center gap-3 text-base font-semibold uppercase tracking-[0.16em] sm:flex-row sm:flex-wrap sm:justify-center">
          <a href="tel:+79659383373" className="transition hover:text-white/85">
            тел 8-965-938-33-73
          </a>
          <span className="hidden text-white/55 sm:inline">MAX / Telegram</span>
          <span className="text-white/55 sm:hidden">MAX / Telegram</span>
          <a
            href="mailto:prometiz@inbox.ru"
            className="transition hover:text-white/85"
          >
            Email: prometiz@inbox.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
