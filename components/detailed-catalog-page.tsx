import Image from "next/image";
import { sitePath } from "@/components/site-path";

export type DetailedCatalogProduct = {
  id: string;
  title: string;
  diameter: string;
  size: string;
  coating: string;
  cell: string;
  rodDiameter: string;
  colors: string[];
  additional?: string;
  price: string;
};

type DetailedCatalogPageProps = {
  imageSrc: string;
  imageAlt: string;
  products: DetailedCatalogProduct[];
};

function DetailedCatalogCard({
  product,
  imageSrc,
  imageAlt,
}: {
  product: DetailedCatalogProduct;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_10px_26px_rgba(22,28,37,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(22,28,37,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-black/5 bg-slate-100">
        <Image
          src={sitePath(imageSrc)}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="space-y-2">
          <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-lg">
            {product.title}
          </h3>
        </div>

        <dl className="space-y-3 text-sm leading-6 text-slate-700 sm:text-[15px]">
          <div className="flex gap-2">
            <dt className="min-w-24 shrink-0 uppercase tracking-[0.16em] text-slate-500">
              Диаметр:
            </dt>
            <dd className="font-medium text-slate-900">{product.diameter}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="min-w-24 shrink-0 uppercase tracking-[0.16em] text-slate-500">
              Размер:
            </dt>
            <dd className="font-medium text-slate-900">{product.size}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="min-w-24 shrink-0 uppercase tracking-[0.16em] text-slate-500">
              Покрытие:
            </dt>
            <dd className="font-medium text-slate-900">{product.coating}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="min-w-24 shrink-0 uppercase tracking-[0.16em] text-slate-500">
              Ячейка:
            </dt>
            <dd className="font-medium text-slate-900">{product.cell}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="min-w-24 shrink-0 uppercase tracking-[0.16em] text-slate-500">
              Пруток:
            </dt>
            <dd className="font-medium text-slate-900">{product.rodDiameter}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="min-w-24 shrink-0 uppercase tracking-[0.16em] text-slate-500">
              Цвета:
            </dt>
            <dd className="font-medium text-slate-900">{product.colors.join(", ")}</dd>
          </div>
          {product.additional ? (
            <div className="flex gap-2">
              <dt className="min-w-24 shrink-0 uppercase tracking-[0.16em] text-slate-500">
                Дополнительно:
              </dt>
              <dd className="font-medium text-slate-900">{product.additional}</dd>
            </div>
          ) : null}
        </dl>

        <p className="mt-auto inline-flex w-fit rounded-full bg-[#5c7887] px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
          {product.price}
        </p>
      </div>
    </article>
  );
}

export function DetailedCatalogPage({
  imageSrc,
  imageAlt,
  products,
}: DetailedCatalogPageProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
          Каталог
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <DetailedCatalogCard
              key={product.id}
              product={product}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
