import { getSettings } from "@/lib/settings";
import { telHref } from "@/lib/format";

export async function CtaSection() {
  const { phone } = await getSettings();
  return (
    <section className="border-y border-black/10 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-8 py-6 text-center sm:px-8 md:flex-row md:text-left lg:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-700 md:text-base">
          Хотите проконсультироваться по заборам жалюзи?
        </p>
        <a
          href={telHref(phone)}
          className="inline-flex w-full items-center justify-center rounded-none bg-[#5c7887] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#4f6976] md:w-auto"
        >
          Запланировать звонок
        </a>
      </div>
    </section>
  );
}
