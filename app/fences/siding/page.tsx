import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сайдинг",
  description: "Металлический сайдинг для забора от Заборский. Премиальные покрытия Printech и SteelArt.",
  openGraph: {
    title: "Сайдинг",
    description: "Металлический сайдинг для забора от Заборский. Премиальные покрытия Printech и SteelArt.",
  },
};

const products: CatalogProduct[] = [
  {
    id: "siding-1",
    title: "Забор из металлического сайдинга",
    color: "Темный каштан 3D (Printech)",
    extra: "текстурированное покрытие под дерево, Евро-брус",
    price: "438 руб/п.м",
    image: "/images/fences/siding/product-1.png",
    alt: "Забор из металлического сайдинга Темный каштан 3D Printech",
  },
  {
    id: "siding-2",
    title: "Забор из металлического сайдинга",
    color: "Античное дерево (Printech)",
    extra: "текстурированное покрытие под дерево, Евро-брус",
    price: "438 руб/п.м",
    image: "/images/fences/siding/product-2.png",
    alt: "Забор из металлического сайдинга Античное дерево Printech",
  },
  {
    id: "siding-3",
    title: "Забор из металлического сайдинга",
    color: "Клен светлый (SteelArt), темное дерево (Printech)",
    extra: "текстурированное покрытие под дерево, Евро-брус",
    price: "438 руб/п.м",
    image: "/images/fences/siding/product-3.png",
    alt: "Забор из металлического сайдинга Клен светлый SteelArt темное дерево Printech",
  },
];

export default function SidingPage() {
  return (
    <DevelopmentPage
      title="Сайдинг"
      imageSrc="/images/fences/siding.png"
      imageAlt="Сайдинг"
      breadcrumbs={[
        { label: "Заборы", href: "/fences" },
        { label: "Сайдинг" },
      ]}
      breadcrumbsPath="/fences/siding"
    >
      <CatalogPage 
        products={products} 
        description="Высокопрочный и практичный вид забора, имеющий привлекательный дизайн."
      />
    </DevelopmentPage>
  );
}
