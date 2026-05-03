export function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            О компании
          </p>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-4xl">
            ZABORSKY
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Мы проектируем и монтируем заборы для частных домов, коттеджных
              посёлков и коммерческих участков. В работе делаем ставку на
              аккуратную геометрию, чистый монтаж и долговечный результат, который
              не теряет вид спустя сезоны.
            </p>
            <p>
              Команда помогает подобрать решение под архитектуру дома, рельеф
              участка и бюджет проекта. Мы обсуждаем задачи до начала работ,
              предлагаем несколько вариантов и берём на себя все этапы от замера
              до установки.
            </p>
            <p>
              В приоритете качество материалов, точность сборки и спокойный
              сервис. Вы получаете понятную консультацию, прозрачную смету и
              монтаж без лишней суеты.
            </p>
            <p>
              Отдельно работаем с благоустройством территории, чтобы участок
              выглядел цельно и ухоженно. Важно не просто поставить забор, а
              собрать современное пространство с правильным характером.
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
          </div>
        </aside>
      </div>
    </section>
  );
}
