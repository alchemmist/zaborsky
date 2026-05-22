import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Шаговые плиты",
  description: "Шаговые плиты из полимерпесчаного композита. Коллекция STONE: Чёрный Сланец, Светлая Галька, Графитовый Серый.",
  openGraph: {
    title: "Шаговые плиты",
    description: "Шаговые плиты из полимерпесчаного композита. Коллекция STONE: Чёрный Сланец, Светлая Галька, Графитовый Серый.",
  },
};

const products: CatalogProduct[] = [
  {
    id: "step-pavers-black-slate",
    title: "Шаговые плиты",
    color: "Черный Сланец",
    extra: "990×330×55 мм, полимерно-песчаный композит, коллекция STONE",
    price: "1400 руб",
    image: "/images/fences/step-pavers/product-1.png",
    alt: "Шаговые плиты Черный Сланец",
  },
  {
    id: "step-pavers-light-pebble",
    title: "Шаговые плиты",
    color: "Светлая Галька",
    extra: "990×330×55 мм, полимерно-песчаный композит, коллекция STONE",
    price: "1400 руб",
    image: "/images/fences/step-pavers/product-2.png",
    alt: "Шаговые плиты Светлая Галька",
  },
  {
    id: "step-pavers-graphite-grey",
    title: "Шаговые плиты",
    color: "Графитовый Серый",
    extra: "990×330×55 мм, полимерно-песчаный композит, коллекция STONE",
    price: "1400 руб",
    image: "/images/fences/step-pavers/product-3.png",
    alt: "Шаговые плиты Графитовый Серый",
  },
];

const examples = [
  {
    src: "/images/fences/step-pavers/example-1.png",
    alt: "Пример использования шаговых плит 1",
  },
  {
    src: "/images/fences/step-pavers/example-2.png",
    alt: "Пример использования шаговых плит 2",
  },
];

export default function StepPaversPage() {
  return (
    <DevelopmentPage
      title="Шаговые плиты"
      imageSrc="/images/landscaping/step-pavers.png"
      imageAlt="Шаговые плиты"
      breadcrumbs={[
        { label: "Благоустройство", href: "/landscaping" },
        { label: "Шаговые плиты" },
      ]}
      breadcrumbsPath="/landscaping/step-pavers"
    >
      <ExamplesGallery examples={examples} size="large" />
      <CatalogPage 
        products={products} 
        compactImages 
        description="Функциональный элемент благоустройства для удобных и аккуратных дорожек на участке."
      />
    </DevelopmentPage>
  );
}
