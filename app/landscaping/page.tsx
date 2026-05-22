import { DevelopmentPage } from "@/components/development-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Благоустройство участка",
  description: "Благоустройство участка от ZABORSKY: шаговые плиты, дорожки и элементы ландшафтного дизайна.",
  openGraph: {
    title: "Благоустройство участка",
    description: "Благоустройство участка от ZABORSKY: шаговые плиты, дорожки и элементы ландшафтного дизайна.",
  },
};

export default function LandscapingPage() {
  return (
    <DevelopmentPage
      title="Благоустройство"
      imageSrc="/images/landscaping/landscaping-root.png"
      imageAlt="Благоустройство"
      breadcrumbs={[
        { label: "Благоустройство" },
      ]}
    />
  );
}
