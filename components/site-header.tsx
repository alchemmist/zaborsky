"use client";

import { useState } from "react";
import Link from "next/link";

type MenuNode = {
  label: string;
  href: string;
  children?: MenuNode[];
};

const fenceItems: MenuNode[] = [
  { label: "Еврожалюзи", href: "/fences/euro-jalusi" },
  { label: "Жалюзи ЭКО-Z и ЭКО-Z US", href: "/fences/eco-z" },
  { label: "Жалюзи Реснички", href: "/fences/resnichki" },
  { label: "Жалюзи Хай-Тек", href: "/fences/high-tech" },
  { label: "Металлопланкен-ранчо", href: "/fences/metal-planken-rancho" },
  { label: "Евроштакетник", href: "/fences/metal-planken-rancho/euro-shaketnik" },
  { label: "Сайдинг", href: "/fences/siding" },
  { label: "3D сетка Гиттер", href: "/fences/gitter" },
  { label: "Травяной забор (Grass Fence)", href: "/fences/grass-fence" },
  {
    label: "Комплектующие для заборов",
    href: "/fences/accessories",
    children: [
      { label: "Колпаки ZKING", href: "/fences/accessories/caps" },
      { label: "Парапеты ZKING", href: "/fences/accessories/parapets" },
    ],
  },
];

const aboutItems: MenuNode[] = [{ label: "Отзывы", href: "/about/reviews" }];
const landscapingItems: MenuNode[] = [{ label: "Шаговые плиты", href: "/landscaping/step-pavers" }];

type DropdownProps = {
  item: MenuNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNavigate: () => void;
  align?: "left" | "right";
};

function MenuLink({
  href,
  label,
  onNavigate,
  className = "",
}: {
  href: string;
  label: string;
  onNavigate: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={className}
    >
      {label}
    </Link>
  );
}

function TreeChildLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[12px] font-normal uppercase tracking-[0.12em] text-white/75 transition hover:bg-white/10 hover:text-white"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
      <span>{label}</span>
    </Link>
  );
}

function SimpleDropdown({ item, open, onOpen, onClose, onNavigate, align = "left" }: DropdownProps) {
  const child = item.children?.[0];

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <MenuLink
        href={item.href}
        label={item.label}
        onNavigate={onNavigate}
        className="text-sm font-normal uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
      />

      <div aria-hidden="true" className="absolute left-0 right-0 top-full h-3" />
      <div
        className={[
          "absolute top-full mt-3 w-72 overflow-hidden rounded-2xl border border-white/20 bg-[#5c7887]/95 p-2 backdrop-blur-xl transition duration-200",
          align === "right" ? "right-0" : "left-0",
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0",
        ].join(" ")}
      >
        {child ? (
          <MenuLink
            href={child.href}
            label={child.label}
            onNavigate={onNavigate}
            className="block rounded-xl px-4 py-3 text-left text-sm font-normal uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/10 hover:text-white"
          />
        ) : null}
      </div>
    </div>
  );
}

