import Image from "next/image";
import { sitePath } from "@/components/site-path";

type AboutSectionProps = {
  title: string;
  description: string;
  callToAction: string;
  phoneHighlight: string;
  images: Array<{ src: string; alt: string }>;
};

export function AboutSection({
  title,
  description,
  callToAction,
  phoneHighlight,
  images,
}: AboutSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              {description}
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-lg text-slate-700">
                {callToAction}
              </p>
              <p className="text-2xl font-semibold tracking-[0.14em] text-[#5c7887]">
                {phoneHighlight}
              </p>
            </div>
          </div>

          {/* Images Gallery */}
          <div className="space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[16/9] overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={sitePath(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
