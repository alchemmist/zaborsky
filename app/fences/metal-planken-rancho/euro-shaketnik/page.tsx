import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";

const products: CatalogProduct[] = [
  {
    id: "euro-shaketnik-1",
    title: "Евроштакетник полукруглый фигурный 110 мм",
    color: "RAL8019 темный шоколад",
    extra: "матте",
    price: "155 руб/п.м",
    image: "/images/fences/euro-stacketnick/product-1.png",
    alt: "Евроштакетник полукруглый фигурный 110 мм RAL8019 темный шоколад матте",
  },
  {
    id: "euro-shaketnik-2",
    title: "Евроштакетник полукруглый фигурный 110 мм",
    color: "RAL9005/9005 черный",
    extra: "матте, двусторонний",
    price: "188 руб/п.м",
    image: "/images/fences/euro-stacketnick/product-2.png",
    alt: "Евроштакетник полукруглый фигурный 110 мм RAL9005/9005 черный матте двусторонний",
  },
  {
    id: "euro-shaketnik-3",
    title: "Евроштакетник полукруглый фигурный 110 мм",
    color: "RAL8017/8017 шоколад",
    extra: "шахматка + горкой, двусторонний матте",
    price: "188 руб/п.м",
    image: "/images/fences/euro-stacketnick/product-3.png",
    alt: "Евроштакетник полукруглый фигурный 110 мм RAL8017/8017 шоколад шахматка + горкой двусторонний матте",
  },
  {
    id: "euro-shaketnik-4",
    title: "Евроштакетник полукруглый фигурный 110 мм",
    color: "принт орех (Printech)",
    extra: "ранчо-шахматка, двусторонний",
    price: "228 руб/п.м",
    image: "/images/fences/euro-stacketnick/product-4.png",
    alt: "Евроштакетник полукруглый фигурный 110 мм принт орех Printech ранчо-шахматка двусторонний",
  },
  {
    id: "euro-shaketnik-5",
    title: "Евроштакетник полукруглый фигурный 110 мм",
    color: "RAL9003/9003 белый",
    extra: "двусторонний полиэстер",
    price: "155 руб/п.м",
    image: "/images/fences/euro-stacketnick/product-5.png",
    alt: "Евроштакетник полукруглый фигурный 110 мм RAL9003/9003 белый двусторонний полиэстер",
  },
  {
    id: "euro-shaketnik-6",
    title: "Евроштакетник ЭКО-М 95 мм",
    color: "RAL6005/6005 зеленый мох",
    extra: "двусторонний",
    price: "127 руб/п.м",
    image: "/images/fences/euro-stacketnick/product-6.png",
    alt: "Евроштакетник ЭКО-М 95 мм RAL6005/6005 зеленый мох двусторонний",
  },
];

export default function EuroShaketnikPage() {
  return (
    <DevelopmentPage
      title="Евроштакетник"
      description="Универсальный формат забора для частных домов и участков с аккуратной визуальной ритмикой."
      imageSrc="/images/fences/euro-shaketnik.png"
      imageAlt="Евроштакетник"
    >
      <CatalogPage products={products} />
    </DevelopmentPage>
  );
}
