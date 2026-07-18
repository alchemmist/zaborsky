import { ProductJsonLd } from "@/components/json-ld";
import type { CatalogProduct } from "@/lib/types";
import { CatalogProductCard } from "@/components/catalog-product-card";
import { SortableProductGrid } from "@/components/admin/sortable-product-grid";
import { SectionMetaEditor } from "@/components/admin/section-meta-editor";
import { AdminBar } from "@/components/admin/admin-bar";
import { KeywordTags } from "@/components/keyword-tags";

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

        {editable && slug ? (
          <SortableProductGrid slug={slug} products={products} compact={compactImages} />
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {shownProducts.map((product) => (
              <CatalogProductCard key={product.id} product={product} compact={compactImages} />
            ))}
          </div>
        )}
      </div>
    </section>
    <KeywordTags slug={slug} />
    {editable ? <AdminBar /> : null}
    </>
  );
}
