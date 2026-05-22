import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Колпаки на столбы ZKING",
  description: "Колпаки на столбы ZKING: Модена, Эверест, Бокс, Эльбрус. Различные формы и размеры.",
  openGraph: {
    title: "Колпаки на столбы ZKING",
    description: "Колпаки на столбы ZKING: Модена, Эверест, Бокс, Эльбрус. Различные формы и размеры.",
  },
};

const products: CatalogProduct[] = [
  {
    id: "modena-lantern-small",
    title: "Колпак Модена под фонарь",
    color: "385×385 мм (1.5 кирпича)",
    extra: "с декоративным элементом",
    price: "2000 руб",
    image: "/images/fences/caps/product-1.png",
    alt: "Колпак Модена под фонарь 385×385 мм",
  },
  {
    id: "modena-lantern-large",
    title: "Колпак Модена под фонарь (большой)",
    color: "515×515 мм (2 кирпича)",
    extra: "с декоративным элементом",
    price: "3200 руб",
    image: "/images/fences/caps/product-2.png",
    alt: "Колпак Модена под фонарь 515×515 мм",
  },
  {
    id: "modena-ball",
    title: "Колпак Модена с шаром",
    color: "515×515 мм (2 кирпича)",
    extra: "с декоративным шаром",
    price: "3000 руб",
    image: "/images/fences/caps/product-3.png",
    alt: "Колпак Модена с шаром 515×515 мм",
  },
  {
    id: "modena-ball-small",
    title: "Колпак Модена с шаром (малый)",
    color: "385×385 мм (1.5 кирпича)",
    extra: "с декоративным шаром",
    price: "2500 руб",
    image: "/images/fences/caps/product-4.png",
    alt: "Колпак Модена с шаром 385×385 мм",
  },
  {
    id: "modena-classic-large",
    title: "Колпак Модена классический",
    color: "515×515 мм (2 кирпича)",
    extra: "классический дизайн",
    price: "2700 руб",
    image: "/images/fences/caps/product-5.png",
    alt: "Колпак Модена классический 515×515 мм",
  },
  {
    id: "modena-classic-medium",
    title: "Колпак Модена классический",
    color: "385×515 мм",
    extra: "классический дизайн",
    price: "2200 руб",
    image: "/images/fences/caps/product-6.png",
    alt: "Колпак Модена классический 385×515 мм",
  },
  {
    id: "modena-classic-small",
    title: "Колпак Модена классический",
    color: "385×385 мм (1.5 кирпича)",
    extra: "классический дизайн",
    price: "1600 руб",
    image: "/images/fences/caps/product-7.png",
    alt: "Колпак Модена классический 385×385 мм",
  },
  {
    id: "modena-classic-euro",
    title: "Колпак Модена классический",
    color: "350×350 мм (евроформат)",
    extra: "классический дизайн",
    price: "1400 руб",
    image: "/images/fences/caps/product-8.png",
    alt: "Колпак Модена классический 350×350 мм",
  },
  {
    id: "modena-light-large",
    title: "Модена с подсветкой",
    color: "515×515 мм (2 кирпича)",
    extra: "со встроенной подсветкой",
    price: "8300 руб",
    image: "/images/fences/caps/product-9.png",
    alt: "Модена с подсветкой 515×515 мм",
  },
  {
    id: "modena-light-medium",
    title: "Модена с подсветкой",
    color: "385×515 мм",
    extra: "со встроенной подсветкой",
    price: "5700 руб",
    image: "/images/fences/caps/product-10.png",
    alt: "Модена с подсветкой 385×515 мм",
  },
  {
    id: "modena-light-small",
    title: "Модена с подсветкой",
    color: "385×385 мм (1.5 кирпича)",
    extra: "со встроенной подсветкой",
    price: "4000 руб",
    image: "/images/fences/caps/product-11.png",
    alt: "Модена с подсветкой 385×385 мм",
  },
  {
    id: "modena-light-small-v2",
    title: "Модена с подсветкой",
    color: "385×515 мм",
    extra: "со встроенной подсветкой",
    price: "4500 руб",
    image: "/images/fences/caps/product-12.png",
    alt: "Модена с подсветкой 385×515 мм v2",
  },
  {
    id: "modena-premium",
    title: "Колпак Модена Премиум",
    color: "515×515 мм (2 кирпича)",
    extra: "премиум серия",
    price: "3000 руб",
    image: "/images/fences/caps/product-13.png",
    alt: "Колпак Модена Премиум",
  },
  {
    id: "modena-premium-light",
    title: "Колпак Модена Премиум с подсветкой",
    color: "515×515 мм (2 кирпича)",
    extra: "премиум серия, со встроенной подсветкой",
    price: "5700 руб",
    image: "/images/fences/caps/product-14.png",
    alt: "Колпак Модена Премиум с подсветкой",
  },
  {
    id: "everest-pike",
    title: "Колпак Эверест с пикой",
    color: "300×300 мм (1.5 кирпича)",
    extra: "с декоративной пикой",
    price: "1700 руб",
    image: "/images/fences/caps/product-15.png",
    alt: "Колпак Эверест с пикой",
  },
  {
    id: "everest-lantern",
    title: "Колпак Эверест под фонарь",
    color: "515×515 мм (2 кирпича)",
    extra: "под фонарь",
    price: "2300 руб",
    image: "/images/fences/caps/product-16.png",
    alt: "Колпак Эверест под фонарь",
  },
  {
    id: "everest-lantern-small",
    title: "Эверест под фонарь",
    color: "385×385 мм (1.5 кирпича)",
    extra: "под фонарь",
    price: "1300 руб",
    image: "/images/fences/caps/product-17.png",
    alt: "Эверест под фонарь 385×385 мм",
  },
  {
    id: "everest-pike-large",
    title: "Эверест с пикой",
    color: "515×515 мм (2 кирпича)",
    extra: "с декоративной пикой",
    price: "2500 руб",
    image: "/images/fences/caps/product-18.png",
    alt: "Эверест с пикой 515×515 мм",
  },
  {
    id: "everest-classic-large",
    title: "Эверест классический",
    color: "515×515 мм (2 кирпича)",
    extra: "классический дизайн",
    price: "1800 руб",
    image: "/images/fences/caps/product-19.png",
    alt: "Эверест классический 515×515 мм",
  },
  {
    id: "everest-classic-large-v2",
    title: "Эверест классический",
    color: "520×520 мм",
    extra: "классический дизайн",
    price: "1800 руб",
    image: "/images/fences/caps/product-20.png",
    alt: "Эверест классический 520×520 мм",
  },
  {
    id: "everest-classic-small",
    title: "Эверест классический",
    color: "300×300 мм (1.5 кирпича)",
    extra: "классический дизайн",
    price: "1000 руб",
    image: "/images/fences/caps/product-21.png",
    alt: "Эверест классический 300×300 мм",
  },
  {
    id: "box-classic-small",
    title: "Бокс классический",
    color: "385×385 мм (1.5 кирпича)",
    extra: "классический дизайн",
    price: "1700 руб",
    image: "/images/fences/caps/product-22.png",
    alt: "Бокс классический 385×385 мм",
  },
  {
    id: "box-classic-large",
    title: "Бокс классический",
    color: "515×515 мм (2 кирпича)",
    extra: "классический дизайн",
    price: "4300 руб",
    image: "/images/fences/caps/product-23.png",
    alt: "Бокс классический 515×515 мм",
  },
  {
    id: "box-bonano-small",
    title: "Бокс БОНАНО",
    color: "385×385 мм / 400×400 мм",
    extra: "экономичный вариант",
    price: "800 руб",
    image: "/images/fences/caps/product-24.png",
    alt: "Бокс БОНАНО 385×385 мм",
  },
  {
    id: "box-bonano-large",
    title: "БОНАНО",
    color: "515×515 мм / 530×530 мм",
    extra: "экономичный вариант",
    price: "1500 руб",
    image: "/images/fences/caps/product-25.png",
    alt: "БОНАНО 515×515 мм",
  },
  {
    id: "box-light-small",
    title: "Бокс с подсветкой",
    color: "385×385 мм (1.5 кирпича)",
    extra: "со встроенной подсветкой",
    price: "6000 руб",
    image: "/images/fences/caps/product-26.png",
    alt: "Бокс с подсветкой 385×385 мм",
  },
  {
    id: "box-light-large",
    title: "Бокс с подсветкой",
    color: "515×515 мм (2 кирпича)",
    extra: "со встроенной подсветкой",
    price: "8000 руб",
    image: "/images/fences/caps/product-27.png",
    alt: "Бокс с подсветкой 515×515 мм",
  },
  {
    id: "box-ball-small",
    title: "Бокс с шаром",
    color: "385×385 мм / 400×400 мм",
    extra: "с декоративным шаром",
    price: "1800 руб",
    image: "/images/fences/caps/product-28.png",
    alt: "Бокс с шаром 385×385 мм",
  },
  {
    id: "elbrus-classic-small",
    title: "Эльбрус классический",
    color: "385×385 мм (1.5 кирпича)",
    extra: "классический дизайн",
    price: "1200 руб",
    image: "/images/fences/caps/product-29.png",
    alt: "Эльбрус классический 385×385 мм",
  },
  {
    id: "elbrus-classic-large",
    title: "Эльбрус классический",
    color: "520×520 мм (2 кирпича)",
    extra: "классический дизайн",
    price: "2000 руб",
    image: "/images/fences/caps/product-30.png",
    alt: "Эльбрус классический 520×520 мм",
  },
  {
    id: "elbrus-light-small",
    title: "Эльбрус с подсветкой",
    color: "385×385 мм (1.5 кирпича)",
    extra: "со встроенной подсветкой",
    price: "4000 руб",
    image: "/images/fences/caps/product-31.png",
    alt: "Эльбрус с подсветкой 385×385 мм",
  },
  {
    id: "elbrus-light-large",
    title: "Эльбрус с подсветкой",
    color: "520×520 мм (2 кирпича)",
    extra: "со встроенной подсветкой",
    price: "5300 руб",
    image: "/images/fences/caps/product-32.png",
    alt: "Эльбрус с подсветкой 520×520 мм",
  },
];

const examples = [
  {
    src: "/images/fences/caps/example-1.png",
    alt: "Пример использования колпаков 1",
  },
  {
    src: "/images/fences/caps/example-2.png",
    alt: "Пример использования колпаков 2",
  },
  {
    src: "/images/fences/caps/example-3.png",
    alt: "Пример использования колпаков 3",
  },
  {
    src: "/images/fences/caps/example-4.png",
    alt: "Пример использования колпаков 4",
  },
];

export default function CapsPage() {
  return (
    <DevelopmentPage
      title="Колпаки на столбы ZKING"
      imageSrc="/images/fences/caps.png"
      imageAlt="Колпаки ZKING"
      breadcrumbs={[
        { label: "Заборы", href: "/fences" },
        { label: "Комплектующие", href: "/fences/accessories" },
        { label: "Колпаки" },
      ]}
    >
      <ExamplesGallery examples={examples} />
      <CatalogPage 
        products={products} 
        compactImages 
        description="Защитные и декоративные колпаки, создают законченный вид забора, решения с подсветкой, премиально выделят вашу территорию, в тёмное время суток."
      />
    </DevelopmentPage>
  );
}
