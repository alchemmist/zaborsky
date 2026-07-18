import { DevelopmentPage } from "@/components/development-page";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог заборов",
  description: "Каталог заборов от Заборский: жалюзи, металлопланкен, евроштакетник, сайдинг, 3D сетка и другие.",
  alternates: {
    canonical: "https://заборский.рф/fences/",
  },
  openGraph: {
    title: "Каталог заборов",
    description: "Каталог заборов от Заборский: жалюзи, металлопланкен, евроштакетник, сайдинг, 3D сетка и другие.",
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
      breadcrumbsPath="/fences"
    >
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">О каталоге заборов</h2>
          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            <p>
              Заборский предлагает широкий ассортимент современных заборов под ключ. В нашем
              каталоге представлены заборы жалюзи (еврожалюзи, ЭКО-Z, Хай-Тек, Реснички),
              металлопланкен-ранчо, евроштакетник, сайдинг, 3D сетка гиттер и травяные заборы
              Grass Fence. Каждый тип ограждения доступен в различных цветах и покрытиях,
              включая двусторонний матте и премиальные принтеки.
            </p>
            <p>
              Мы работаем с проверенными производителями и предлагаем цены от 127 руб/п.м.
              Все конструкции поставляются с полным комплектом креплений и фурнитуры.
              Возможна доставка в любой регион России.
            </p>
            <p>
              Поможем подобрать оптимальный вариант под ваш бюджет и задачи. Выполняем
              профессиональный монтаж с гарантией. Позвоните или напишите — проконсультируем
              по всем вопросам.
            </p>
            <p>
              Работаем в Магнитогорске и области — подробнее на странице{" "}
              <Link href="/zabor-zhalyuzi-magnitogorsk/" className="font-medium text-[#5c7887] hover:text-[#4a6575]">
                «Заборы-жалюзи в Магнитогорске»
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </DevelopmentPage>
  );
}
