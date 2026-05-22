import { DevelopmentPage } from "@/components/development-page";
import { ReviewCard } from "@/components/review-card";
import { ProjectsGallery } from "@/components/projects-gallery";
import { ReviewJsonLd } from "@/components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы наших клиентов о работе Заборский. Реальные проекты и результаты.",
  openGraph: {
    title: "Отзывы",
    description: "Отзывы наших клиентов о работе Заборский. Реальные проекты и результаты.",
  },
};

const reviews = [
  {
    id: "review-1",
    text: "Заказали себе в частный сектор забор из штакетника цвета графит в компании ЗАБОРСКИЙ.РФ, с доставкой и установкой. Пришел в целости и в сохранности и по времени быстро. Смонтировали оперативно и аккуратно. Спасибо огромное ! Рекомендую компанию!",
    author: "Евгений и Анастасия Кудряковы, Тверская область",
    image: "/images/reviews/review-1.png",
    alt: "Отзыв Евгения и Анастасии Кудряковых",
  },
  {
    id: "review-2",
    text: "Не удержалась от возможности поделиться впечатлениями с потенциальными клиентами ЗАБОРСКИЙ.РФ Живу в Санкт-Петербурге, встал вопрос об установке забора жалюзи в частном доме, выбор остановила на на жалюзи ЭКО-Z шоколад. Промониторив цены, поняла что покупать нужно только здесь, обслуживание отличное, жалюзи пришли хорошо упакованные, всё целёхонькое. Специалисты компании, смонтировали 8 секций жалюзи за 2 дня. Спасибо вам большое за вашу работу",
    author: "Виктория и Михаил Антоновы, Санкт-Петербург",
    image: "/images/reviews/review-2.png",
    alt: "Отзыв Виктории и Михаила Антоновых",
  },
  {
    id: "review-3",
    text: "Решил забор-жалюзи металлические купить родителям на смену старого деревянного забора. Было важно не просто произвести минутное впечатление, а максимально удовлетворить их потребности в качестве и надежности. Они люди современные, поэтому новинка от ЗАБОРСКИЙ.РФ — забор жалюзи из металла, пришлась им по вкусу. Изучил рынок и заказал через интернет, хочу особенно отметить высокое качество и прочность ламелей по сравнению с местными производителями и удобную продуманную логистику, заказ в Россия доставили в кратчайший срок. Родители в приятном шоке — На Авито, в Леруа Мерлен, Петровиче и Оби, у соседей по коттеджному поселку ничего подобного они не видели. Отдельное спасибо менеджеру Ксении за полное сопровождение покупки от заказа и до завершения монтажа, с удовольствием отправил фото готового ограждения для портфолио. Однозначно буду рекомендовать ЗАБОРСКИЙ.РФ своим друзьям и знакомым!",
    author: "Олег Васильевич Давыдюк, Московская область",
    image: "/images/reviews/review-3.png",
    alt: "Отзыв Олега Васильевича Давыдюка",
  },
];

const projects = [
  { src: "/images/reviews/project-1.png", alt: "Проект 1" },
  { src: "/images/reviews/project-2.png", alt: "Проект 2" },
  { src: "/images/reviews/project-3.png", alt: "Проект 3" },
  { src: "/images/reviews/project-4.png", alt: "Проект 4" },
  { src: "/images/reviews/project-5.png", alt: "Проект 5" },
  { src: "/images/reviews/project-6.png", alt: "Проект 6" },
  { src: "/images/reviews/project-7.png", alt: "Проект 7" },
  { src: "/images/reviews/project-8.png", alt: "Проект 8" },
  { src: "/images/reviews/project-9.png", alt: "Проект 9" },
  { src: "/images/reviews/project-10.png", alt: "Проект 10" },
  { src: "/images/reviews/project-11.png", alt: "Проект 11" },
  { src: "/images/reviews/project-12.png", alt: "Проект 12" },
  { src: "/images/reviews/project-13.png", alt: "Проект 13" },
  { src: "/images/reviews/project-14.png", alt: "Проект 14" },
];

export default function ReviewsPage() {
  return (
    <DevelopmentPage
      title="Отзывы"
      imageSrc="/images/about/reviews.png"
      imageAlt="Отзывы клиентов"
      breadcrumbs={[
        { label: "О нас", href: "/about" },
        { label: "Отзывы" },
      ]}
      breadcrumbsPath="/about/reviews"
    >
      <ReviewJsonLd
        reviews={reviews.map((r) => ({ text: r.text, author: r.author }))}
        itemReviewedName="Заборский — заборы под ключ"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-3xl">
            Отзывы
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                text={review.text}
                author={review.author}
                image={review.image}
                alt={review.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectsGallery projects={projects} />
    </DevelopmentPage>
  );
}
