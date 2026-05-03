import Image from "next/image";
import { sitePath } from "@/components/site-path";

type FenceCardProps = {
  title: string;
  src: string;
  alt: string;
};

export function FenceCard({ title, src, alt }: FenceCardProps) {
  return (
    <article className="group overflow-hidden bg-white shadow-[0_8px_22px_rgba(22,28,37,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,28,37,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 md:aspect-[16/11]">
        <Image
          src={sitePath(src)}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-black/5 px-4 py-3.5">
        <h3 className="text-lg font-semibold uppercase tracking-[0.22em] text-slate-900 sm:text-sm">
          {title}
        </h3>
      </div>
    </article>
  );
}
