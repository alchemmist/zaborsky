import { TelegramLink, MaxLink } from "@/components/social-icons";

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-6 pb-20 sm:px-16 sm:pb-24 lg:px-28 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            О компании
          </p>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-4xl">
            Заборский
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600 sm:text-xl">
            <p>
              Заборский - это успешный бренд и годами накопленный опыт монтажа
              красивых и стильных заборов по всей России, с инновационными
              подходами к дизайну заборов, технологии монтажа и выбору
              материалов.
            </p>
            <p>
              Мы заботимся о том, чтобы каждый объект нашего заказчика был
              индивидуален, сделан качественно и радовал на протяжении всей
              жизни.
            </p>
            <p>
              Мы создаем впечатляющие современные заборы для каждого из наших
              клиентов, внимательно относимся к его мнению и предлагаем
              наилучшее решение.
            </p>
            <p>
              Если вы хотите, чтобы ваш дом и участок преобразился в короткие
              сроки, у вас нет забора, или он устарел, обязательно звоните нам.
              Проконсультируем, ответим на все вопросы.
            </p>
          </div>
        </div>

        <aside
          id="contacts"
          className="border border-black/10 bg-slate-50 p-7 shadow-[0_12px_32px_rgba(22,28,37,0.08)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            Контакты
          </p>
          <div className="mt-6 space-y-5 text-base text-slate-700">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Телефон
              </p>
              <a
                href="tel:+79659383373"
                className="mt-2 block text-xl font-semibold text-slate-900 transition hover:text-[#5c7887]"
              >
                8-965-938-33-73
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Email
              </p>
              <a
                href="mailto:prometiz@inbox.ru"
                className="mt-2 block text-lg font-medium text-slate-900 transition hover:text-[#5c7887]"
              >
                prometiz@inbox.ru
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Telegram / MAX
              </p>
              <div className="mt-2 flex items-center gap-3 text-[#5c7887]">
                <TelegramLink className="h-7 w-7 transition hover:text-[#4a6575]" />
                <MaxLink className="h-7 w-7 transition hover:text-[#4a6575]" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

