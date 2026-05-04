import Image from "next/image";
import { sitePath } from "@/components/site-path";

type ReviewCardProps = {
  text: string;
  author: string;
  image: string;
  alt: string;
};

export function ReviewCard({ text, author, image, alt }: ReviewCardProps) {
  return (
    <article className="flex flex-col overflow-hidden bg-white shadow-[0_10px_26px_rgba(22,28,37,0.08)] ring-1 ring-black/5 rounded-lg">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-black/5 bg-slate-100">
        <Image
          src={sitePath(image)}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
          {text}
        </p>
        <p className="mt-auto font-semibold uppercase tracking-[0.14em] text-slate-900 text-base sm:text-lg">
          {author}
        </p>
      </div>
    </article>
  );
}
