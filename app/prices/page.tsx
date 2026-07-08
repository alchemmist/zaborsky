import { DevelopmentPage } from "@/components/development-page";
import Link from "next/link";
import type { Metadata } from "next";
import { getPrices } from "@/lib/catalog";
import { isAdmin } from "@/lib/auth-server";
import { PricesEditor } from "@/components/admin/prices-editor";
import { AdminBar } from "@/components/admin/admin-bar";

export const metadata: Metadata = {
  title: "Цены на заборы — стоимость от производителя",
  description: "Цены на все типы заборов от Заборский: жалюзи от 132 руб/п.м, евроштакетник от 127 руб/п.м, металлопланкен от 160 руб/п.м. Доставка по России.",
  alternates: {
    canonical: "https://заборский.рф/prices/",
  },
  openGraph: {
    title: "Цены на заборы — стоимость от производителя",
    description: "Цены на все типы заборов от Заборский: жалюзи от 132 руб/п.м, евроштакетник от 127 руб/п.м, металлопланкен от 160 руб/п.м.",
  },
};

export default async function PricesPage() {
  const [priceItems, editable] = await Promise.all([getPrices(), isAdmin()]);

  return (
    <DevelopmentPage
      title="Цены"
      imageSrc="/images/fences/root.png"
      imageAlt="Цены на заборы"
      breadcrumbs={[
        { label: "Цены" },
      ]}
      breadcrumbsPath="/prices"
    >
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
            Стоимость заборов и комплектующих
          </h2>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-slate-600">
            Цены указаны за погонный метр материала. Стоимость установки рассчитывается
            индивидуально в зависимости от объёма работ, высоты забора и типа фундамента.
            Позвоните — сделаем точный расчёт за 15 минут.
          </p>
          {editable ? (
            <PricesEditor rows={priceItems} />
          ) : (
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-4 font-semibold uppercase tracking-[0.1em] text-slate-500 sm:px-6">Тип</th>
                    <th className="px-4 py-4 font-semibold uppercase tracking-[0.1em] text-slate-500 sm:px-6">Цена</th>
                    <th className="hidden px-4 py-4 font-semibold uppercase tracking-[0.1em] text-slate-500 sm:table-cell sm:px-6">Цвета / Виды</th>
                    <th className="px-4 py-4 font-semibold uppercase tracking-[0.1em] text-slate-500 sm:px-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {priceItems.map((item) => (
                    <tr key={item.name} className="transition hover:bg-slate-50">
                      <td className="px-4 py-4 font-medium text-slate-900 sm:px-6">{item.name}</td>
                      <td className="px-4 py-4 text-slate-700 sm:px-6">{item.price}</td>
                      <td className="hidden px-4 py-4 text-sm text-slate-500 sm:table-cell sm:px-6">{item.colors}</td>
                      <td className="px-4 py-4 sm:px-6">
                        <Link
                          href={item.href}
                          className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.12em] text-[#5c7887] transition hover:text-[#4a6575]"
                        >
                          Подробнее
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-[#5c7887] to-[#6d8896] p-8 text-center text-white sm:p-12">
            <h2 className="text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl">
              Получите точный расчёт
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Оставьте заявку — мы рассчитаем стоимость вашего забора с учётом всех
              пожеланий и особенностей участка. Бесплатно.
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
      {editable ? <AdminBar /> : null}
    </DevelopmentPage>
  );
}
