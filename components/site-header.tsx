import Link from "next/link";

const navItems = [
  { label: "Главная", href: "/home" },
  { label: "Благоустройство", href: "/landscaping" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

const fenceItems = [
  { label: "ЕВРОЖАЛЮЗИ", href: "/fences/euro-jalusi" },
  { label: "Жалюзи ЭКО-Z и ЭКО-Z US", href: "/fences/eco-z" },
  { label: "Жалюзи РЕСНИЧКИ", href: "/fences/resnichki" },
  { label: "Жалюзи ХАЙ-ТЕК", href: "/fences/high-tech" },
  {
    label: "МЕТАЛЛОПЛАНКЕН-РАНЧО",
    href: "/fences/metal-planken-rancho",
    children: [{ label: "ЕВРОШТАКЕТНИК", href: "/fences/metal-planken-rancho/euro-shaketnik" }],
  },
  { label: "САЙДИНГ", href: "/fences/siding" },
  { label: "3D СЕТКА ГИТТЕР", href: "/fences/gitter" },
  { label: "ТРАВЯНОЙ ЗАБОР GRASS FENCE", href: "/fences/grass-fence" },
  {
    label: "КОМПЛЕКТУЮЩИЕ ДЛЯ ЗАБОРОВ",
    href: "/fences/accessories",
    children: [
      { label: "КОЛПАКИ ZKING", href: "/fences/accessories/caps" },
      { label: "ПАРАПЕТЫ ZKING", href: "/fences/accessories/parapets" },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/home"
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

            <div className="group relative">
              <Link
                href="/fences"
                className="text-sm font-medium uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
              >
                Заборы
              </Link>

              <div aria-hidden="true" className="absolute left-0 right-0 top-full h-3" />
              <div className="invisible absolute right-0 top-full mt-3 w-80 translate-y-1 overflow-hidden rounded-2xl border border-white/20 bg-[#101723]/90 p-2 opacity-0 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {fenceItems.map((item) => (
                  <div key={item.label} className="rounded-xl">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm tracking-[0.14em] text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span className="text-white/40">→</span>
                    </Link>

                    {item.children ? (
                      <div className="space-y-1 pb-2 pl-4 pt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-4 py-2 text-xs tracking-[0.12em] text-white/65 transition hover:bg-white/8 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
