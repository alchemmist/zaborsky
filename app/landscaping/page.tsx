import { DevelopmentPage } from "@/components/development-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Благоустройство участка",
  description: "Благоустройство участка от Заборский: шаговые плиты, дорожки и элементы ландшафтного дизайна.",
  alternates: {
    canonical: "https://заборский.рф/landscaping/",
  },
  openGraph: {
    title: "Благоустройство участка",
    description: "Благоустройство участка от Заборский: шаговые плиты, дорожки и элементы ландшафтного дизайна.",
  },
};

export default function LandscapingPage() {
  return (
    <DevelopmentPage
      title="Благоустройство"
      imageSrc="/images/landscaping/landscaping-root.png"
      imageAlt="Благоустройство"
      breadcrumbs={[
        { label: "Благоустройство" },
      ]}
      breadcrumbsPath="/landscaping"
    >
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">О благоустройстве</h2>
          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            <p>
              Заборский предлагает услуги по благоустройству участка: шаговые плиты из
              полимерпесчаного композита, садовые дорожки и элементы ландшафтного дизайна.
              Наша продукция сочетает эстетику, долговечность и практичность.
            </p>
            <p>
              Шаговые плиты коллекции STONE доступны в цветах Чёрный Сланец, Светлая Галька
              и Графитовый Серый. Размер 990×330×55 мм — оптимален для создания удобных
              дорожек на газоне, в саду или зоне отдыха.
            </p>
            <p>
              Поможем спроектировать и реализовать благоустройство вашего участка под ключ.
              Звоните — проконсультируем по материалам, ценам и монтажу.
            </p>
          </div>
        </div>
      </section>
    </DevelopmentPage>
  );
}
