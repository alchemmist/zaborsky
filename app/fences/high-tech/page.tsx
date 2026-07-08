import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "high-tech";

export const metadata: Metadata = {
  title: "Забор-жалюзи Хай-Тек — цена и монтаж",
  description: "Забор-жалюзи Хай-Тек: купить с монтажом под ключ. Разные цвета двустороннего матового покрытия, доставка по России.",
  alternates: {
    canonical: "https://заборский.рф/fences/high-tech/",
  },
  openGraph: {
    title: "Забор-жалюзи Хай-Тек — цена и монтаж",
    description: "Забор-жалюзи Хай-Тек: купить с монтажом под ключ. Разные цвета двустороннего матового покрытия, доставка по России.",
  },
};

export default async function HighTechPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Жалюзи Хай-Тек"
      imageSrc="/images/fences/high-tech.png"
      imageAlt="Жалюзи Хай-Тек"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Жалюзи Хай-Тек" },
      ]}
      breadcrumbsPath="/fences/high-tech"
    >
      <CatalogPage
        specs={section?.specs}
        products={(section?.products ?? []) as CatalogProduct[]}
        description={section?.description}
        editable={editable}
        slug={SLUG}
      />
    </DevelopmentPage>
  );
}
