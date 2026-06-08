import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Жалюзи Реснички",
  description: "Забор жалюзи Реснички от Заборский. Белый, тёмный шоколад, серый графит.",
  openGraph: {
    title: "Жалюзи Реснички",
    description: "Забор жалюзи Реснички от Заборский. Белый, тёмный шоколад, серый графит.",
  },
};

const specs = [
  "Рекомендуемое количество: 9 шт на 1 погонный метр высоты",
  "Расстояние между ламелями: 100 мм",
  "Рёбра жёсткости: 7 шт",
  "Высота: 115 мм (завальцовка)",
  "Длина: любая по размерам кратно 10 мм",
  "Крепление:",
  "Боковая планка: 57×37 мм",
  "Верхняя планка: 60×37 мм",
  "Цена: от 226 руб за погонный метр (в зависимости от покрытия)",
];

const products: CatalogProduct[] = [
  {
    id: "resnichki-1",
    title: "ЖАЛЮЗИ РЕСНИЧКИ",
    color: "RAL9003 БЕЛЫЙ",
    extra: "ПОЛИЭСТЕР",
    price: "Цена: 226 руб/п.м",
    image: "/images/fences/resnichki/product-1.png",
    alt: "Жалюзи Реснички RAL9003 белый полиэстер",
  },
  {
    id: "resnichki-2",
    title: "ЖАЛЮЗИ РЕСНИЧКИ",
    color: "RAL8019 ТЁМНЫЙ ШОКОЛАД",
    extra: "МАТОВЫЙ",
    price: "Цена: 281 руб/п.м",
    image: "/images/fences/resnichki/product-2.png",
    alt: "Жалюзи Реснички RAL8019 тёмный шоколад матовый",
  },
  {
    id: "resnichki-3",
    title: "ЖАЛЮЗИ РЕСНИЧКИ",
    color: "RAL7024 СЕРЫЙ ГРАФИТ",
    extra: "МАТОВЫЙ",
    price: "Цена: 281 руб/п.м",
    image: "/images/fences/resnichki/product-3.png",
    alt: "Жалюзи Реснички RAL7024 серый графит матовый",
  },
];

export default function ResnichkiPage() {
  return (
    <DevelopmentPage
      title="Жалюзи Реснички"
      imageSrc="/images/fences/resnichki.png"
      imageAlt="Жалюзи Реснички"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Жалюзи Реснички" },
      ]}
      breadcrumbsPath="/fences/resnichki"
    >
      <CatalogPage 
        specs={specs} 
        products={products} 
        description="Выразительный вариант забора с современной геометрией и чистым силуэтом."
      />
    </DevelopmentPage>
  );
}
