import { DevelopmentPage } from "@/components/development-page";
import { AboutPageSection } from "@/components/about-page-section";
import { isAdmin } from "@/lib/auth-server";
import { AdminBar } from "@/components/admin/admin-bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании",
  description: "Заборский — успешный бренд с опытом монтажа красивых и стильных заборов по всей России.",
  alternates: {
    canonical: "https://заборский.рф/about/",
  },
  openGraph: {
    title: "О компании",
    description: "Заборский — успешный бренд с опытом монтажа красивых и стильных заборов по всей России.",
  },
};

export default async function AboutPage() {
  const editable = await isAdmin();
  return (
    <DevelopmentPage
      title="О нас"
      imageSrc="/images/about/about-root.png"
      imageAlt="О нас"
      breadcrumbs={[
        { label: "О нас" },
      ]}
      breadcrumbsPath="/about"
    >
      <AboutPageSection
        title="Наша история"
        callToAction="Позвоните, или напишите нам, чтобы выбрать ваш забор мечты"
        editable={editable}
        images={[
          {
            src: "/images/about/example-1.png",
            alt: "Белый забор-жалюзи вдоль участка",
          },
          {
            src: "/images/about/example-2.png",
            alt: "Темный металлический вертикальный забор",
          },
        ]}
      />
      {editable ? <AdminBar /> : null}
    </DevelopmentPage>
  );
}
