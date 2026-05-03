import Image from "next/image";

type FenceCardProps = {
  title: string;
  src: string;
  alt: string;
};

export function FenceCard({ title, src, alt }: FenceCardProps) {
  return (
    <article className="group overflow-hidden bg-white shadow-[0_10px_30px_rgba(22,28,37,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(22,28,37,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-black/5 px-5 py-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
          {title}
        </h3>
      </div>
    </article>
  );
}
