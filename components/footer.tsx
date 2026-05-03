export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#101723] px-4 py-8 text-white/70 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold tracking-[0.24em] text-white/90">
          ZABORSKY
        </p>
        <div className="flex flex-col gap-1 sm:items-end">
          <a href="tel:+79659383373" className="transition hover:text-white">
            8-965-938-33-73
          </a>
          <a
            href="mailto:prometiz@inbox.ru"
            className="transition hover:text-white"
          >
            prometiz@inbox.ru
          </a>
        </div>
      </div>
    </footer>
  );
}
