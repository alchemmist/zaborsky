import { DevelopmentPage } from "@/components/development-page";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import Link from "next/link";
import { getSettings } from "@/lib/settings";
import { telHref } from "@/lib/format";
import { GEO } from "@/lib/geo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заборы-жалюзи в Магнитогорске под ключ — цена и монтаж",
  description:
    "Заборы-жалюзи (еврожалюзи) в Магнитогорске, Челябинской области и Башкирии: изготовление, доставка и монтаж под ключ. Цена материала от 132 руб/п.м, под ключ от 6300 руб/п.м. Бесплатный замер.",
  alternates: {
    canonical: "https://заборский.рф/zabor-zhalyuzi-magnitogorsk/",
  },
  openGraph: {
    title: "Заборы-жалюзи в Магнитогорске под ключ — цена и монтаж",
    description:
      "Заборы-жалюзи (еврожалюзи) в Магнитогорске и области: изготовление, доставка и монтаж под ключ. Цена материала от 132 руб/п.м. Бесплатный замер.",
  },
};

const faqItems: FaqItem[] = [
  {
    question: "Сколько стоит забор-жалюзи в Магнитогорске под ключ?",
    answer:
      "Цена материала — от 132 руб/п.м, под ключ (с монтажом) забор-жалюзи высотой 2 метра — от 6300 руб/п.м на готовые столбы и от 7800 руб/п.м с нулевого цикла. Итог зависит от типа жалюзи, высоты, длины и фундамента. Бесплатно рассчитаем по телефону или на замере.",
  },
  {
    question: "Вы делаете замер и монтаж в Магнитогорске и области?",
    answer:
      "Да. Мы базируемся в Магнитогорске и работаем по Челябинской области и Башкирии — выезжаем на замер и выполняем монтаж своими бригадами. В другие регионы отправляем материалы с доставкой по России.",
  },
  {
    question: "Какие жалюзи-заборы можно заказать?",
    answer:
      "Еврожалюзи, ЭКО-Z и усиленные ЭКО-Z US, Реснички, Хай-Тек — в разных цветах RAL, двустороннем матовом покрытии и премиальных принтеках под дерево. Поможем подобрать вариант под ваш участок и бюджет.",
  },
];

const advantages = [
  "Базируемся в Магнитогорске — замер и монтаж своими бригадами по городу и области",
  "Изготовление под ваши размеры, доставка по Челябинской области, Башкирии и всей России",
  "Прямые контракты с заводами — цены от производителя",
  "Двустороннее матовое покрытие и принтеки под дерево, гарантия на конструкцию и монтаж",
];

const steps = [
  ["Заявка", "Оставьте заявку или позвоните — согласуем удобное время"],
  ["Замер", "Бесплатный выезд специалиста на участок в Магнитогорске и области"],
  ["Договор", "Фиксируем стоимость, цвет, сроки"],
  ["Изготовление", "Производство по вашим размерам, 3–10 дней"],
  ["Монтаж", "Установка забора-жалюзи бригадой, 1–3 дня"],
];

export default async function ZhalyuziMagnitogorskPage() {
  const { phone } = await getSettings();

  return (
    <DevelopmentPage
      title="Заборы-жалюзи в Магнитогорске"
      imageSrc="/images/fences/euro-jalusi.png"
      imageAlt="Забор-жалюзи в Магнитогорске"
      breadcrumbs={[{ label: "Заборы-жалюзи в Магнитогорске" }]}
      breadcrumbsPath="/zabor-zhalyuzi-magnitogorsk"
    >
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            <p>
              Заборский изготавливает и устанавливает <strong>заборы-жалюзи (еврожалюзи) в
              Магнитогорске</strong>, по Челябинской области и Башкирии. Забор-жалюзи —
              современное ограждение из горизонтальных ламелей: снаружи участок закрыт от
              посторонних глаз, но при этом сохраняется вентиляция и мягкий свет. Прочная
              конструкция, аккуратный вид и большой выбор цветов.
            </p>
            <p>
              Работаем под ключ: замер, изготовление по вашим размерам, доставка и монтаж
              силами наших бригад. Цена материала — от 132 руб/п.м, под ключ (с установкой)
              забор-жалюзи высотой 2 метра — от 6300 руб/п.м. Точную стоимость рассчитаем
              бесплатно.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {advantages.map((text) => (
              <div key={text} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#5c7887]" />
                <p className="text-base text-slate-700">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
              Виды заборов-жалюзи
            </h2>
            <ul className="mt-6 space-y-3 text-lg text-slate-700">
              <li><Link href="/fences/euro-jalusi/" className="font-medium text-[#5c7887] hover:text-[#4a6575]">Еврожалюзи</Link> — от 132 руб/п.м</li>
              <li><Link href="/fences/eco-z/" className="font-medium text-[#5c7887] hover:text-[#4a6575]">Жалюзи ЭКО-Z и ЭКО-Z US</Link> — от 188 руб/п.м</li>
              <li><Link href="/fences/resnichki/" className="font-medium text-[#5c7887] hover:text-[#4a6575]">Жалюзи Реснички</Link></li>
              <li><Link href="/fences/high-tech/" className="font-medium text-[#5c7887] hover:text-[#4a6575]">Жалюзи Хай-Тек</Link></li>
            </ul>
            <p className="mt-4 text-base text-slate-500">
              Полный каталог и цены — на страницах <Link href="/fences/" className="text-[#5c7887] hover:text-[#4a6575]">«Заборы»</Link> и <Link href="/prices/" className="text-[#5c7887] hover:text-[#4a6575]">«Цены»</Link>.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
              Как мы работаем
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map(([title, desc], i) => (
                <li key={title} className="rounded-xl border border-slate-200 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5c7887]">Шаг {i + 1}</p>
                  <p className="mt-1 font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FaqSection items={faqItems} title="Вопросы о заборах-жалюзи в Магнитогорске" />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#5c7887] to-[#6d8896] p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl">
              Забор-жалюзи в Магнитогорске под ключ
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Оставьте заявку — бесплатно рассчитаем стоимость и приедем на замер в
              {" "}{GEO.city} и область.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={telHref(phone)}
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-bold uppercase tracking-[0.14em] text-[#5c7887] transition hover:bg-white/90"
              >
                Позвонить
              </a>
              <Link
                href="/contacts/"
                className="inline-flex items-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold uppercase tracking-[0.14em] text-white transition hover:border-white/70"
              >
                Написать нам
              </Link>
            </div>
          </div>
        </div>
      </section>
    </DevelopmentPage>
  );
}
