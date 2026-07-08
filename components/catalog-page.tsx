import Image from "next/image";
import { sitePath } from "@/components/site-path";
import { ProductJsonLd } from "@/components/json-ld";
import type { CatalogProduct } from "@/lib/types";
import { ProductEditControls, AddProductButton } from "@/components/admin/product-editor";
import { SectionMetaEditor } from "@/components/admin/section-meta-editor";
import { AdminBar } from "@/components/admin/admin-bar";

export type { CatalogProduct } from "@/lib/types";
export type CatalogSpec = string;

type CatalogPageProps = {
  specs?: CatalogSpec[];
  products: CatalogProduct[];
  compactImages?: boolean;
  description?: string;
  editable?: boolean;
  slug?: string;
};

function CatalogProductCard({ product, compact }: { product: CatalogProduct; compact?: boolean }) {
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

export function CatalogPage({ specs, products, compactImages, description, editable, slug }: CatalogPageProps) {
  const visibleProducts = products.filter((p) => !p.hidden);
  const shownProducts = editable ? products : visibleProducts;
  const firstProduct = visibleProducts[0] ?? products[0];
  return (
    <>
      {firstProduct ? (
        <ProductJsonLd
          name={firstProduct.title}
          description={`${firstProduct.title}, цвет: ${firstProduct.color}${firstProduct.extra ? `, ${firstProduct.extra}` : ""}`}
          price={firstProduct.price.replace(/[^\d]/g, "")}
          image={firstProduct.image}
          aggregateRating={{ ratingValue: 5, reviewCount: 3, bestRating: 5 }}
          review={{
            reviewBody: "Заказали себе в частный сектор забор из штакетника цвета графит в компании ЗАБОРСКИЙ.РФ, с доставкой и установкой. Пришел в целости и в сохранности и по времени быстро. Смонтировали оперативно и аккуратно. Спасибо огромное ! Рекомендую компанию!",
            author: "Евгений и Анастасия Кудряковы, Тверская область",
          }}
        />
      ) : null}
      <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
              Каталог
            </h2>
            {editable && slug ? (
              <SectionMetaEditor
                slug={slug}
                description={description ?? ""}
                specs={specs ?? []}
                hasSpecs={Boolean(specs?.length)}
              />
            ) : null}
          </div>
          {description ? (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {description}
            </p>
          ) : null}
        </div>

        {specs?.length ? (
          <div className="mt-16 max-w-4xl">
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

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shownProducts.map((product) => (
            <div key={product.id} className={`relative${editable && product.hidden ? " opacity-50" : ""}`}>
              {editable && product.hidden ? (
                <span className="absolute left-2 top-2 z-20 rounded-full bg-slate-900/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  Скрыт
                </span>
              ) : null}
              {editable && slug ? <ProductEditControls slug={slug} product={product} /> : null}
              <CatalogProductCard product={product} compact={compactImages} />
            </div>
          ))}
          {editable && slug ? <AddProductButton slug={slug} /> : null}
        </div>
      </div>
    </section>
    {editable ? <AdminBar /> : null}
    </>
  );
}
