import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "accessories/caps";

export const metadata: Metadata = {
  title: "Колпаки на столбы ZKING",
  description: "Колпаки на столбы для заборов ZKING: классические, под фонарь, с шаром, с подсветкой, с пикой, премиум, БОНАНО.",
  alternates: {
    canonical: "https://заборский.рф/fences/accessories/caps/",
  },
  openGraph: {
    title: "Колпаки на столбы ZKING",
    description: "Колпаки на столбы для заборов ZKING: классические, под фонарь, с шаром, с подсветкой, с пикой, премиум, БОНАНО.",
  },
};

const examples = [
  { src: "/images/fences/caps/example-1.png", alt: "Пример использования колпаков 1" },
  { src: "/images/fences/caps/example-2.png", alt: "Пример использования колпаков 2" },
  { src: "/images/fences/caps/example-3.png", alt: "Пример использования колпаков 3" },
  { src: "/images/fences/caps/example-4.png", alt: "Пример использования колпаков 4" },
];

export default async function CapsPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Колпаки на столбы ZKING"
      imageSrc="/images/fences/caps.png"
      imageAlt="Колпаки ZKING"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Комплектующие", href: "/fences/accessories/" },
        { label: "Колпаки" },
      ]}
      breadcrumbsPath="/fences/accessories/caps"
    >
      <ExamplesGallery examples={examples} />
      <CatalogPage
        products={(section?.products ?? []) as CatalogProduct[]}
        compactImages
        description={section?.description}
        editable={editable}
        slug={SLUG}
      />
    </DevelopmentPage>
  );
}
