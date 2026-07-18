import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "gates";

export const metadata: Metadata = {
  title: "Откатные ворота",
  description:
    "Откатные ворота под ключ в Магнитогорске, Челябинской области и Башкирии: изготовление, автоматика, доставка и монтаж. Доставка по России.",
  alternates: {
    canonical: "https://заборский.рф/fences/gates/",
  },
  openGraph: {
    title: "Откатные ворота",
    description:
      "Откатные ворота под ключ в Магнитогорске, Челябинской области и Башкирии: изготовление, автоматика, доставка и монтаж. Доставка по России.",
  },
};

export default async function GatesPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Откатные ворота"
      imageSrc="/images/fences/root.png"
      imageAlt="Откатные ворота"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Откатные ворота" },
      ]}
      breadcrumbsPath="/fences/gates"
    >
      <CatalogPage
        products={(section?.products ?? []) as CatalogProduct[]}
        description={section?.description}
        editable={editable}
        slug={SLUG}
      />
    </DevelopmentPage>
  );
}
