import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Установка заборов под ключ — цена монтажа",
  description: "Профессиональная установка заборов под ключ от Заборский. Бесплатный замер, гарантия на монтаж. Цена установки от 500 руб/п.м. Работаем с любыми типами заборов.",
  alternates: {
    canonical: "https://заборский.рф/services/installation/",
  },
  openGraph: {
    title: "Установка заборов под ключ — цена монтажа",
    description: "Профессиональная установка заборов под ключ от Заборский. Бесплатный замер, гарантия на монтаж.",
  },
};

const features = [
  "Бесплатный выезд и замер",
  "Профессиональный монтаж",
  "Гарантия на работы",
  "Работаем с любыми участками",
  "Все материалы под ключ",
  "Уборка после монтажа",
];

const steps = [
  { title: "Заявка", description: "Оставьте заявку на сайте или позвоните — согласуем удобное время" },
  { title: "Замер", description: "Выезд специалиста на участок, бесплатный замер и расчёт сметы" },
  { title: "Договор", description: "Подписание договора, согласование сроков и стоимости" },
  { title: "Изготовление", description: "Изготовление материалов по вашим размерам (3-10 дней)" },
  { title: "Монтаж", description: "Установка забора бригадой профессионалов (1-3 дня)" },
  { title: "Приёмка", description: "Сдача объекта, проверка качества, подписание акта" },
];

export default function InstallationPage() {
  return (
    <ServicePage
      title="Установка заборов"
      imageSrc="/images/fences/root.png"
      imageAlt="Установка забора профессиональной бригадой"
      description="Профессиональная установка заборов под ключ — от замера до финальной приёмки. Монтируем все типы заборов: жалюзи, металлопланкен, евроштакетник, сайдинг, 3D сетку, травяные заборы. Работаем с 2017 года, тысячи довольных клиентов по всей России."
      price="500 руб/п.м"
      features={features}
      breadcrumbs={[
        { label: "Услуги" },
        { label: "Установка" },
      ]}
      breadcrumbsPath="/services/installation"
    >
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-3xl">
            Этапы работы
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#5c7887] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold uppercase tracking-[0.14em] text-slate-900">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#5c7887] to-[#6d8896] p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl">
              Оставьте заявку на бесплатный замер
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Выезжаем по всей России. Рассчитаем стоимость установки вашего забора
              в день обращения.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+79659383373"
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
    </ServicePage>
  );
}
