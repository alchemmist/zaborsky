import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Забор-жалюзи Еврожалюзи — цена и монтаж",
  description: "Забор-жалюзи Еврожалюзи от Заборский: купить с монтажом под ключ, цена от 132 руб/п.м. Разные цвета и покрытия, доставка по России.",
  alternates: {
    canonical: "https://заборский.рф/fences/euro-jalusi/",
  },
  openGraph: {
    title: "Забор-жалюзи Еврожалюзи — цена и монтаж",
    description: "Забор-жалюзи Еврожалюзи от Заборский: купить с монтажом под ключ, цена от 132 руб/п.м. Разные цвета и покрытия, доставка по России.",
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

const faqItems: FaqItem[] = [
  {
    question: "Чем еврожалюзи отличаются от обычных жалюзи?",
    answer: "Еврожалюзи имеют усиленную конструкцию с 24 рёбрами жёсткости, завальцованными краями и специальным профилем. Это делает их значительно прочнее и долговечнее обычных жалюзи. Рекомендуемое количество — 9-10 ламелей на погонный метр высоты.",
  },
  {
    question: "Какие цвета еврожалюзи доступны?",
    answer: "RAL8017/8017 шоколад, RAL8019/8019 тёмный шоколад, RAL7024/7024 серый графит, а также премиальные покрытия Printech: Чёрное дерево 3D, Тёмный дуб 3D, Античное дерево 3D. Все цвета доступны в двустороннем матовом исполнении.",
  },
  {
    question: "Сколько стоит еврожалюзи с установкой?",
    answer: "Цена материала от 132 руб/п.м в зависимости от покрытия. Стоимость установки рассчитывается индивидуально — зависит от высоты, длины забора и типа фундамента. Позвоните — сделаем точный расчёт.",
  },
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
        { label: "Заборы", href: "/fences/" },
        { label: "Еврожалюзи" },
      ]}
      breadcrumbsPath="/fences/euro-jalusi"
    >
      <CatalogPage 
        specs={specs} 
        products={products} 
        description="Уникальный, надёжный вид ограждения с современным дизайном. Сплошные снаружи, но при этом сохраняют видимость внутри участка, пропускают свет и обеспечивают хорошее проветривание."
      />
      <FaqSection items={faqItems} />
    </DevelopmentPage>
  );
}
