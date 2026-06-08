import { DevelopmentPage } from "@/components/development-page";
import { AboutPageSection } from "@/components/about-page-section";
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

export default function AboutPage() {
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
        description="Компания &quot;ЗАБОРСКИЙ.РФ&quot; работает с 2017 года. Она основана Алексеем Заборским, который начинал свой путь как обычный строитель заборов в Челябинской области. Развитие компании не останавливалось все годы существования, мы заключили прямые контракты с заводами, которые изготавливают различную продукцию для заборов. Являемся основным дистрибьютором холдинга заводов ТПК &quot;Центр Металлокровли&quot; по Российской Федерации, который выпускает различные заборы жалюзи и многое другое, также имеем дилерские соглашения с другими производителями, которые выпускают материалы для заборов. Кроме качественных услуг мы можем предложить своим клиентам большой спектр различных материалов по доступным ценам."
        callToAction="Позвоните, или напишите нам, чтобы выбрать ваш забор мечты"
        phoneHighlight="+7 (865) 938-33-73"
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
    </DevelopmentPage>
  );
}
