import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Металлопланкен-ранчо",
  description: "Забор из металлопланкена в стиле ранчо. Цены от 160 руб/п.м. Различные покрытия и цвета.",
  openGraph: {
    title: "Металлопланкен-ранчо",
    description: "Забор из металлопланкена в стиле ранчо. Цены от 160 руб/п.м. Различные покрытия и цвета.",
  },
};

const products: CatalogProduct[] = [
  {
    id: "rancho-1",
    title: "Забор-ранчо из металлического планкена",
    color: "RAL7024 серый графит",
    extra: "матте",
    price: "429 руб/п.м",
    image: "/images/fences/metall/product-1.png",
    alt: "Забор-ранчо из металлического планкена RAL7024 серый графит матте",
  },
  {
    id: "rancho-2",
    title: "Забор-ранчо из металлического планкена",
    color: "RAL8019 горький шоколад",
    extra: "матте",
    price: "429 руб/п.м",
    image: "/images/fences/metall/product-2.png",
    alt: "Забор-ранчо из металлического планкена RAL8019 горький шоколад матте",
  },
  {
    id: "rancho-3",
    title: "Забор-ранчо из металлического планкена",
    color: "RAL7024 серый графит",
    extra: "матте",
    price: "429 руб/п.м",
    image: "/images/fences/metall/product-3.png",
    alt: "Забор-ранчо из металлического планкена RAL7024 серый графит матте",
  },
  {
    id: "rancho-4",
    title: "Забор-ранчо из металлического планкена",
    color: "RAL7024 серый графит",
    extra: "полиэстер",
    price: "288 руб/п.м",
    image: "/images/fences/metall/product-4.png",
    alt: "Забор-ранчо из металлического планкена RAL7024 серый графит полиэстер",
  },
  {
    id: "rancho-5",
    title: "Забор-ранчо из металлического планкена",
    color: "RAL1015 слоновая кость + RAL8017 шоколад",
    extra: "полиэстер",
    price: "288 руб/п.м",
    image: "/images/fences/metall/product-5.png",
    alt: "Забор-ранчо из металлического планкена RAL1015 слоновая кость + RAL8017 шоколад полиэстер",
  },
  {
    id: "rancho-6",
    title: "Ограждение из металлического планкена",
    color: "RAL7024 серый графит",
    extra: "матте",
    price: "429 руб/п.м",
    image: "/images/fences/metall/product-6.png",
    alt: "Ограждение из металлического планкена RAL7024 серый графит матте",
  },
];

export default function MetalPlankenRanchoPage() {
  return (
    <DevelopmentPage
      title="Металлопланкен-ранчо"
      imageSrc="/images/fences/metal-planken-rancho.png"
      imageAlt="Металлопланкен-ранчо"
      breadcrumbs={[
        { label: "Заборы", href: "/fences" },
        { label: "Металлопланкен-ранчо" },
      ]}
      breadcrumbsPath="/fences/metal-planken-rancho"
    >
      <CatalogPage 
        products={products} 
        description="Забор в стиле «ранчо», имитирует классическую американскую изгородь, имеет повышенную надёжность и жёсткость конструкции и придаёт солидность, ограждаемой территории."
      />
    </DevelopmentPage>
  );
}
