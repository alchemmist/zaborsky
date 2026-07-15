export type { FaqItem } from "@/lib/types";
import type { FaqItem } from "@/lib/types";

export function FaqSection({ items, title = "Часто задаваемые вопросы" }: { items: FaqItem[]; title?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {items.map((item, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left text-base font-semibold uppercase tracking-[0.1em] text-slate-900 transition hover:text-[#5c7887] sm:text-lg">
                  <span>{item.question}</span>
                  <span className="ml-4 shrink-0 text-slate-400 transition group-open:rotate-45 group-hover:text-[#5c7887]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-6 py-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
