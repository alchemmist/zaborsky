import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Еврожалюзи",
  description: "Заборы еврожалюзи от ZABORSKY. Цены от 188 руб/п.м. Различные цвета и покрытия.",
  openGraph: {
    title: "Еврожалюзи",
    description: "Заборы еврожалюзи от ZABORSKY. Цены от 188 руб/п.м. Различные цвета и покрытия.",
  },
};

const specs = [
  "Рекомендуемое количество: 9-10 шт на 1 погонный метр высоты",
  "Расстояние между ламелями: 80 мм",
  "Рёбер жесткости: 24 шт",
  "Высота: 115 мм (завальцовка)",
  "Длина: любая по размерам кратно 10 мм",
  "Крепление: Боковая планка 57*37мм, Верхняя планка 60*37мм",
  "Цена: от 132 рублей за погонный метр, в зависимости от покрытия",
];

const products: CatalogProduct[] = [
  {
    id: "euro-jalusi-1",
    title: "ЕВРОЖАЛЮЗИ",
    color: "RAL8017/8017 ШОКОЛАД",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 193 руб п/м",
    image: "/images/fences/euro-jalusi/product-1.png",
    alt: "ЕВРОЖАЛЮЗИ RAL8017/8017 ШОКОЛАД",
  },
  {
    id: "euro-jalusi-2",
    title: "ЕВРОЖАЛЮЗИ",
    color: "RAL8019/8019 ТЕМНЫЙ ШОКОЛАД",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 193 руб п/м",
    image: "/images/fences/euro-jalusi/product-2.png",
    alt: "ЕВРОЖАЛЮЗИ RAL8019/8019 ТЕМНЫЙ ШОКОЛАД",
  },
  {
    id: "euro-jalusi-3",
    title: "ЕВРОЖАЛЮЗИ",
    color: "RAL7024/7024 СЕРЫЙ ГРАФИТ",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 193 руб п/м",
    image: "/images/fences/euro-jalusi/product-3.png",
    alt: "ЕВРОЖАЛЮЗИ RAL7024/7024 СЕРЫЙ ГРАФИТ",
  },
  {
    id: "euro-jalusi-4",
    title: "ЕВРОЖАЛЮЗИ",
    color: "ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
    price: "Цена 186 руб п/м",
    image: "/images/fences/euro-jalusi/product-4.png",
    alt: "ЕВРОЖАЛЮЗИ ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
  },
  {
    id: "euro-jalusi-5",
    title: "ЕВРОЖАЛЮЗИ, МЕТАЛЛОПЛАНКЕН",
    color: "ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)",
    price: "Цена 186 руб п/м",
    image: "/images/fences/euro-jalusi/product-5.png",
    alt: "ЕВРОЖАЛЮЗИ, МЕТАЛЛОПЛАНКЕН ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)",
  },
  {
    id: "euro-jalusi-6",
    title: "ЕВРОЖАЛЮЗИ",
    color: "АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
    price: "Цена 186 руб п/м",
    image: "/images/fences/euro-jalusi/product-6.png",
    alt: "ЕВРОЖАЛЮЗИ АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
  },
];

export default function EuroJalusiPage() {
  return (
    <DevelopmentPage
      title="Еврожалюзи"
      imageSrc="/images/fences/euro-jalusi.png"
      imageAlt="Еврожалюзи"
      breadcrumbs={[
        { label: "Заборы", href: "/fences" },
        { label: "Еврожалюзи" },
      ]}
    >
      <CatalogPage 
        specs={specs} 
        products={products} 
        description="Уникальный, надёжный вид ограждения с современным дизайном. Сплошные снаружи, но при этом сохраняют видимость внутри участка, пропускают свет и обеспечивают хорошее проветривание."
      />
    </DevelopmentPage>
  );
}
