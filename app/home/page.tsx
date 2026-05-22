import { HomePage } from "@/components/home-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заборы и благоустройство",
  description: "ZABORSKY — установка заборов, жалюзи, металлопланкена, евроштакетника, 3D сетки. Благоустройство участка под ключ.",
  openGraph: {
    title: "Заборы и благоустройство",
    description: "ZABORSKY — установка заборов, жалюзи, металлопланкена, евроштакетника, 3D сетки. Благоустройство участка под ключ.",
  },
};

export default function HomeRoutePage() {
  return <HomePage />;
}
