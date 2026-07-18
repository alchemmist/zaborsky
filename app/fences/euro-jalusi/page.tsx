import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "euro-jalusi";

export const metadata: Metadata = {
  title: "Забор-жалюзи Еврожалюзи — цена и монтаж",
  description: "Купить забор-жалюзи (еврожалюзи) в Магнитогорске, Челябинской области и Башкирии — с монтажом под ключ, цена от 132 руб/п.м. Разные цвета и покрытия, доставка по России.",
  alternates: {
    canonical: "https://заборский.рф/fences/euro-jalusi/",
  },
  openGraph: {
    title: "Забор-жалюзи Еврожалюзи — цена и монтаж",
    description: "Купить забор-жалюзи (еврожалюзи) в Магнитогорске, Челябинской области и Башкирии — с монтажом под ключ, цена от 132 руб/п.м. Разные цвета и покрытия, доставка по России.",
  },
};

const faqItems: FaqItem[] = [
  {
    question: "Чем еврожалюзи отличаются от обычных жалюзи?",
    answer: "Еврожалюзи имеют усиленную конструкцию с 24 рёбрами жёсткости, завальцованными краями и специальным профилем. Это делает их значительно прочнее и долговечнее обычных жалюзи. Рекомендуемое количество — 9-10 ламелей на погонный метр высоты.",
  },
  {
    question: "Какие цвета еврожалюзи доступны?",
    answer: "RAL8017/8017 шоколад, RAL8019/8019 тёмный шоколад, RAL7024/7024 серый графит, а также премиальные покрытия Printech: Чёрное дерево 3D, Тёмный дуб 3D, Античное дерево 3D. Все цвета доступны в двустороннем матовом исполнении.",
  },
  {
    question: "Сколько стоит еврожалюзи с установкой?",
    answer: "Цена материала от 132 руб/п.м в зависимости от покрытия. Стоимость установки рассчитывается индивидуально — зависит от высоты, длины забора и типа фундамента. Позвоните — сделаем точный расчёт.",
  },
];

export default async function EuroJalusiPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Еврожалюзи"
      imageSrc="/images/fences/euro-jalusi.png"
      imageAlt="Еврожалюзи"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Еврожалюзи" },
      ]}
      breadcrumbsPath="/fences/euro-jalusi"
    >
      <CatalogPage
        specs={section?.specs}
        products={(section?.products ?? []) as CatalogProduct[]}
        description={section?.description}
        editable={editable}
        slug={SLUG}
      />
      <FaqSection items={faqItems} />
    </DevelopmentPage>
  );
}
