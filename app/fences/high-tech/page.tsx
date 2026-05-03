import { DevelopmentPage } from "@/components/development-page";
import { CatalogPage, type CatalogProduct } from "@/components/catalog-page";

const specs = [
  "Рекомендуемое количество: 8 шт на 1 погонный метр высоты",
  "Расстояние между ламелями: 120 мм",
  "Рёбра жёсткости: 6 шт",
  "Высота: 120 мм (завальцовка)",
  "Длина: любая по размерам кратно 10 мм",
  "Крепление:",
  "Боковая планка: 57×37 мм",
  "Верхняя планка: 60×37 мм",
  "Цена: от 161 руб за погонный метр (в зависимости от покрытия)",
];

const products: CatalogProduct[] = [
  {
    id: "high-tech-1",
    title: "Жалюзи хай-тек",
    color: "RAL9005/9005 черный",
    extra: "двусторонний матте",
    price: "241 руб/п.м",
    image: "/images/fences/high-tech/product-1.png",
    alt: "Жалюзи хай-тек RAL9005/9005 черный",
  },
  {
    id: "high-tech-2",
    title: "Жалюзи хай-тек",
    color: "RAL9005/9005 черный",
    extra: "двусторонний матте",
    price: "241 руб/п.м",
    image: "/images/fences/high-tech/product-2.png",
    alt: "Жалюзи хай-тек RAL9005/9005 черный",
  },
  {
    id: "high-tech-3",
    title: "Жалюзи хай-тек",
    color: "RAL8017/8017 шоколад",
    extra: "двусторонний матте",
    price: "241 руб/п.м",
    image: "/images/fences/high-tech/product-3.png",
    alt: "Жалюзи хай-тек RAL8017/8017 шоколад",
  },
  {
    id: "high-tech-4",
    title: "Жалюзи хай-тек",
    color: "RAL8019/8019 темный шоколад",
    extra: "двусторонний матте",
    price: "241 руб/п.м",
    image: "/images/fences/high-tech/product-4.png",
    alt: "Жалюзи хай-тек RAL8019/8019 темный шоколад",
  },
  {
    id: "high-tech-5",
    title: "Жалюзи хай-тек",
    color: "RAL7024/7024 серый графит",
    extra: "двусторонний матте",
    price: "241 руб/п.м",
    image: "/images/fences/high-tech/product-5.png",
    alt: "Жалюзи хай-тек RAL7024/7024 серый графит",
  },
  {
    id: "high-tech-6",
    title: "Жалюзи хай-тек",
    color: "RAL7024/7024 серый графит",
    extra: "двусторонний матте",
    price: "241 руб/п.м",
    image: "/images/fences/high-tech/product-6.png",
    alt: "Жалюзи хай-тек RAL7024/7024 серый графит",
  },
];

export default function HighTechPage() {
  return (
    <DevelopmentPage
      title="Жалюзи Хай-Тек"
      description="Минималистичный и технологичный забор для строгой современной архитектуры."
      imageSrc="/images/fences/high-tech.png"
      imageAlt="Жалюзи Хай-Тек"
    >
      <CatalogPage specs={specs} products={products} />
    </DevelopmentPage>
  );
}
