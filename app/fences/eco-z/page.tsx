import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import { getSection } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

const SLUG = "eco-z";

export const metadata: Metadata = {
  title: "Забор-жалюзи ЭКО-Z и ЭКО-Z US — цена и монтаж",
  description: "Купить забор-жалюзи ЭКО-Z и усиленные ЭКО-Z US в Магнитогорске и Челябинской области — с монтажом под ключ, цена от 188 руб/п.м. Серый графит, шоколад, белый, принтек, доставка по России.",
  alternates: {
    canonical: "https://заборский.рф/fences/eco-z/",
  },
  openGraph: {
    title: "Забор-жалюзи ЭКО-Z и ЭКО-Z US — цена и монтаж",
    description: "Купить забор-жалюзи ЭКО-Z и усиленные ЭКО-Z US в Магнитогорске и Челябинской области — с монтажом под ключ, цена от 188 руб/п.м. Серый графит, шоколад, белый, принтек, доставка по России.",
  },
};

const faqItems: FaqItem[] = [
  {
    question: "Чем отличаются ЭКО-Z и ЭКО-Z US?",
    answer: "ЭКО-Z US — усиленная версия с дополнительными рёбрами жёсткости и увеличенной толщиной металла. Рекомендуется для участков с повышенными ветровыми нагрузками и для заборов большой высоты.",
  },
  {
    question: "Какие цвета доступны для ЭКО-Z?",
    answer: "RAL7024/7024 серый графит, RAL8019/8019 тёмный шоколад, RAL9003/9003 белый. Все цвета доступны в двустороннем матовом покрытии. Также доступны премиальные принтеки: Чёрное дерево 3D, Тёмный дуб 3D, Античное дерево 3D.",
  },
  {
    question: "Сколько стоит забор ЭКО-Z под ключ?",
    answer: "Цена материала от 188 руб/п.м. Итоговая стоимость зависит от высоты, длины и сложности монтажа. Бесплатный расчёт по телефону.",
  },
];

export default async function EcoZPage() {
  const [section, editable] = await Promise.all([getSection(SLUG), isAdmin()]);

  return (
    <DevelopmentPage
      title="Жалюзи ЭКО-Z и ЭКО-Z US"
      imageSrc="/images/fences/euro-jalusi-eco-z.png"
      imageAlt="Жалюзи ЭКО-Z и ЭКО-Z US"
      breadcrumbs={[
        { label: "Заборы", href: "/fences/" },
        { label: "Жалюзи ЭКО-Z и ЭКО-Z US" },
      ]}
      breadcrumbsPath="/fences/eco-z"
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
