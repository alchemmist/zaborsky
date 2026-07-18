import { buildKeywords } from "@/lib/keywords";

export function KeywordTags({ slug }: { slug?: string }) {
  if (!slug) return null;
  const keywords = buildKeywords(slug);
  if (keywords.length === 0) return null;
  return (
    <section className="bg-white pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="max-w-4xl text-xs leading-6 tracking-[0.02em] text-slate-400">
          <span className="font-semibold text-slate-500">Популярные запросы:</span>{" "}
          {keywords.join(" · ")}
        </p>
      </div>
    </section>
  );
}
