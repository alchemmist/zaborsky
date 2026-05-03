import Image from "next/image";
import { DevelopmentPage } from "@/components/development-page";
import { sitePath } from "@/components/site-path";

type ProductCard = {
  id: string;
  title: string;
  color: string;
  extra?: string;
  price: string;
  image: string;
  alt: string;
};

const specs = [
  "Рекомендуемое количество: 9-10 шт на 1 погонный метр высоты",
  "Расстояние между ламелями: 90 мм",
  "Рёбер жесткости: 6 шт",
  "Высота: 115 мм (завальцовка)",
  "Длина: любая по размерам кратно 10 мм",
  "Крепление: Боковая планка 57*37мм, Верхняя планка 60*37мм",
  "Цена: от 127 рублей за погонный метр в зависимости от покрытия",
];

const products: ProductCard[] = [
  {
    id: "eco-z-1",
    title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)",
    color: "RAL7024/7024 СЕРЫЙ ГРАФИТ",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 188 руб п/м",
    image: "/images/fences/eco-z/product-1.png",
    alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ) RAL7024/7024 СЕРЫЙ ГРАФИТ",
  },
  {
    id: "eco-z-2",
    title: "ЖАЛЮЗИ ЭКО-Z",
    color: "RAL8019/8019 ТЕМНЫЙ ШОКОЛАД",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 188 руб п/м",
    image: "/images/fences/eco-z/product-2.png",
    alt: "ЖАЛЮЗИ ЭКО-Z RAL8019/8019 ТЕМНЫЙ ШОКОЛАД",
  },
  {
    id: "eco-z-3",
    title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)",
    color: "RAL8017/8017 ШОКОЛАД",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 188 руб п/м",
    image: "/images/fences/eco-z/product-3.png",
    alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ) RAL8017/8017 ШОКОЛАД",
  },
  {
    id: "eco-z-4",
    title: "ЖАЛЮЗИ ЭКО-Z",
    color: "RAL7024/7024 СЕРЫЙ",
    extra: "ГРАФИТ ДВУСТОРОННИЙ ПОЛИЭСТЕР",
    price: "Цена 155 руб п/м",
    image: "/images/fences/eco-z/product-4.png",
    alt: "ЖАЛЮЗИ ЭКО-Z RAL7024/7024 СЕРЫЙ",
  },
  {
    id: "eco-z-5",
    title: "ЖАЛЮЗИ ЭКО-Z",
    color: "RAL7024/7024 СЕРЫЙ",
    extra: "ГРАФИТ ДВУСТОРОННИЙ ПОЛИЭСТЕР",
    price: "Цена 155 руб п/м",
    image: "/images/fences/eco-z/product-5.png",
    alt: "ЖАЛЮЗИ ЭКО-Z RAL7024/7024 СЕРЫЙ",
  },
  {
    id: "eco-z-6",
    title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)",
    color: "RAL8019/8019 ТЕМНЫЙ",
    extra: "ШОКОЛАД ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 188 руб п/м",
    image: "/images/fences/eco-z/product-6.png",
    alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ) RAL8019/8019 ТЕМНЫЙ",
  },
];

function ProductCardView({ product }: { product: ProductCard }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-[0_10px_26px_rgba(22,28,37,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(22,28,37,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-black/5 bg-slate-100">
        <Image
          src={sitePath(product.image)}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
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

function EcoZContent() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
            Каталог
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCardView
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EcoZPage() {
  return (
    <DevelopmentPage
      title="Жалюзи ЭКО-Z и ЭКО-Z US"
      description="Лаконичное решение для современного участка с акцентом на геометрию и приватность."
      imageSrc="/images/fences/euro-jalusi-eco-z.png"
      imageAlt="Жалюзи ЭКО-Z и ЭКО-Z US"
    >
      <EcoZContent />
    </DevelopmentPage>
  );
}
