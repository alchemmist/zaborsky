import { DevelopmentPage } from "@/components/development-page";
import {
  DetailedCatalogPage,
  type DetailedCatalogProduct,
} from "@/components/detailed-catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "gitter";

export const metadata: Metadata = {
  title: "3D сетка Гиттер",
  description: "3D сетка Гиттер от Заборский. Различные диаметры прутка, размеры ячейки и цвета.",
  alternates: {
    canonical: "https://заборский.рф/fences/gitter/",
  },
  openGraph: {
    title: "3D сетка Гиттер",
    description: "3D сетка Гиттер от Заборский. Различные диаметры прутка, размеры ячейки и цвета.",
  },
};

const examples = [
  { src: "/images/fences/3d-gitter/example-1.png", alt: "Пример использования 3D сетки Гиттер 1" },
  { src: "/images/fences/3d-gitter/example-2.png", alt: "Пример использования 3D сетки Гиттер 2" },
  { src: "/images/fences/3d-gitter/example-3.png", alt: "Пример использования 3D сетки Гиттер 3" },
  { src: "/images/fences/3d-gitter/example-4.png", alt: "Пример использования 3D сетки Гиттер 4" },
];

export default async function GitterPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

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
        products={(section?.products ?? []) as DetailedCatalogProduct[]}
        description={section?.description}
        editable={editable}
        slug={SLUG}
      />
    </DevelopmentPage>
  );
}