function FenceTreeItem({
  item,
  onNavigate,
}: {
  item: MenuNode;
  onNavigate: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
      <MenuLink
        href={item.href}
        label={item.label}
        onNavigate={onNavigate}
        className="block rounded-xl px-4 py-3 text-sm font-normal uppercase tracking-[0.14em] text-white/90 transition hover:bg-white/10 hover:text-white"
      />

      {item.children?.length ? (
        <div className="mt-2 border-white/20 pl-4">
          {item.children.map((child) => (
            <TreeChildLink
              key={child.label}
              href={child.href}
              label={child.label}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function FenceDropdown({ open, onOpen, onClose, onNavigate }: Omit<DropdownProps, "item" | "align">) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <MenuLink
        href="/fences"
        label="Заборы"
        onNavigate={onNavigate}
        className="text-sm font-normal uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
      />

      <div aria-hidden="true" className="absolute left-0 right-0 top-full h-3" />
      <div
        className={[
          "absolute left-0 top-full mt-3 w-96 overflow-hidden rounded-2xl border border-white/20 bg-[#5c7887]/95 p-3 backdrop-blur-xl transition duration-200",
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0",
        ].join(" ")}
      >
        <div className="space-y-2">
          {fenceItems.map((item) => (
            <FenceTreeItem key={item.label} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const closeMenus = () => setOpenMenu(null);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };
  const closeAll = () => {
    closeMenus();
    closeMobileMenu();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#5c7887]/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/home" onClick={closeAll} className="select-none text-xl text-white">
          ZABORSKY
        </Link>

        <div
          className="hidden items-center gap-7 md:flex"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          <MenuLink
            href="/home"
            label="Главная"
            onNavigate={closeAll}
            className="text-sm font-normal uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
          />

          <FenceDropdown
            open={openMenu === "fences"}
            onOpen={() => setOpenMenu("fences")}
            onClose={closeMenus}
            onNavigate={closeAll}
          />

          <SimpleDropdown
            item={{ label: "Благоустройство", href: "/landscaping", children: landscapingItems }}
            open={openMenu === "landscaping"}
            onOpen={() => setOpenMenu("landscaping")}
            onClose={closeMenus}
            onNavigate={closeAll}
            align="left"
          />

          <SimpleDropdown
            item={{ label: "О нас", href: "/about", children: aboutItems }}
            open={openMenu === "about"}
            onOpen={() => setOpenMenu("about")}
            onClose={closeMenus}
            onNavigate={closeAll}
            align="left"
          />

          <MenuLink
            href="/contacts"
            onNavigate={closeAll}
            label="Контакты"
            className="text-sm font-normal uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
          />
        </div>

        <button
          type="button"
          className="inline-flex h-6 w-11 items-center justify-center text-white transition hover:text-white/85 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => {
            setMobileOpen((value) => !value);
            setMobileSection(null);
          }}
        >
          <span className="relative block h-4 w-5">
            <span
              className={[
                "absolute left-0 top-1/2 h-0.5 w-5 origin-center rounded-full bg-current transition duration-200",
                mobileOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[7px]",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-1/2 h-0.5 w-5 origin-center rounded-full bg-current transition duration-200",
                mobileOpen ? "opacity-0 scale-x-0 -translate-y-1/2" : "-translate-y-1/2",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-1/2 h-0.5 w-5 origin-center rounded-full bg-current transition duration-200",
                mobileOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[7px]",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      <div
        className={[
          "md:hidden border-t border-white/10 bg-[#5c7887]/96 backdrop-blur-md transition-all duration-200",
          mobileOpen ? "max-h-[calc(100vh-4.5rem)] opacity-100" : "max-h-0 overflow-hidden opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <nav className="flex flex-col gap-2 text-white">
            <MenuLink
              href="/home"
              label="Главная"
              onNavigate={closeAll}
              className="rounded-xl px-4 py-3 text-sm font-normal uppercase tracking-[0.18em] text-white/90 transition hover:bg-white/10"
            />

            <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-2">
              <div className="flex items-center gap-2">
                <MenuLink
                  href="/fences"
                  label="Заборы"
                  onNavigate={closeAll}
                  className="flex-1 rounded-xl px-3 py-3 text-sm font-normal uppercase tracking-[0.18em] text-white/90 transition hover:bg-white/10"
                />
                <button
                  type="button"
                  className="rounded-xl p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                  aria-expanded={mobileSection === "fences"}
                  aria-label="Показать подменю Заборы"
                  onClick={() =>
                    setMobileSection((value) => (value === "fences" ? null : "fences"))
                  }
                >
                  ▾
                </button>
              </div>
              {mobileSection === "fences" ? (
                <div className="mt-2 space-y-1 border-white/15 pl-3">
                  {fenceItems.map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/5 p-2">
                      <MenuLink
                        href={item.href}
                        label={item.label}
                        onNavigate={closeAll}
                        className="block rounded-lg px-3 py-2 text-sm uppercase tracking-[0.14em] text-white/90 transition hover:bg-white/10"
                      />
                      {item.children?.length ? (
                        <div className="mt-1 border-white/15 pl-3">
                          {item.children.map((child) => (
                            <TreeChildLink
                              key={child.label}
                              href={child.href}
                              label={child.label}
                              onNavigate={closeAll}
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-2">
              <div className="flex items-center gap-2">
                <MenuLink
                  href="/landscaping"
                  label="Благоустройство"
                  onNavigate={closeAll}
                  className="flex-1 rounded-xl px-3 py-3 text-sm font-normal uppercase tracking-[0.18em] text-white/90 transition hover:bg-white/10"
                />
                <button
                  type="button"
                  className="rounded-xl p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                  aria-expanded={mobileSection === "landscaping"}
                  aria-label="Показать подменю Благоустройство"
                  onClick={() =>
                    setMobileSection((value) => (value === "landscaping" ? null : "landscaping"))
                  }
                >
                  ▾
                </button>
              </div>
              {mobileSection === "landscaping" ? (
                <div className="mt-2 space-y-1 border-l border-white/15 pl-3">
                  {landscapingItems.map((item) => (
                    <MenuLink
                      key={item.label}
                      href={item.href}
                      label={item.label}
                      onNavigate={closeAll}
                      className="block rounded-xl px-3 py-2 text-sm uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/10"
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-2">
              <div className="flex items-center gap-2">
                <MenuLink
                  href="/about"
                  label="О нас"
                  onNavigate={closeAll}
                  className="flex-1 rounded-xl px-3 py-3 text-sm font-normal uppercase tracking-[0.18em] text-white/90 transition hover:bg-white/10"
                />
                <button
                  type="button"
                  className="rounded-xl p-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                  aria-expanded={mobileSection === "about"}
                  aria-label="Показать подменю О нас"
                  onClick={() =>
                    setMobileSection((value) => (value === "about" ? null : "about"))
                  }
                >
                  ▾
                </button>
              </div>
              {mobileSection === "about" ? (
                <div className="mt-2 space-y-1 border-l border-white/15 pl-3">
                  {aboutItems.map((item) => (
                    <MenuLink
                      key={item.label}
                      href={item.href}
                      label={item.label}
                      onNavigate={closeAll}
                      className="block rounded-xl px-3 py-2 text-sm uppercase tracking-[0.14em] text-white/85 transition hover:bg-white/10"
                    />
                  ))}
                </div>
              ) : null}
            </div>

            <MenuLink
              href="/contacts"
              label="Контакты"
              onNavigate={closeAll}
              className="rounded-xl px-4 py-3 text-sm font-normal uppercase tracking-[0.18em] text-white/90 transition hover:bg-white/10"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
