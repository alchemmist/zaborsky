import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";

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
      description="Современное решение для создания уюта и приватности на вашем участке."
      imageSrc="/images/fences/grass-fence.png"
      imageAlt="Травяной забор Grass Fence"
    >
      <ExamplesGallery examples={examples} />
      <CatalogPage products={products} />
    </DevelopmentPage>
  );
}
