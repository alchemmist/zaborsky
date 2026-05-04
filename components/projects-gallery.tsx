import Image from "next/image";
import { sitePath } from "@/components/site-path";

type ProjectsGalleryProps = {
  projects: Array<{ src: string; alt: string }>;
};

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-3xl">
          Наши объекты
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={sitePath(project.src)}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
