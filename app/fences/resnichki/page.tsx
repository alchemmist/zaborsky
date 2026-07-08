import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "resnichki";

export const metadata: Metadata = {
  title: "Забор-жалюзи Реснички — цена и монтаж",
  description: "Забор-жалюзи Реснички от Заборский: купить с монтажом под ключ. Белый, тёмный шоколад, серый графит, доставка по России.",
  alternates: {
    canonical: "https://заборский.рф/fences/resnichki/",
  },
  openGraph: {
    title: "Забор-жалюзи Реснички — цена и монтаж",
    description: "Забор-жалюзи Реснички от Заборский: купить с монтажом под ключ. Белый, тёмный шоколад, серый графит, доставка по России.",
  },
};

export default async function ResnichkiPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Жалюзи Реснички"
      imageSrc="/images/fences/resnichki.png"
      imageAlt="Жалюзи Реснички"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Жалюзи Реснички" },
      ]}
      breadcrumbsPath="/fences/resnichki"
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
