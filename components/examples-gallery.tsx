import Image from "next/image";
import { sitePath } from "@/components/site-path";

type ExamplesGalleryProps = {
  examples: Array<{ src: string; alt: string }>;
  size?: "small" | "medium" | "large";
};

export function ExamplesGallery({ examples, size = "small" }: ExamplesGalleryProps) {
  const sizeClasses = {
    small: "md:w-[calc(25%-1rem)]",
    medium: "md:w-[calc(33.333%-1rem)]",
    large: "md:w-[calc(50%-1rem)]",
  };

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-wrap justify-center gap-4">
          {examples.map((example, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md w-full ${sizeClasses[size]}`}
            >
              <Image
                src={sitePath(example.src)}
                alt={example.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
