import Image from "next/image";
import { sitePath } from "@/components/site-path";
import type { CatalogProduct } from "@/lib/types";

export function CatalogProductCard({
  product,
  compact,
}: {
  product: CatalogProduct;
  compact?: boolean;
}) {
  const uploaded = product.image.startsWith("/uploads/");
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_10px_26px_rgba(22,28,37,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(22,28,37,0.12)]">
       <div className={compact ? "px-6 pt-6" : "relative aspect-[4/3] overflow-hidden"}>
        <Image
          src={sitePath(product.image)}
          alt={product.alt}
          fill={!compact}
          width={compact ? 300 : undefined}
          height={compact ? 300 : undefined}
          sizes={compact ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"}
          unoptimized={uploaded}
          className={compact ? "object-contain transition duration-500 group-hover:scale-110 mx-auto" : "object-cover transition duration-500 group-hover:scale-110"}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="space-y-2">
          <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-lg">
            {product.title}
          </h3>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-600 sm:text-[15px]">
            {product.color}
          </p>
          {product.extra ? (
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#5c7887]">
              {product.extra}
            </p>
          ) : null}
        </div>
        <p className="mt-auto inline-flex w-fit rounded-full bg-[#5c7887] px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
          {product.price}
        </p>
      </div>
    </article>
  );
}
