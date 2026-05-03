import { FenceCard } from "@/components/fence-card";

const fences = [
  {
    title: "ЖАЛЮЗИ",
    src: "/images/jalusi-example.png",
    alt: "Забор жалюзи в современном исполнении",
  },
  {
    title: "МЕТАЛЛОШТАКЕТНИК-РАНЧО",
    src: "/images/metall-example.png",
    alt: "Забор из металлоштакетника в стиле ранчо",
  },
  {
    title: "ЕВРОШТАКЕТНИК",
    src: "/images/shtaketnick-example.png",
    alt: "Евроштакетник на участке современного дома",
  },
  {
    title: "САЙДИНГ",
    src: "/images/siding-example.png",
    alt: "Секционный забор в стиле сайдинга",
  },
];

export function FencesGrid() {
  return (
    <section id="fences" className="bg-white px-6 py-20 sm:px-10 lg:px-20 xl:px-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
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
