import { FenceCard } from "@/components/fence-card";

const fences = [
  {
    title: "ЖАЛЮЗИ",
    src: "/images/fence-jalusi.svg",
    alt: "Забор жалюзи в современном исполнении",
  },
  {
    title: "МЕТАЛЛОШТАКЕТНИК-РАНЧО",
    src: "/images/fence-rancho.svg",
    alt: "Забор из металлоштакетника в стиле ранчо",
  },
  {
    title: "ЕВРОШТАКЕТНИК",
    src: "/images/fence-euroshaketnik.svg",
    alt: "Евроштакетник на участке современного дома",
  },
  {
    title: "САЙДИНГ",
    src: "/images/fence-siding.svg",
    alt: "Секционный забор в стиле сайдинга",
  },
];

export function FencesGrid() {
  return (
    <section id="fences" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Каталог
            </p>
            <h2 className="text-3xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-4xl">
              Наши заборы
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {fences.map((fence) => (
            <FenceCard key={fence.title} {...fence} />
          ))}
        </div>
      </div>
    </section>
  );
}
