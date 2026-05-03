import Link from "next/link";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Заборы", href: "#fences" },
  { label: "Благоустройство", href: "#about" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const fenceItems = [
  "ЖАЛЮЗИ",
  "МЕТАЛЛОШТАКЕТНИК-РАНЧО",
  "ЕВРОШТАКЕТНИК",
  "САЙДИНГ",
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="text-lg font-semibold tracking-[0.34em] text-white/90"
        >
          ZABORSKY
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <details className="group relative">
            <summary className="list-none cursor-pointer rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md transition hover:bg-white/20 hover:text-white [&::-webkit-details-marker]:hidden">
              Заборы
            </summary>
            <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-white/20 bg-[#101723]/90 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
              {fenceItems.map((item) => (
                <a
                  key={item}
                  href="#fences"
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm tracking-[0.16em] text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <span>{item}</span>
                  <span className="text-white/40">→</span>
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
