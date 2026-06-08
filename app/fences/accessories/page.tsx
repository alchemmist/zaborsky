import { DevelopmentPage } from "@/components/development-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Комплектующие для заборов",
  description: "Комплектующие для заборов: колпаки на столбы и парапеты ZKING.",
  alternates: {
    canonical: "https://заборский.рф/fences/accessories/",
  },
  openGraph: {
    title: "Комплектующие для заборов",
    description: "Комплектующие для заборов: колпаки на столбы и парапеты ZKING.",
  },
};

export default function AccessoriesPage() {
  return (
    <DevelopmentPage
      title="Комплектующие для заборов"
      imageSrc="/images/fences/accessories-root.png"
      imageAlt="Комплектующие для заборов"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Комплектующие" },
      ]}
      breadcrumbsPath="/fences/accessories"
    />
  );
}
