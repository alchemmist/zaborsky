import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Жалюзи ЭКО-Z и ЭКО-Z US",
  description: "Жалюзи ЭКО-Z и усиленные ЭКО-Z US. Цены от 181 руб/п.м. Серый графит, шоколад, белый, принтек.",
  alternates: {
    canonical: "https://заборский.рф/fences/eco-z/",
  },
  openGraph: {
    title: "Жалюзи ЭКО-Z и ЭКО-Z US",
    description: "Жалюзи ЭКО-Z и усиленные ЭКО-Z US. Цены от 181 руб/п.м. Серый графит, шоколад, белый, принтек.",
  },
};

const faqItems: FaqItem[] = [
  {
    question: "Чем отличаются ЭКО-Z и ЭКО-Z US?",
    answer: "ЭКО-Z US — усиленная версия с дополнительными рёбрами жёсткости и увеличенной толщиной металла. Рекомендуется для участков с повышенными ветровыми нагрузками и для заборов большой высоты.",
  },
  {
    question: "Какие цвета доступны для ЭКО-Z?",
    answer: "RAL7024/7024 серый графит, RAL8019/8019 тёмный шоколад, RAL9003/9003 белый. Все цвета доступны в двустороннем матовом покрытии. Также доступны премиальные принтеки: Чёрное дерево 3D, Тёмный дуб 3D, Античное дерево 3D.",
  },
  {
    question: "Сколько стоит забор ЭКО-Z под ключ?",
    answer: "Цена материала от 127 руб/п.м, усиленная версия ЭКО-Z US — от 188 руб/п.м. Итоговая стоимость зависит от высоты, длины и сложности монтажа. Бесплатный расчёт по телефону.",
  },
];

const specs = [
  "Рекомендуемое количество: 9-10 шт на 1 погонный метр высоты",
  "Расстояние между ламелями: 90 мм",
  "Рёбер жесткости: 6 шт",
  "Высота: 115 мм (завальцовка)",
  "Длина: любая по размерам кратно 10 мм",
  "Крепление: Боковая планка 57*37мм, Верхняя планка 60*37мм",
  "Цена: от 127 рублей за погонный метр в зависимости от покрытия",
];

const products: CatalogProduct[] = [
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
    title: "ЖАЛЮЗИ ЭКО-Z",
    color: "RAL7024/7024 СЕРЫЙ ГРАФИТ",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 188 руб п/м",
    image: "/images/fences/eco-z/product-3.png",
    alt: "ЖАЛЮЗИ ЭКО-Z RAL7024/7024 СЕРЫЙ ГРАФИТ",
  },
  {
    id: "eco-z-4",
    title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)",
    color: "RAL8019/8019 ТЕМНЫЙ ШОКОЛАД",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 188 руб п/м",
    image: "/images/fences/eco-z/product-4.png",
    alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ) RAL8019/8019 ТЕМНЫЙ ШОКОЛАД",
  },
  {
    id: "eco-z-5",
    title: "ЖАЛЮЗИ ЭКО-Z",
    color: "RAL9003/9003 БЕЛЫЙ",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 188 руб п/м",
    image: "/images/fences/eco-z/product-5.png",
    alt: "ЖАЛЮЗИ ЭКО-Z RAL9003/9003 БЕЛЫЙ",
  },
  {
    id: "eco-z-6",
    title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)",
    color: "RAL9003/9003 БЕЛЫЙ",
    extra: "ДВУСТОРОННИЙ МАТТЕ",
    price: "Цена 188 руб п/м",
    image: "/images/fences/eco-z/product-6.png",
    alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ) RAL9003/9003 БЕЛЫЙ",
  },
  {
    id: "eco-z-7",
    title: "ЖАЛЮЗИ ЭКО-Z",
    color: "ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
    price: "Цена 181 руб п/м",
    image: "/images/fences/eco-z/product-7.png",
    alt: "ЖАЛЮЗИ ЭКО-Z, МЕТАЛЛОПЛАНКЕН ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
  },
  {
    id: "eco-z-8",
    title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)",
    color: "ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
    price: "Цена 181 руб п/м",
    image: "/images/fences/eco-z/product-8.png",
    alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ), МЕТАЛЛОПЛАНКЕН ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
  },
  {
    id: "eco-z-9",
    title: "ЖАЛЮЗИ ЭКО-Z",
    color: "ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)",
    price: "Цена 181 руб п/м",
    image: "/images/fences/eco-z/product-9.png",
    alt: "ЖАЛЮЗИ ЭКО-Z, МЕТАЛЛОПЛАНКЕН ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)",
  },
  {
    id: "eco-z-10",
    title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)",
    color: "ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)",
    price: "Цена 181 руб п/м",
    image: "/images/fences/eco-z/product-10.png",
    alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ), МЕТАЛЛОПЛАНКЕН ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)",
  },
  {
    id: "eco-z-11",
    title: "ЖАЛЮЗИ ЭКО-Z",
    color: "АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
    price: "Цена 181 руб п/м",
    image: "/images/fences/eco-z/product-11.png",
    alt: "ЖАЛЮЗИ ЭКО-Z, МЕТАЛЛОПЛАНКЕН АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
  },
  {
    id: "eco-z-12",
    title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)",
    color: "АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
    price: "Цена 181 руб п/м",
    image: "/images/fences/eco-z/product-12.png",
    alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ), МЕТАЛЛОПЛАНКЕН АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)",
  },
];

export default function EcoZPage() {
  return (
    <DevelopmentPage
      title="Жалюзи ЭКО-Z и ЭКО-Z US"
      imageSrc="/images/fences/euro-jalusi-eco-z.png"
      imageAlt="Жалюзи ЭКО-Z и ЭКО-Z US"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Жалюзи ЭКО-Z и ЭКО-Z US" },
      ]}
      breadcrumbsPath="/fences/eco-z"
    >
      <CatalogPage 
        specs={specs} 
        products={products} 
        description="Лаконичное решение для современного участка с акцентом на геометрию и приватность."
      />
      <FaqSection items={faqItems} />
    </DevelopmentPage>
  );
}
