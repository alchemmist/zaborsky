import Image from "next/image";
import { sitePath } from "@/components/site-path";
import { AddressEditor } from "@/components/admin/address-editor";

type AddressSectionProps = {
  description: string;
  imageSrc: string;
  imageAlt: string;
  editable?: boolean;
};

export function AddressSection({
  description,
  imageSrc,
  imageAlt,
  editable = false,
}: AddressSectionProps) {
  return (
    <section className="bg-white pt-6 sm:pt-8 pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
            Наш адрес
          </h2>
          {editable ? <AddressEditor description={description} image={imageSrc} /> : null}
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="pt-8">
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
