import { DevelopmentPage } from "@/components/development-page";
import {
  DetailedCatalogPage,
  type DetailedCatalogProduct,
} from "@/components/detailed-catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D сетка Гиттер",
  description: "3D сетка Гиттер от Заборский. Различные диаметры прутка, размеры ячейки и цвета.",
  alternates: {
    canonical: "https://xn--80adjbqf5a.xn--p1ai/fences/gitter/",
  },
  openGraph: {
    title: "3D сетка Гиттер",
    description: "3D сетка Гиттер от Заборский. Различные диаметры прутка, размеры ячейки и цвета.",
  },
};

const products: DetailedCatalogProduct[] = [
  {
    id: "gitter-1",
    title: "3D сетка Гиттер",
    diameter: "3.2 мм",
    size: "1.53×2.5",
    coating: "оцинкованная",
    cell: "200×55 мм",
    rodDiameter: "3.0 мм (Zn); 3.2 мм (Zn + ПП)",
    colors: ["RAL6005 Зеленый мох"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "1350 руб",
  },
  {
    id: "gitter-2",
    title: "3D сетка Гиттер",
    diameter: "3.2 мм",
    size: "1.73×2.5",
    coating: "оцинкованная",
    cell: "200×55 мм",
    rodDiameter: "3.0 мм (Zn); 3.2 мм (Zn + ПП)",
    colors: ["RAL6005 Зеленый мох"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "1500 руб",
  },
  {
    id: "gitter-3",
    title: "3D сетка Гиттер",
    diameter: "3.2 мм",
    size: "2.03×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.0 мм (Zn); 3.2 мм (Zn + ПП)",
    colors: ["RAL6005 Зеленый мох"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "1700 руб",
  },
  {
    id: "gitter-4",
    title: "3D сетка Гиттер",
    diameter: "3.5 мм",
    size: "1.03×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.3 мм (Zn); 3.5 мм (Zn + ПП)",
    colors: ["RAL6005"],
    price: "1200 руб",
  },
  {
    id: "gitter-5",
    title: "3D сетка Гиттер",
    diameter: "3.5 мм",
    size: "1.53×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.3 мм (Zn); 3.5 мм (Zn + ПП)",
    colors: ["RAL6005", "RAL8017", "RAL7024"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "1700 руб",
  },
  {
    id: "gitter-6",
    title: "3D сетка Гиттер",
    diameter: "3.5 мм",
    size: "1.73×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.3 мм (Zn); 3.5 мм (Zn + ПП)",
    colors: ["RAL6005", "RAL8017", "RAL7024"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "1900 руб",
  },
  {
    id: "gitter-7",
    title: "3D сетка Гиттер",
    diameter: "3.5 мм",
    size: "2.03×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.3 мм (Zn); 3.5 мм (Zn + ПП)",
    colors: ["RAL6005", "RAL8017", "RAL7024"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "2200 руб",
  },
  {
    id: "gitter-8",
    title: "3D сетка Гиттер",
    diameter: "4 мм",
    size: "1.03×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.8 мм (Zn); 4 мм (Zn + ПП)",
    colors: ["RAL6005 Зеленый мох"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "1500 руб",
  },
  {
    id: "gitter-9",
    title: "3D сетка Гиттер",
    diameter: "4 мм",
    size: "1.53×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.8 мм (Zn); 4 мм (Zn + ПП)",
    colors: ["RAL6005", "RAL8017", "RAL7024"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "2100 руб",
  },
  {
    id: "gitter-10",
    title: "3D сетка Гиттер",
    diameter: "4 мм",
    size: "1.73×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.8 мм (Zn); 4 мм (Zn + ПП)",
    colors: ["RAL6005", "RAL8017", "RAL7024"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "2300 руб",
  },
  {
    id: "gitter-11",
    title: "3D сетка Гиттер",
    diameter: "4 мм",
    size: "2.03×2.5",
    coating: "оцинкованная в полимерном покрытии",
    cell: "200×55 мм",
    rodDiameter: "3.8 мм (Zn); 4 мм (Zn + ПП)",
    colors: ["RAL6005", "RAL8017", "RAL7024", "RAL7024"],
    additional: "Панель 3D ЦИНК по запросу",
    price: "2600 руб",
  },
];

const examples = [
  {
    src: "/images/fences/3d-gitter/example-1.png",
    alt: "Пример использования 3D сетки Гиттер 1",
  },
  {
    src: "/images/fences/3d-gitter/example-2.png",
    alt: "Пример использования 3D сетки Гиттер 2",
  },
  {
    src: "/images/fences/3d-gitter/example-3.png",
    alt: "Пример использования 3D сетки Гиттер 3",
  },
  {
    src: "/images/fences/3d-gitter/example-4.png",
    alt: "Пример использования 3D сетки Гиттер 4",
  },
];

export default function GitterPage() {
  return (
    <DevelopmentPage
      title="3D сетка Гиттер"
      imageSrc="/images/fences/3d-setcka.png"
      imageAlt="3D сетка Гиттер"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "3D сетка Гиттер" },
      ]}
      breadcrumbsPath="/fences/gitter"
    >
      <ExamplesGallery examples={examples} />
      <DetailedCatalogPage
        imageSrc="/images/fences/3d-gitter/product.png"
        imageAlt="3D сетка Гиттер"
        products={products}
        description="Забор с высокой степенью защиты и эстетичным внешним видом, используется для ограждения частных территорий, промышленных зон, спортивных объектов."
      />
    </DevelopmentPage>
  );
}
