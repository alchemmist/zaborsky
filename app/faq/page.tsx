import { DevelopmentPage } from "@/components/development-page";
import { FaqSection } from "@/components/faq-section";
import { FaqEditor } from "@/components/admin/faq-editor";
import { getSettings } from "@/lib/settings";
import { isAdmin } from "@/lib/auth-server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы о заборах",
  description: "Ответы на популярные вопросы: какой забор выбрать, сколько стоит установка, сроки, гарантия, фундамент, уход за забором.",
  alternates: {
    canonical: "https://заборский.рф/faq/",
  },
  openGraph: {
    title: "Часто задаваемые вопросы о заборах",
    description: "Ответы на популярные вопросы: какой забор выбрать, сколько стоит установка, сроки, гарантия, фундамент, уход за забором.",
  },
};

export default async function FaqPage() {
  const [{ faq }, editable] = await Promise.all([getSettings(), isAdmin()]);

  return (
    <DevelopmentPage
      title="FAQ"
      imageSrc="/images/fences/root.png"
      imageAlt="Часто задаваемые вопросы о заборах"
      breadcrumbs={[
        { label: "FAQ" },
      ]}
      breadcrumbsPath="/faq"
    >
      {editable ? <FaqEditor faq={faq} /> : <FaqSection items={faq} />}
    </DevelopmentPage>
  );
}
