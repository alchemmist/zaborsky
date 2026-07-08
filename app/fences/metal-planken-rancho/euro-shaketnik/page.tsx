import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "euro-shaketnik";

export const metadata: Metadata = {
  title: "Евроштакетник",
  description: "Евроштакетник от Заборский. Фигурный 110мм и ЭКО-М 95мм. Различные цвета и покрытия.",
  alternates: {
    canonical: "https://заборский.рф/fences/metal-planken-rancho/euro-shaketnik/",
  },
  openGraph: {
    title: "Евроштакетник",
    description: "Евроштакетник от Заборский. Фигурный 110мм и ЭКО-М 95мм. Различные цвета и покрытия.",
  },
};

export default async function EuroShaketnikPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Евроштакетник"
      imageSrc="/images/fences/euro-shaketnik.png"
      imageAlt="Евроштакетник"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Металлопланкен-ранчо", href: "/fences/metal-planken-rancho/" },
        { label: "Евроштакетник" },
      ]}
      breadcrumbsPath="/fences/metal-planken-rancho/euro-shaketnik"
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
