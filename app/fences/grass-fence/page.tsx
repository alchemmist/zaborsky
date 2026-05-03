import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";

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

export default function GrassFencePage() {
  return (
    <DevelopmentPage
      title="Травяной забор (Grass Fence)"
      description="Необычное решение с выразительным внешним видом и современным характером."
      imageSrc="/images/fences/grass-fence.png"
      imageAlt="Травяной забор Grass Fence"
    >
      <CatalogPage products={products} />
    </DevelopmentPage>
  );
}
