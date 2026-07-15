import Image from "next/image";
import { sitePath } from "@/components/site-path";
import { TelegramLink, MaxLink } from "@/components/social-icons";
import { getSettings } from "@/lib/settings";
import { telHref } from "@/lib/format";

interface AboutPageSectionProps {
  title: string;
  description: string;
  callToAction: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export async function AboutPageSection({
  title,
  description,
  callToAction,
  images,
}: AboutPageSectionProps) {
  const { phone, email } = await getSettings();
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-4xl">
              {title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              <div dangerouslySetInnerHTML={{ __html: description }} />
              <p className="font-semibold text-slate-900">{callToAction}</p>
            </div>
          </div>

          {/* Contact Block */}
          <div className="bg-gradient-to-br from-[#5c7887] to-[#6d8896] rounded-lg p-8 sm:p-10 text-white shadow-lg">
            <h3 className="text-2xl font-semibold uppercase tracking-[0.14em] mb-6">
              Свяжитесь с нами
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-white/70 mb-2">Телефон</p>
                <a
                  href={telHref(phone)}
                  className="text-2xl font-bold hover:text-white/80 transition"
                >
                  {phone}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-white/70 mb-2">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-lg hover:text-white/80 transition break-all"
                >
                  {email}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.12em] text-white/70 mb-2">Telegram / MAX</p>
                <div className="flex items-center gap-3 text-white/80">
                  <TelegramLink className="h-7 w-7 transition hover:text-white" />
                  <MaxLink className="h-7 w-7 transition hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        {images && images.length > 0 && (
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {images.map((image, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={sitePath(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
