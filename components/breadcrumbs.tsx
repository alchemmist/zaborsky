import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-slate-400"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-4 pt-6 sm:px-6 lg:px-8">
      <ol className="mx-auto flex max-w-7xl items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
        <li>
          <Link href="/" className="transition hover:text-[#5c7887]">
            Главная
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronIcon />
            {item.href ? (
              <Link href={item.href} className="transition hover:text-[#5c7887]">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
