import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "grass-fence";

export const metadata: Metadata = {
  title: "Травяной забор (Grass Fence)",
  description: "Травяной забор Grass Fence. Размеры 2x5м и 2x10м. Цены от 17 000 руб.",
  alternates: {
    canonical: "https://заборский.рф/fences/grass-fence/",
  },
  openGraph: {
    title: "Травяной забор (Grass Fence)",
    description: "Травяной забор Grass Fence. Размеры 2x5м и 2x10м. Цены от 17 000 руб.",
  },
};

const examples = [
  { src: "/images/fences/grass/example-1.png", alt: "Пример использования Травяного забора 1" },
  { src: "/images/fences/grass/example-2.png", alt: "Пример использования Травяного забора 2" },
  { src: "/images/fences/grass/example-3.png", alt: "Пример использования Травяного забора 3" },
  { src: "/images/fences/grass/example-4.png", alt: "Пример использования Травяного забора 4" },
];

export default async function GrassFencePage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

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
        products={(section?.products ?? []) as CatalogProduct[]}
        description={section?.description}
        editable={editable}
        slug={SLUG}
      />
    </DevelopmentPage>
  );
}
