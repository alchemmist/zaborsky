import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { ExamplesGallery } from "@/components/examples-gallery";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "step-pavers";

export const metadata: Metadata = {
  title: "Шаговые плиты",
  description: "Шаговые плиты из полимерпесчаного композита. Коллекция STONE: Чёрный Сланец, Светлая Галька, Графитовый Серый.",
  alternates: {
    canonical: "https://заборский.рф/landscaping/step-pavers/",
  },
  openGraph: {
    title: "Шаговые плиты",
    description: "Шаговые плиты из полимерпесчаного композита. Коллекция STONE: Чёрный Сланец, Светлая Галька, Графитовый Серый.",
  },
};

const examples = [
  { src: "/images/fences/step-pavers/example-1.png", alt: "Пример использования шаговых плит 1" },
  { src: "/images/fences/step-pavers/example-2.png", alt: "Пример использования шаговых плит 2" },
];

export default async function StepPaversPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Шаговые плиты"
      imageSrc="/images/landscaping/step-pavers.png"
      imageAlt="Шаговые плиты"
      breadcrumbs={[
        { label: "Благоустройство", href: "/landscaping/" },
        { label: "Шаговые плиты" },
      ]}
      breadcrumbsPath="/landscaping/step-pavers"
    >
      <ExamplesGallery examples={examples} size="large" />
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
