import { DevelopmentPage } from "@/components/development-page";
import { AddressSection } from "@/components/address-section";
import { TelegramIcon, MaxIcon } from "@/components/social-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с ZABORSKY: телефон 8-965-938-33-73, email prometiz@inbox.ru, Telegram, MAX.",
  openGraph: {
    title: "Контакты",
    description: "Свяжитесь с ZABORSKY: телефон 8-965-938-33-73, email prometiz@inbox.ru, Telegram, MAX.",
  },
};

export default function ContactsPage() {
  return (
    <DevelopmentPage
      title="Контакты"
      imageSrc="/images/contacts/contacts-root.png"
      imageAlt="Контакты"
      breadcrumbs={[
        { label: "Контакты" },
      ]}
    >
      <section className="bg-white pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-3xl">
            Свяжитесь с нами
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Телефон
                </p>
                <a
                  href="tel:+79659383373"
                  className="mt-3 block text-xl font-bold text-slate-900 transition hover:text-[#5c7887] sm:text-2xl"
                >
                  8-965-938-33-73
                </a>
              </div>
              <p className="mt-auto pt-3 text-base text-slate-500">
                Звоните с 9:00 до 20:00
              </p>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:prometiz@inbox.ru"
                  className="mt-3 block text-lg font-semibold text-slate-900 transition hover:text-[#5c7887] break-all sm:text-xl"
                >
                  prometiz@inbox.ru
                </a>
              </div>
              <p className="mt-auto pt-3 text-base text-slate-500">
                Ответим в течение дня
              </p>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-6 sm:col-span-2 lg:col-span-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Мессенджеры
                </p>
                <div className="mt-3 space-y-3">
                  <a
                    href="https://t.me/alex_zaborsky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5c7887] transition hover:text-[#4a6575]"
                  >
                    <TelegramIcon className="h-8 w-8" />
                    <span className="text-base font-semibold">Telegram</span>
                  </a>
                  <a
                    href="https://max.ru/u/f9LHodD0cOJiBu4STx8Aftcw4KZhEOB63VktzebdOwXrwVfS40jk-2SXHaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#5c7887] transition hover:text-[#4a6575]"
                  >
                    <MaxIcon className="h-8 w-8" />
                    <span className="text-base font-semibold">MAX</span>
                  </a>
                </div>
              </div>
              <p className="mt-auto pt-3 text-base text-slate-500">
                Оперативно отвечаем в мессенджерах
              </p>
            </div>
          </div>
        </div>
      </section>

      <AddressSection
        description="Наши офисы там, где работают наши монтажные бригады, а значит это вся Россия! Чтобы наши клиенты не тратили своё время, выездами в офис, из пригорода, или с отдаленных районов города, каждая бригада имеет полный комплект образцов и веер цветов, чтобы показать на объекте варианты жалюзи, штакетника и проконсультировать по наилучшему выбору"
        imageSrc="/images/contacts/worker.png"
        imageAlt="Специалист компании ЗАБОРСКИЙ"
      />
    </DevelopmentPage>
  );
}
