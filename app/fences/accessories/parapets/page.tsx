import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "accessories/parapets";

export const metadata: Metadata = {
  title: "Парапеты ZKING",
  description: "Парапеты ZKING для заборов: Монблан, Эверест, Бона, Эльбрус. Различные размеры.",
  alternates: {
    canonical: "https://заборский.рф/fences/accessories/parapets/",
  },
  openGraph: {
    title: "Парапеты ZKING",
    description: "Парапеты ZKING для заборов: Монблан, Эверест, Бона, Эльбрус. Различные размеры.",
  },
};

export default async function ParapetsPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Парапеты ZKING"
      imageSrc="/images/fences/parapets.png"
      imageAlt="Парапеты ZKING"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Комплектующие", href: "/fences/accessories/" },
        { label: "Парапеты" },
      ]}
      breadcrumbsPath="/fences/accessories/parapets"
    >
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
