import Image from "next/image";
import { sitePath } from "@/components/site-path";

export type CatalogSpec = string;

export type CatalogProduct = {
  id: string;
  title: string;
  color: string;
  extra?: string;
  price: string;
  image: string;
  alt: string;
};

type CatalogPageProps = {
  specs?: CatalogSpec[];
  products: CatalogProduct[];
};

function CatalogProductCard({ product }: { product: CatalogProduct }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_10px_26px_rgba(22,28,37,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(22,28,37,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-black/5 bg-slate-100 flex items-center justify-center">
        <Image
          src={sitePath(product.image)}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain transition duration-500 group-hover:scale-110 p-4"
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

export function CatalogPage({ specs, products }: CatalogPageProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {specs?.length ? (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
              Характеристики
            </h2>
            <ul className="mt-8 space-y-4 text-lg leading-9 text-slate-700 sm:text-xl">
              {specs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className={specs?.length ? "mt-16" : ""}>
          <h2 className="text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
            Каталог
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <CatalogProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
