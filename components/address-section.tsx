import Image from "next/image";
import { sitePath } from "@/components/site-path";

type AddressSectionProps = {
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function AddressSection({
  description,
  imageSrc,
  imageAlt,
}: AddressSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
          Наш адрес
        </h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
              {description}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md">
            <Image
              src={sitePath(imageSrc)}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

