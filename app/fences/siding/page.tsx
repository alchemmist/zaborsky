import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "siding";

export const metadata: Metadata = {
  title: "Сайдинг",
  description: "Металлический сайдинг для забора от Заборский. Премиальные покрытия Printech и SteelArt.",
  alternates: {
    canonical: "https://заборский.рф/fences/siding/",
  },
  openGraph: {
    title: "Сайдинг",
    description: "Металлический сайдинг для забора от Заборский. Премиальные покрытия Printech и SteelArt.",
  },
};

export default async function SidingPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Сайдинг"
      imageSrc="/images/fences/siding.png"
      imageAlt="Сайдинг"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Сайдинг" },
      ]}
      breadcrumbsPath="/fences/siding"
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
