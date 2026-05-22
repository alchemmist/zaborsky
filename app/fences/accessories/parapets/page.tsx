import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Парапеты ZKING",
  description: "Парапеты ZKING: Монблан, Эверест, Бона, Эльбрус. Различные размеры под любые столбы.",
  openGraph: {
    title: "Парапеты ZKING",
    description: "Парапеты ZKING: Монблан, Эверест, Бона, Эльбрус. Различные размеры под любые столбы.",
  },
};

const products: CatalogProduct[] = [
  {
    id: "monblan-1-brick",
    title: "Парапет Монблан",
    color: "255×510 мм (1 кирпич)",
    extra: "серия Монблан",
    price: "800 руб",
    image: "/images/fences/parapets/product-1.png",
    alt: "Парапет Монблан 255×510 мм",
  },
  {
    id: "monblan-half-brick",
    title: "Парапет Монблан",
    color: "130×510 мм (0.5 кирпича)",
    extra: "серия Монблан",
    price: "500 руб",
    image: "/images/fences/parapets/product-2.png",
    alt: "Парапет Монблан 130×510 мм",
  },
  {
    id: "monblan-1-5-brick",
    title: "Парапет Монблан",
    color: "385×510 мм (1.5 кирпича)",
    extra: "серия Монблан",
    price: "900 руб",
    image: "/images/fences/parapets/product-3.png",
    alt: "Парапет Монблан 385×510 мм",
  },
  {
    id: "everest-1-brick",
    title: "Парапет Эверест",
    color: "200/225/250 мм (1 кирпич)",
    extra: "серия Эверест, вариативная ширина",
    price: "700 руб",
    image: "/images/fences/parapets/product-4.png",
    alt: "Парапет Эверест 200/225/250 мм",
  },
  {
    id: "everest-half-brick",
    title: "Парапет Эверест",
    color: "130×510 мм (0.5 кирпича)",
    extra: "серия Эверест",
    price: "400 руб",
    image: "/images/fences/parapets/product-5.png",
    alt: "Парапет Эверест 130×510 мм",
  },
  {
    id: "bona-1-brick",
    title: "Парапет Бона",
    color: "255×510 мм (1 кирпич)",
    extra: "серия Бона",
    price: "800 руб",
    image: "/images/fences/parapets/product-6.png",
    alt: "Парапет Бона 255×510 мм",
  },
  {
    id: "bona-half-brick",
    title: "Парапет Бона",
    color: "130×510 мм (0.5 кирпича)",
    extra: "серия Бона",
    price: "500 руб",
    image: "/images/fences/parapets/product-7.png",
    alt: "Парапет Бона 130×510 мм",
  },
  {
    id: "elbrus-1-brick",
    title: "Парапет Эльбрус",
    color: "255×510 мм (1 кирпич)",
    extra: "серия Эльбрус",
    price: "700 руб",
    image: "/images/fences/parapets/product-8.png",
    alt: "Парапет Эльбрус 255×510 мм",
  },
  {
    id: "elbrus-half-brick",
    title: "Парапет Эльбрус",
    color: "130×510 мм (0.5 кирпича)",
    extra: "серия Эльбрус",
    price: "500 руб",
    image: "/images/fences/parapets/product-9.png",
    alt: "Парапет Эльбрус 130×510 мм",
  },
  {
    id: "elbrus-220",
    title: "Парапет Эльбрус",
    color: "220 мм",
    extra: "серия Эльбрус",
    price: "800 руб",
    image: "/images/fences/parapets/product-10.png",
    alt: "Парапет Эльбрус 220 мм",
  },
  {
    id: "paraphet-11",
    title: "Парапет",
    color: "Универсальный",
    extra: "стандартный размер",
    price: "700 руб",
    image: "/images/fences/parapets/product-11.png",
    alt: "Парапет универсальный",
  },
  {
    id: "paraphet-12",
    title: "Парапет",
    color: "Универсальный",
    extra: "стандартный размер",
    price: "800 руб",
    image: "/images/fences/parapets/product-12.png",
    alt: "Парапет универсальный",
  },
];

export default function ParapetsPage() {
  return (
    <DevelopmentPage
      title="Парапеты ZKING"
      imageSrc="/images/fences/parapets.png"
      imageAlt="Парапеты ZKING"
      breadcrumbs={[
        { label: "Заборы", href: "/fences" },
        { label: "Комплектующие", href: "/fences/accessories" },
        { label: "Парапеты" },
      ]}
    >
      <CatalogPage 
        products={products} 
        compactImages 
        description="Парапеты для защиты и эстетичного завершения горизонтальных поверхностей забора."
      />
    </DevelopmentPage>
  );
}
