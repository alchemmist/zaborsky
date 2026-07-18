import { TelegramIcon, MaxIcon } from "@/components/social-icons";
import { getSettings } from "@/lib/settings";
import { telHref } from "@/lib/format";
import { GEO } from "@/lib/geo";

export async function Footer() {
  const { phone, email } = await getSettings();
  return (
    <footer className="bg-[#5c7887] px-6 pt-12 pb-24 text-white sm:px-6 sm:pt-12 sm:pb-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 text-center sm:gap-8">
        <p className="text-base uppercase tracking-[0.22em] text-white/80">
          Чтобы получить консультацию по всем нашим товарам, позвоните или
          напишите нам:
        </p>
        <div className="flex flex-col items-center gap-5 text-base font-semibold uppercase tracking-[0.16em] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12">
          <a href={telHref(phone)} className="rounded-lg px-2 -mx-2 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white">
            тел {phone}
          </a>
          <div className="flex items-center gap-5 text-white/80 sm:gap-12">
            <a
              href="https://t.me/alex_zaborsky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-2 -mx-2 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              <span>TG:</span>
              <TelegramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOJiBu4STx8Aftcw4KZhEOB63VktzebdOwXrwVfS40jk-2SXHaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-2 -mx-2 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              <span>MAX:</span>
              <MaxIcon className="h-5 w-5" />
            </a>
          </div>
          <a
            href={`mailto:${email}`}
            className="rounded-lg px-2 -mx-2 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            Email: {email}
          </a>
        </div>
        <p className="text-sm uppercase tracking-[0.16em] text-white/60">
          {GEO.city} · {GEO.region} и {GEO.regionShort} · доставка по России
        </p>
      </div>
    </footer>
  );
}
