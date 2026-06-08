import { FenceCard } from "@/components/fence-card";

const fences = [
  {
    title: "ЖАЛЮЗИ",
    src: "/images/home/jalusi-example.png",
    alt: "Забор жалюзи в современном исполнении",
    href: "/fences/euro-jalusi/",
  },
  {
    title: "МЕТАЛЛОПЛАНКЕН-РАНЧО",
    src: "/images/home/metall-example.png",
    alt: "Забор из металлопланкена в стиле ранчо",
    href: "/fences/metal-planken-rancho/",
  },
  {
    title: "ЕВРОШТАКЕТНИК",
    src: "/images/home/shtaketnick-example.png",
    alt: "Евроштакетник на участке современного дома",
    href: "/fences/metal-planken-rancho/euro-shaketnik/",
  },
  {
    title: "САЙДИНГ",
    src: "/images/home/siding-example.png",
    alt: "Секционный забор в стиле сайдинга",
    href: "/fences/siding/",
  },
];

export function FencesGrid() {
  return (
    <section id="fences" className="bg-white px-6 py-6 sm:px-10 lg:px-20 xl:px-28">
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
