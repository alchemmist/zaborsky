import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "metal-planken-rancho";

export const metadata: Metadata = {
  title: "Металлопланкен-ранчо",
  description: "Забор из металлопланкена в стиле ранчо. Цены от 160 руб/п.м. Различные покрытия и цвета.",
  alternates: {
    canonical: "https://заборский.рф/fences/metal-planken-rancho/",
  },
  openGraph: {
    title: "Металлопланкен-ранчо",
    description: "Забор из металлопланкена в стиле ранчо. Цены от 160 руб/п.м. Различные покрытия и цвета.",
  },
};

export default async function MetalPlankenRanchoPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Металлопланкен-ранчо"
      imageSrc="/images/fences/metal-planken-rancho.png"
      imageAlt="Металлопланкен-ранчо"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Металлопланкен-ранчо" },
      ]}
      breadcrumbsPath="/fences/metal-planken-rancho"
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
