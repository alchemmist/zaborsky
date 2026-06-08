import { DevelopmentPage } from "@/components/development-page";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на заборы — стоимость от производителя",
  description: "Цены на все типы заборов от Заборский: жалюзи от 127 руб/п.м, евроштакетник от 127 руб/п.м, металлопланкен от 160 руб/п.м. Доставка по России.",
  alternates: {
    canonical: "https://xn--80adjbqf5a.xn--p1ai/prices/",
  },
  openGraph: {
    title: "Цены на заборы — стоимость от производителя",
    description: "Цены на все типы заборов от Заборский: жалюзи от 127 руб/п.м, евроштакетник от 127 руб/п.м, металлопланкен от 160 руб/п.м.",
  },
};

const priceItems = [
  { name: "Еврожалюзи", price: "от 132 руб/п.м", href: "/fences/euro-jalusi/", colors: "RAL8017, RAL8019, RAL7024, принтек" },
  { name: "Жалюзи ЭКО-Z", price: "от 127 руб/п.м", href: "/fences/eco-z/", colors: "RAL7024, RAL8019, RAL9003, принтек" },
  { name: "Жалюзи ЭКО-Z US (усиленные)", price: "от 188 руб/п.м", href: "/fences/eco-z/", colors: "RAL7024, RAL8019, RAL9003, принтек" },
  { name: "Жалюзи Реснички", price: "от 188 руб/п.м", href: "/fences/resnichki/", colors: "RAL9003, RAL8019, RAL7024" },
  { name: "Жалюзи Хай-Тек", price: "от 132 руб/п.м", href: "/fences/high-tech/", colors: "RAL8017, RAL8019, RAL7024, RAL9003" },
  { name: "Металлопланкен-ранчо", price: "от 160 руб/п.м", href: "/fences/metal-planken-rancho/", colors: "RAL8017, RAL8019, RAL7024, принтек" },
  { name: "Евроштакетник", price: "от 127 руб/п.м", href: "/fences/metal-planken-rancho/euro-shaketnik/", colors: "RAL8019, RAL9005, RAL8017, RAL9003, принтек" },
  { name: "Сайдинг", price: "от 160 руб/п.м", href: "/fences/siding/", colors: "RAL8017, RAL8019, RAL7024, RAL9003, принтек" },
  { name: "3D сетка Гиттер", price: "от 3 500 руб/секция", href: "/fences/gitter/", colors: "RAL6005, RAL7024, RAL9005, оцинкованная" },
  { name: "Травяной забор Grass Fence", price: "от 17 000 руб", href: "/fences/grass-fence/", colors: "Зелёный" },
  { name: "Колпаки на столбы ZKING", price: "от 800 руб", href: "/fences/accessories/caps/", colors: "Модена, Эверест, Бокс, Эльбрус" },
  { name: "Парапеты ZKING", price: "от 800 руб", href: "/fences/accessories/parapets/", colors: "Монблан, Эверест, Бона, Эльбрус" },
  { name: "Шаговые плиты", price: "1 400 руб", href: "/landscaping/step-pavers/", colors: "Чёрный Сланец, Светлая Галька, Графитовый Серый" },
];

export default function PricesPage() {
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
    </DevelopmentPage>
  );
}
