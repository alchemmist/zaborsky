import { DevelopmentPage } from "@/components/development-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог заборов",
  description: "Каталог заборов от ZABORSKY: жалюзи, металлопланкен, евроштакетник, сайдинг, 3D сетка и другие.",
  openGraph: {
    title: "Каталог заборов",
    description: "Каталог заборов от ZABORSKY: жалюзи, металлопланкен, евроштакетник, сайдинг, 3D сетка и другие.",
  },
};

export default function FencesPage() {
  return (
    <DevelopmentPage
      title="Заборы"
      imageSrc="/images/fences/root.png"
      imageAlt="Современный дом с забором"
      breadcrumbs={[
        { label: "Заборы" },
      ]}
    />
  );
}
