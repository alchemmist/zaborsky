import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "terrace-board";

export const metadata: Metadata = {
  title: "Террасная доска ДПК",
  description:
    "Террасная доска ДПК (древесно-полимерный композит) в Магнитогорске, Челябинской области и Башкирии: для террас, дорожек и зон отдыха. Доставка по России.",
  alternates: {
    canonical: "https://заборский.рф/landscaping/terrace-board/",
  },
  openGraph: {
    title: "Террасная доска ДПК",
    description:
      "Террасная доска ДПК (древесно-полимерный композит) в Магнитогорске, Челябинской области и Башкирии: для террас, дорожек и зон отдыха. Доставка по России.",
  },
};

export default async function TerraceBoardPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Террасная доска ДПК"
      imageSrc="/images/landscaping/landscaping-root.png"
      imageAlt="Террасная доска ДПК"
      breadcrumbs={[
        { label: "Благоустройство", href: "/landscaping/" },
        { label: "Террасная доска ДПК" },
      ]}
      breadcrumbsPath="/landscaping/terrace-board"
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
