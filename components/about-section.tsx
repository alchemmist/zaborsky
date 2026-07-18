import { TelegramLink, MaxLink } from "@/components/social-icons";
import { getSettings } from "@/lib/settings";
import { telHref, renderParagraphs } from "@/lib/format";
import { SettingsTextEditor } from "@/components/admin/settings-text-editor";

export async function AboutSection({ editable }: { editable?: boolean }) {
  const { phone, email, aboutCompany } = await getSettings();
  return (
    <section id="about" className="bg-white px-6 py-6 pb-20 sm:px-16 sm:pb-24 lg:px-28 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              О компании
            </p>
            {editable ? (
              <SettingsTextEditor
                field="aboutCompany"
                value={aboutCompany}
                title="О компании"
                label="Редактировать"
                hint="Абзацы разделяйте пустой строкой."
              />
            ) : null}
          </div>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-4xl">
            Заборский
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600 sm:text-xl">
            {renderParagraphs(aboutCompany).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
                href={telHref(phone)}
                className="mt-2 block text-xl font-semibold text-slate-900 transition hover:text-[#5c7887]"
              >
                {phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-2 block text-lg font-medium text-slate-900 transition hover:text-[#5c7887]"
              >
                {email}
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

