import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Травяной забор (Grass Fence)",
  description: "Травяной забор Grass Fence. Размеры 2x5м и 2x10м. Цены от 17 000 руб.",
  alternates: {
    canonical: "https://xn--80adjbqf5a.xn--p1ai/fences/grass-fence/",
  },
  openGraph: {
    title: "Травяной забор (Grass Fence)",
    description: "Травяной забор Grass Fence. Размеры 2x5м и 2x10м. Цены от 17 000 руб.",
  },
};

const products: CatalogProduct[] = [
  {
    id: "grass-fence-1",
    title: "Травяной забор Grass Fence",
    color: "2x5 м",
    extra: "Монтажная стяжка в комплекте, гарантия 10 лет",
    price: "17 000 руб",
    image: "/images/fences/grass/product-1.png",
    alt: "Травяной забор Grass Fence 2x5 м",
  },
  {
    id: "grass-fence-2",
    title: "Травяной забор Grass Fence",
    color: "2x10 м",
    extra: "Монтажная стяжка в комплекте, гарантия 10 лет",
    price: "34 000 руб",
    image: "/images/fences/grass/product-2.png",
    alt: "Травяной забор Grass Fence 2x10 м",
  },
];

const examples = [
  {
    src: "/images/fences/grass/example-1.png",
    alt: "Пример использования Травяного забора 1",
  },
  {
    src: "/images/fences/grass/example-2.png",
    alt: "Пример использования Травяного забора 2",
  },
  {
    src: "/images/fences/grass/example-3.png",
    alt: "Пример использования Травяного забора 3",
  },
  {
    src: "/images/fences/grass/example-4.png",
    alt: "Пример использования Травяного забора 4",
  },
];

export default function GrassFencePage() {
  return (
    <DevelopmentPage
      title="Травяной забор (Grass Fence)"
      imageSrc="/images/fences/grass-fence.png"
      imageAlt="Травяной забор Grass Fence"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Травяной забор (Grass Fence)" },
      ]}
      breadcrumbsPath="/fences/grass-fence"
    >
      <ExamplesGallery examples={examples} />
      <CatalogPage 
        products={products} 
        description="Современное решение для создания уюта и приватности на вашем участке."
      />
    </DevelopmentPage>
  );
}
