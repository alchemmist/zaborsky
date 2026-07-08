import type { CatalogData, PriceRow } from "@/lib/types";

export const seedCatalog: CatalogData = {
  "euro-jalusi": {
    kind: "catalog",
    description:
      "Уникальный, надёжный вид ограждения с современным дизайном. Сплошные снаружи, но при этом сохраняют видимость внутри участка, пропускают свет и обеспечивают хорошее проветривание.",
    specs: [
      "Рекомендуемое количество: 9-10 шт на 1 погонный метр высоты",
      "Расстояние между ламелями: 80 мм",
      "Рёбер жесткости: 24 шт",
      "Высота: 115 мм (завальцовка)",
      "Длина: любая по размерам кратно 10 мм",
      "Крепление: Боковая планка 57*37мм, Верхняя планка 60*37мм",
      "Цена: от 132 рублей за погонный метр, в зависимости от покрытия",
    ],
    products: [
      { id: "euro-jalusi-1", title: "ЕВРОЖАЛЮЗИ", color: "RAL8017/8017 ШОКОЛАД", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 193 руб п/м", image: "/images/fences/euro-jalusi/product-1.png", alt: "ЕВРОЖАЛЮЗИ RAL8017/8017 ШОКОЛАД" },
      { id: "euro-jalusi-2", title: "ЕВРОЖАЛЮЗИ", color: "RAL8019/8019 ТЕМНЫЙ ШОКОЛАД", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 193 руб п/м", image: "/images/fences/euro-jalusi/product-2.png", alt: "ЕВРОЖАЛЮЗИ RAL8019/8019 ТЕМНЫЙ ШОКОЛАД" },
      { id: "euro-jalusi-3", title: "ЕВРОЖАЛЮЗИ", color: "RAL7024/7024 СЕРЫЙ ГРАФИТ", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 193 руб п/м", image: "/images/fences/euro-jalusi/product-3.png", alt: "ЕВРОЖАЛЮЗИ RAL7024/7024 СЕРЫЙ ГРАФИТ" },
      { id: "euro-jalusi-4", title: "ЕВРОЖАЛЮЗИ", color: "ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)", price: "Цена 186 руб п/м", image: "/images/fences/euro-jalusi/product-4.png", alt: "ЕВРОЖАЛЮЗИ ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)" },
      { id: "euro-jalusi-5", title: "ЕВРОЖАЛЮЗИ, МЕТАЛЛОПЛАНКЕН", color: "ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)", price: "Цена 186 руб п/м", image: "/images/fences/euro-jalusi/product-5.png", alt: "ЕВРОЖАЛЮЗИ, МЕТАЛЛОПЛАНКЕН ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)" },
      { id: "euro-jalusi-6", title: "ЕВРОЖАЛЮЗИ", color: "АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)", price: "Цена 186 руб п/м", image: "/images/fences/euro-jalusi/product-6.png", alt: "ЕВРОЖАЛЮЗИ АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)" },
    ],
  },

  "eco-z": {
    kind: "catalog",
    description:
      "Лаконичное решение для современного участка с акцентом на геометрию и приватность.",
    specs: [
      "Рекомендуемое количество: 9-10 шт на 1 погонный метр высоты",
      "Расстояние между ламелями: 90 мм",
      "Рёбер жесткости: 6 шт",
      "Высота: 115 мм (завальцовка)",
      "Длина: любая по размерам кратно 10 мм",
      "Крепление: Боковая планка 57*37мм, Верхняя планка 60*37мм",
      "Цена: от 188 рублей за погонный метр в зависимости от покрытия",
    ],
    products: [
      { id: "eco-z-1", title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)", color: "RAL7024/7024 СЕРЫЙ ГРАФИТ", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-1.png", alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ) RAL7024/7024 СЕРЫЙ ГРАФИТ" },
      { id: "eco-z-2", title: "ЖАЛЮЗИ ЭКО-Z", color: "RAL8019/8019 ТЕМНЫЙ ШОКОЛАД", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-2.png", alt: "ЖАЛЮЗИ ЭКО-Z RAL8019/8019 ТЕМНЫЙ ШОКОЛАД" },
      { id: "eco-z-3", title: "ЖАЛЮЗИ ЭКО-Z", color: "RAL7024/7024 СЕРЫЙ ГРАФИТ", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-3.png", alt: "ЖАЛЮЗИ ЭКО-Z RAL7024/7024 СЕРЫЙ ГРАФИТ" },
      { id: "eco-z-4", title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)", color: "RAL8019/8019 ТЕМНЫЙ ШОКОЛАД", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-4.png", alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ) RAL8019/8019 ТЕМНЫЙ ШОКОЛАД" },
      { id: "eco-z-5", title: "ЖАЛЮЗИ ЭКО-Z", color: "RAL9003/9003 БЕЛЫЙ", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-5.png", alt: "ЖАЛЮЗИ ЭКО-Z RAL9003/9003 БЕЛЫЙ" },
      { id: "eco-z-6", title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)", color: "RAL9003/9003 БЕЛЫЙ", extra: "ДВУСТОРОННИЙ МАТТЕ", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-6.png", alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ) RAL9003/9003 БЕЛЫЙ" },
      { id: "eco-z-7", title: "ЖАЛЮЗИ ЭКО-Z", color: "ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-7.png", alt: "ЖАЛЮЗИ ЭКО-Z, МЕТАЛЛОПЛАНКЕН ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)" },
      { id: "eco-z-8", title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)", color: "ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-8.png", alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ), МЕТАЛЛОПЛАНКЕН ЧЕРНОЕ ДЕРЕВО 3D (ПРИНТЕК)" },
      { id: "eco-z-9", title: "ЖАЛЮЗИ ЭКО-Z", color: "ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-9.png", alt: "ЖАЛЮЗИ ЭКО-Z, МЕТАЛЛОПЛАНКЕН ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)" },
      { id: "eco-z-10", title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)", color: "ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-10.png", alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ), МЕТАЛЛОПЛАНКЕН ТЕМНЫЙ ДУБ 3D (ПРИНТЕК)" },
      { id: "eco-z-11", title: "ЖАЛЮЗИ ЭКО-Z", color: "АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-11.png", alt: "ЖАЛЮЗИ ЭКО-Z, МЕТАЛЛОПЛАНКЕН АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)" },
      { id: "eco-z-12", title: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ)", color: "АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)", price: "Цена 188 руб п/м", image: "/images/fences/eco-z/product-12.png", alt: "ЖАЛЮЗИ ЭКО-Z-US (УСИЛЕННЫЕ), МЕТАЛЛОПЛАНКЕН АНТИЧНОЕ ДЕРЕВО 3D (ПРИНТЕК)" },
    ],
  },

  "high-tech": {
    kind: "catalog",
    description:
      "Минималистичный и технологичный забор для строгой современной архитектуры.",
    specs: [
      "Рекомендуемое количество: 8 шт на 1 погонный метр высоты",
      "Расстояние между ламелями: 120 мм",
      "Рёбра жёсткости: 6 шт",
      "Высота: 120 мм (завальцовка)",
      "Длина: любая по размерам кратно 10 мм",
      "Крепление:",
      "Боковая планка: 57×37 мм",
      "Верхняя планка: 60×37 мм",
      "Цена: от 161 руб за погонный метр (в зависимости от покрытия)",
    ],
    products: [
      { id: "high-tech-1", title: "Жалюзи хай-тек", color: "RAL9005/9005 черный", extra: "двусторонний матте", price: "241 руб/п.м", image: "/images/fences/high-tech/product-1.png", alt: "Жалюзи хай-тек RAL9005/9005 черный" },
      { id: "high-tech-2", title: "Жалюзи хай-тек", color: "RAL9005/9005 черный", extra: "двусторонний матте", price: "241 руб/п.м", image: "/images/fences/high-tech/product-2.png", alt: "Жалюзи хай-тек RAL9005/9005 черный" },
      { id: "high-tech-3", title: "Жалюзи хай-тек", color: "RAL8017/8017 шоколад", extra: "двусторонний матте", price: "241 руб/п.м", image: "/images/fences/high-tech/product-3.png", alt: "Жалюзи хай-тек RAL8017/8017 шоколад" },
      { id: "high-tech-4", title: "Жалюзи хай-тек", color: "RAL8019/8019 темный шоколад", extra: "двусторонний матте", price: "241 руб/п.м", image: "/images/fences/high-tech/product-4.png", alt: "Жалюзи хай-тек RAL8019/8019 темный шоколад" },
      { id: "high-tech-5", title: "Жалюзи хай-тек", color: "RAL7024/7024 серый графит", extra: "двусторонний матте", price: "241 руб/п.м", image: "/images/fences/high-tech/product-5.png", alt: "Жалюзи хай-тек RAL7024/7024 серый графит" },
      { id: "high-tech-6", title: "Жалюзи хай-тек", color: "RAL7024/7024 серый графит", extra: "двусторонний матте", price: "241 руб/п.м", image: "/images/fences/high-tech/product-6.png", alt: "Жалюзи хай-тек RAL7024/7024 серый графит" },
    ],
  },

  resnichki: {
    kind: "catalog",
    description:
      "Выразительный вариант забора с современной геометрией и чистым силуэтом.",
    specs: [
      "Рекомендуемое количество: 9 шт на 1 погонный метр высоты",
      "Расстояние между ламелями: 100 мм",
      "Рёбра жёсткости: 7 шт",
      "Высота: 115 мм (завальцовка)",
      "Длина: любая по размерам кратно 10 мм",
      "Крепление:",
      "Боковая планка: 57×37 мм",
      "Верхняя планка: 60×37 мм",
      "Цена: от 226 руб за погонный метр (в зависимости от покрытия)",
    ],
    products: [
      { id: "resnichki-1", title: "ЖАЛЮЗИ РЕСНИЧКИ", color: "RAL9003 БЕЛЫЙ", extra: "ПОЛИЭСТЕР", price: "Цена: 226 руб/п.м", image: "/images/fences/resnichki/product-1.png", alt: "Жалюзи Реснички RAL9003 белый полиэстер" },
      { id: "resnichki-2", title: "ЖАЛЮЗИ РЕСНИЧКИ", color: "RAL8019 ТЁМНЫЙ ШОКОЛАД", extra: "МАТОВЫЙ", price: "Цена: 281 руб/п.м", image: "/images/fences/resnichki/product-2.png", alt: "Жалюзи Реснички RAL8019 тёмный шоколад матовый" },
      { id: "resnichki-3", title: "ЖАЛЮЗИ РЕСНИЧКИ", color: "RAL7024 СЕРЫЙ ГРАФИТ", extra: "МАТОВЫЙ", price: "Цена: 281 руб/п.м", image: "/images/fences/resnichki/product-3.png", alt: "Жалюзи Реснички RAL7024 серый графит матовый" },
    ],
  },

  gitter: {
    kind: "detailed",
    description:
      "Забор с высокой степенью защиты и эстетичным внешним видом, используется для ограждения частных территорий, промышленных зон, спортивных объектов.",
    products: [
      { id: "gitter-1", title: "3D сетка Гиттер", diameter: "3.2 мм", size: "1.53×2.5", coating: "оцинкованная", cell: "200×55 мм", rodDiameter: "3.0 мм (Zn); 3.2 мм (Zn + ПП)", colors: ["RAL6005 Зеленый мох"], additional: "Панель 3D ЦИНК по запросу", price: "1350 руб" },
      { id: "gitter-2", title: "3D сетка Гиттер", diameter: "3.2 мм", size: "1.73×2.5", coating: "оцинкованная", cell: "200×55 мм", rodDiameter: "3.0 мм (Zn); 3.2 мм (Zn + ПП)", colors: ["RAL6005 Зеленый мох"], additional: "Панель 3D ЦИНК по запросу", price: "1500 руб" },
      { id: "gitter-3", title: "3D сетка Гиттер", diameter: "3.2 мм", size: "2.03×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.0 мм (Zn); 3.2 мм (Zn + ПП)", colors: ["RAL6005 Зеленый мох"], additional: "Панель 3D ЦИНК по запросу", price: "1700 руб" },
      { id: "gitter-4", title: "3D сетка Гиттер", diameter: "3.5 мм", size: "1.03×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.3 мм (Zn); 3.5 мм (Zn + ПП)", colors: ["RAL6005"], price: "1200 руб" },
      { id: "gitter-5", title: "3D сетка Гиттер", diameter: "3.5 мм", size: "1.53×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.3 мм (Zn); 3.5 мм (Zn + ПП)", colors: ["RAL6005", "RAL8017", "RAL7024"], additional: "Панель 3D ЦИНК по запросу", price: "1700 руб" },
      { id: "gitter-6", title: "3D сетка Гиттер", diameter: "3.5 мм", size: "1.73×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.3 мм (Zn); 3.5 мм (Zn + ПП)", colors: ["RAL6005", "RAL8017", "RAL7024"], additional: "Панель 3D ЦИНК по запросу", price: "1900 руб" },
      { id: "gitter-7", title: "3D сетка Гиттер", diameter: "3.5 мм", size: "2.03×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.3 мм (Zn); 3.5 мм (Zn + ПП)", colors: ["RAL6005", "RAL8017", "RAL7024"], additional: "Панель 3D ЦИНК по запросу", price: "2200 руб" },
      { id: "gitter-8", title: "3D сетка Гиттер", diameter: "4 мм", size: "1.03×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.8 мм (Zn); 4 мм (Zn + ПП)", colors: ["RAL6005 Зеленый мох"], additional: "Панель 3D ЦИНК по запросу", price: "1500 руб" },
      { id: "gitter-9", title: "3D сетка Гиттер", diameter: "4 мм", size: "1.53×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.8 мм (Zn); 4 мм (Zn + ПП)", colors: ["RAL6005", "RAL8017", "RAL7024"], additional: "Панель 3D ЦИНК по запросу", price: "2100 руб" },
      { id: "gitter-10", title: "3D сетка Гиттер", diameter: "4 мм", size: "1.73×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.8 мм (Zn); 4 мм (Zn + ПП)", colors: ["RAL6005", "RAL8017", "RAL7024"], additional: "Панель 3D ЦИНК по запросу", price: "2300 руб" },
      { id: "gitter-11", title: "3D сетка Гиттер", diameter: "4 мм", size: "2.03×2.5", coating: "оцинкованная в полимерном покрытии", cell: "200×55 мм", rodDiameter: "3.8 мм (Zn); 4 мм (Zn + ПП)", colors: ["RAL6005", "RAL8017", "RAL7024", "RAL7024"], additional: "Панель 3D ЦИНК по запросу", price: "2600 руб" },
    ],
  },

  "grass-fence": {
    kind: "catalog",
    description:
      "Современное решение для создания уюта и приватности на вашем участке.",
    products: [
      { id: "grass-fence-1", title: "Травяной забор Grass Fence", color: "2x5 м", extra: "Монтажная стяжка в комплекте, гарантия 10 лет", price: "17 000 руб", image: "/images/fences/grass/product-1.png", alt: "Травяной забор Grass Fence 2x5 м" },
      { id: "grass-fence-2", title: "Травяной забор Grass Fence", color: "2x10 м", extra: "Монтажная стяжка в комплекте, гарантия 10 лет", price: "34 000 руб", image: "/images/fences/grass/product-2.png", alt: "Травяной забор Grass Fence 2x10 м" },
    ],
  },

  siding: {
    kind: "catalog",
    description: "Высокопрочный и практичный вид забора, имеющий привлекательный дизайн.",
    products: [
      { id: "siding-1", title: "Забор из металлического сайдинга", color: "Темный каштан 3D (Printech)", extra: "текстурированное покрытие под дерево, Евро-брус", price: "438 руб/п.м", image: "/images/fences/siding/product-1.png", alt: "Забор из металлического сайдинга Темный каштан 3D Printech" },
      { id: "siding-2", title: "Забор из металлического сайдинга", color: "Античное дерево (Printech)", extra: "текстурированное покрытие под дерево, Евро-брус", price: "438 руб/п.м", image: "/images/fences/siding/product-2.png", alt: "Забор из металлического сайдинга Античное дерево Printech" },
      { id: "siding-3", title: "Забор из металлического сайдинга", color: "Клен светлый (SteelArt), темное дерево (Printech)", extra: "текстурированное покрытие под дерево, Евро-брус", price: "438 руб/п.м", image: "/images/fences/siding/product-3.png", alt: "Забор из металлического сайдинга Клен светлый SteelArt темное дерево Printech" },
    ],
  },

  "metal-planken-rancho": {
    kind: "catalog",
    description:
      "Забор в стиле «ранчо», имитирует классическую американскую изгородь, имеет повышенную надёжность и жёсткость конструкции и придаёт солидность, ограждаемой территории.",
    products: [
      { id: "rancho-1", title: "Забор-ранчо из металлического планкена", color: "RAL7024 серый графит", extra: "матте", price: "429 руб/п.м", image: "/images/fences/metall/product-1.png", alt: "Забор-ранчо из металлического планкена RAL7024 серый графит матте" },
      { id: "rancho-2", title: "Забор-ранчо из металлического планкена", color: "RAL8019 горький шоколад", extra: "матте", price: "429 руб/п.м", image: "/images/fences/metall/product-2.png", alt: "Забор-ранчо из металлического планкена RAL8019 горький шоколад матте" },
      { id: "rancho-3", title: "Забор-ранчо из металлического планкена", color: "RAL7024 серый графит", extra: "матте", price: "429 руб/п.м", image: "/images/fences/metall/product-3.png", alt: "Забор-ранчо из металлического планкена RAL7024 серый графит матте" },
      { id: "rancho-4", title: "Забор-ранчо из металлического планкена", color: "RAL7024 серый графит", extra: "полиэстер", price: "288 руб/п.м", image: "/images/fences/metall/product-4.png", alt: "Забор-ранчо из металлического планкена RAL7024 серый графит полиэстер" },
      { id: "rancho-5", title: "Забор-ранчо из металлического планкена", color: "RAL1015 слоновая кость + RAL8017 шоколад", extra: "полиэстер", price: "288 руб/п.м", image: "/images/fences/metall/product-5.png", alt: "Забор-ранчо из металлического планкена RAL1015 слоновая кость + RAL8017 шоколад полиэстер" },
      { id: "rancho-6", title: "Ограждение из металлического планкена", color: "RAL7024 серый графит", extra: "матте", price: "429 руб/п.м", image: "/images/fences/metall/product-6.png", alt: "Ограждение из металлического планкена RAL7024 серый графит матте" },
    ],
  },

  "euro-shaketnik": {
    kind: "catalog",
    description:
      "Проветриваемый забор, для частных домов, участков и полисадников, хорошо пропускает свет, можно экспериментировать с цветом, и геометрией построения.",
    products: [
      { id: "euro-shaketnik-1", title: "Евроштакетник полукруглый фигурный 110 мм", color: "RAL8019 темный шоколад", extra: "матте", price: "155 руб/п.м", image: "/images/fences/euro-stacketnick/product-1.png", alt: "Евроштакетник полукруглый фигурный 110 мм RAL8019 темный шоколад матте" },
      { id: "euro-shaketnik-2", title: "Евроштакетник полукруглый фигурный 110 мм", color: "RAL9005/9005 черный", extra: "матте, двусторонний", price: "188 руб/п.м", image: "/images/fences/euro-stacketnick/product-2.png", alt: "Евроштакетник полукруглый фигурный 110 мм RAL9005/9005 черный матте двусторонний" },
      { id: "euro-shaketnik-3", title: "Евроштакетник полукруглый фигурный 110 мм", color: "RAL8017/8017 шоколад", extra: "шахматка + горкой, двусторонний матте", price: "188 руб/п.м", image: "/images/fences/euro-stacketnick/product-3.png", alt: "Евроштакетник полукруглый фигурный 110 мм RAL8017/8017 шоколад шахматка + горкой двусторонний матте" },
      { id: "euro-shaketnik-4", title: "Евроштакетник полукруглый фигурный 110 мм", color: "принт орех (Printech)", extra: "ранчо-шахматка, двусторонний", price: "228 руб/п.м", image: "/images/fences/euro-stacketnick/product-4.png", alt: "Евроштакетник полукруглый фигурный 110 мм принт орех Printech ранчо-шахматка двусторонний" },
      { id: "euro-shaketnik-5", title: "Евроштакетник полукруглый фигурный 110 мм", color: "RAL9003/9003 белый", extra: "двусторонний полиэстер", price: "155 руб/п.м", image: "/images/fences/euro-stacketnick/product-5.png", alt: "Евроштакетник полукруглый фигурный 110 мм RAL9003/9003 белый двусторонний полиэстер" },
      { id: "euro-shaketnik-6", title: "Евроштакетник ЭКО-М 95 мм", color: "RAL6005/6005 зеленый мох", extra: "двусторонний", price: "127 руб/п.м", image: "/images/fences/euro-stacketnick/product-6.png", alt: "Евроштакетник ЭКО-М 95 мм RAL6005/6005 зеленый мох двусторонний" },
    ],
  },

  "accessories/caps": {
    kind: "catalog",
    compactImages: true,
    description:
      "Защитные и декоративные колпаки, создают законченный вид забора, решения с подсветкой, премиально выделят вашу территорию, в тёмное время суток.",
    products: [
      { id: "modena-lantern-small", title: "Колпак Модена под фонарь", color: "385×385 мм (1.5 кирпича)", extra: "с декоративным элементом", price: "2000 руб", image: "/images/fences/caps/product-1.png", alt: "Колпак Модена под фонарь 385×385 мм" },
      { id: "modena-lantern-large", title: "Колпак Модена под фонарь (большой)", color: "515×515 мм (2 кирпича)", extra: "с декоративным элементом", price: "3200 руб", image: "/images/fences/caps/product-2.png", alt: "Колпак Модена под фонарь 515×515 мм" },
      { id: "modena-ball", title: "Колпак Модена с шаром", color: "515×515 мм (2 кирпича)", extra: "с декоративным шаром", price: "3000 руб", image: "/images/fences/caps/product-3.png", alt: "Колпак Модена с шаром 515×515 мм" },
      { id: "modena-ball-small", title: "Колпак Модена с шаром (малый)", color: "385×385 мм (1.5 кирпича)", extra: "с декоративным шаром", price: "2500 руб", image: "/images/fences/caps/product-4.png", alt: "Колпак Модена с шаром 385×385 мм" },
      { id: "modena-classic-large", title: "Колпак Модена классический", color: "515×515 мм (2 кирпича)", extra: "классический дизайн", price: "2700 руб", image: "/images/fences/caps/product-5.png", alt: "Колпак Модена классический 515×515 мм" },
      { id: "modena-classic-medium", title: "Колпак Модена классический", color: "385×515 мм", extra: "классический дизайн", price: "2200 руб", image: "/images/fences/caps/product-6.png", alt: "Колпак Модена классический 385×515 мм" },
      { id: "modena-classic-small", title: "Колпак Модена классический", color: "385×385 мм (1.5 кирпича)", extra: "классический дизайн", price: "1600 руб", image: "/images/fences/caps/product-7.png", alt: "Колпак Модена классический 385×385 мм" },
      { id: "modena-classic-euro", title: "Колпак Модена классический", color: "350×350 мм (евроформат)", extra: "классический дизайн", price: "1400 руб", image: "/images/fences/caps/product-8.png", alt: "Колпак Модена классический 350×350 мм" },
      { id: "modena-light-large", title: "Модена с подсветкой", color: "515×515 мм (2 кирпича)", extra: "со встроенной подсветкой", price: "8300 руб", image: "/images/fences/caps/product-9.png", alt: "Модена с подсветкой 515×515 мм" },
      { id: "modena-light-medium", title: "Модена с подсветкой", color: "385×515 мм", extra: "со встроенной подсветкой", price: "5700 руб", image: "/images/fences/caps/product-10.png", alt: "Модена с подсветкой 385×515 мм" },
      { id: "modena-light-small", title: "Модена с подсветкой", color: "385×385 мм (1.5 кирпича)", extra: "со встроенной подсветкой", price: "4000 руб", image: "/images/fences/caps/product-11.png", alt: "Модена с подсветкой 385×385 мм" },
      { id: "modena-light-small-v2", title: "Модена с подсветкой", color: "385×515 мм", extra: "со встроенной подсветкой", price: "4500 руб", image: "/images/fences/caps/product-12.png", alt: "Модена с подсветкой 385×515 мм v2" },
      { id: "modena-premium", title: "Колпак Модена Премиум", color: "515×515 мм (2 кирпича)", extra: "премиум серия", price: "3000 руб", image: "/images/fences/caps/product-13.png", alt: "Колпак Модена Премиум" },
      { id: "modena-premium-light", title: "Колпак Модена Премиум с подсветкой", color: "515×515 мм (2 кирпича)", extra: "премиум серия, со встроенной подсветкой", price: "5700 руб", image: "/images/fences/caps/product-14.png", alt: "Колпак Модена Премиум с подсветкой" },
      { id: "everest-pike", title: "Колпак Эверест с пикой", color: "300×300 мм (1.5 кирпича)", extra: "с декоративной пикой", price: "1700 руб", image: "/images/fences/caps/product-15.png", alt: "Колпак Эверест с пикой" },
      { id: "everest-lantern", title: "Колпак Эверест под фонарь", color: "515×515 мм (2 кирпича)", extra: "под фонарь", price: "2300 руб", image: "/images/fences/caps/product-16.png", alt: "Колпак Эверест под фонарь" },
      { id: "everest-lantern-small", title: "Эверест под фонарь", color: "385×385 мм (1.5 кирпича)", extra: "под фонарь", price: "1300 руб", image: "/images/fences/caps/product-17.png", alt: "Эверест под фонарь 385×385 мм" },
      { id: "everest-pike-large", title: "Эверест с пикой", color: "515×515 мм (2 кирпича)", extra: "с декоративной пикой", price: "2500 руб", image: "/images/fences/caps/product-18.png", alt: "Эверест с пикой 515×515 мм" },
      { id: "everest-classic-large", title: "Эверест классический", color: "515×515 мм (2 кирпича)", extra: "классический дизайн", price: "1800 руб", image: "/images/fences/caps/product-19.png", alt: "Эверест классический 515×515 мм" },
      { id: "everest-classic-large-v2", title: "Эверест классический", color: "520×520 мм", extra: "классический дизайн", price: "1800 руб", image: "/images/fences/caps/product-20.png", alt: "Эверест классический 520×520 мм" },
      { id: "everest-classic-small", title: "Эверест классический", color: "300×300 мм (1.5 кирпича)", extra: "классический дизайн", price: "1000 руб", image: "/images/fences/caps/product-21.png", alt: "Эверест классический 300×300 мм" },
      { id: "box-classic-small", title: "Бокс классический", color: "385×385 мм (1.5 кирпича)", extra: "классический дизайн", price: "1700 руб", image: "/images/fences/caps/product-22.png", alt: "Бокс классический 385×385 мм" },
      { id: "box-classic-large", title: "Бокс классический", color: "515×515 мм (2 кирпича)", extra: "классический дизайн", price: "4300 руб", image: "/images/fences/caps/product-23.png", alt: "Бокс классический 515×515 мм" },
      { id: "box-bonano-small", title: "Бокс БОНАНО", color: "385×385 мм / 400×400 мм", extra: "экономичный вариант", price: "800 руб", image: "/images/fences/caps/product-24.png", alt: "Бокс БОНАНО 385×385 мм" },
      { id: "box-bonano-large", title: "БОНАНО", color: "515×515 мм / 530×530 мм", extra: "экономичный вариант", price: "1500 руб", image: "/images/fences/caps/product-25.png", alt: "БОНАНО 515×515 мм" },
      { id: "box-light-small", title: "Бокс с подсветкой", color: "385×385 мм (1.5 кирпича)", extra: "со встроенной подсветкой", price: "6000 руб", image: "/images/fences/caps/product-26.png", alt: "Бокс с подсветкой 385×385 мм" },
      { id: "box-light-large", title: "Бокс с подсветкой", color: "515×515 мм (2 кирпича)", extra: "со встроенной подсветкой", price: "8000 руб", image: "/images/fences/caps/product-27.png", alt: "Бокс с подсветкой 515×515 мм" },
      { id: "box-ball-small", title: "Бокс с шаром", color: "385×385 мм / 400×400 мм", extra: "с декоративным шаром", price: "1800 руб", image: "/images/fences/caps/product-28.png", alt: "Бокс с шаром 385×385 мм" },
      { id: "elbrus-classic-small", title: "Эльбрус классический", color: "385×385 мм (1.5 кирпича)", extra: "классический дизайн", price: "1200 руб", image: "/images/fences/caps/product-29.png", alt: "Эльбрус классический 385×385 мм" },
      { id: "elbrus-classic-large", title: "Эльбрус классический", color: "520×520 мм (2 кирпича)", extra: "классический дизайн", price: "2000 руб", image: "/images/fences/caps/product-30.png", alt: "Эльбрус классический 520×520 мм" },
      { id: "elbrus-light-small", title: "Эльбрус с подсветкой", color: "385×385 мм (1.5 кирпича)", extra: "со встроенной подсветкой", price: "4000 руб", image: "/images/fences/caps/product-31.png", alt: "Эльбрус с подсветкой 385×385 мм" },
      { id: "elbrus-light-large", title: "Эльбрус с подсветкой", color: "520×520 мм (2 кирпича)", extra: "со встроенной подсветкой", price: "5300 руб", image: "/images/fences/caps/product-32.png", alt: "Эльбрус с подсветкой 520×520 мм" },
    ],
  },

  "accessories/parapets": {
    kind: "catalog",
    compactImages: true,
    description:
      "Парапеты для защиты и эстетичного завершения горизонтальных поверхностей забора.",
    products: [
      { id: "monblan-1-brick", title: "Парапет Монблан", color: "255×510 мм (1 кирпич)", extra: "серия Монблан", price: "800 руб", image: "/images/fences/parapets/product-1.png", alt: "Парапет Монблан 255×510 мм" },
      { id: "monblan-half-brick", title: "Парапет Монблан", color: "130×510 мм (0.5 кирпича)", extra: "серия Монблан", price: "500 руб", image: "/images/fences/parapets/product-2.png", alt: "Парапет Монблан 130×510 мм" },
      { id: "monblan-1-5-brick", title: "Парапет Монблан", color: "385×510 мм (1.5 кирпича)", extra: "серия Монблан", price: "900 руб", image: "/images/fences/parapets/product-3.png", alt: "Парапет Монблан 385×510 мм" },
      { id: "everest-1-brick", title: "Парапет Эверест", color: "200/225/250 мм (1 кирпич)", extra: "серия Эверест, вариативная ширина", price: "700 руб", image: "/images/fences/parapets/product-4.png", alt: "Парапет Эверест 200/225/250 мм" },
      { id: "everest-half-brick", title: "Парапет Эверест", color: "130×510 мм (0.5 кирпича)", extra: "серия Эверест", price: "400 руб", image: "/images/fences/parapets/product-5.png", alt: "Парапет Эверест 130×510 мм" },
      { id: "bona-1-brick", title: "Парапет Бона", color: "255×510 мм (1 кирпич)", extra: "серия Бона", price: "800 руб", image: "/images/fences/parapets/product-6.png", alt: "Парапет Бона 255×510 мм" },
      { id: "bona-half-brick", title: "Парапет Бона", color: "130×510 мм (0.5 кирпича)", extra: "серия Бона", price: "500 руб", image: "/images/fences/parapets/product-7.png", alt: "Парапет Бона 130×510 мм" },
      { id: "elbrus-1-brick", title: "Парапет Эльбрус", color: "255×510 мм (1 кирпич)", extra: "серия Эльбрус", price: "700 руб", image: "/images/fences/parapets/product-8.png", alt: "Парапет Эльбрус 255×510 мм" },
      { id: "elbrus-half-brick", title: "Парапет Эльбрус", color: "130×510 мм (0.5 кирпича)", extra: "серия Эльбрус", price: "500 руб", image: "/images/fences/parapets/product-9.png", alt: "Парапет Эльбрус 130×510 мм" },
      { id: "elbrus-220", title: "Парапет Эльбрус", color: "220 мм", extra: "серия Эльбрус", price: "800 руб", image: "/images/fences/parapets/product-10.png", alt: "Парапет Эльбрус 220 мм" },
      { id: "paraphet-11", title: "Парапет", color: "Универсальный", extra: "стандартный размер", price: "700 руб", image: "/images/fences/parapets/product-11.png", alt: "Парапет универсальный" },
      { id: "paraphet-12", title: "Парапет", color: "Универсальный", extra: "стандартный размер", price: "800 руб", image: "/images/fences/parapets/product-12.png", alt: "Парапет универсальный" },
    ],
  },

  "step-pavers": {
    kind: "catalog",
    compactImages: true,
    description:
      "Функциональный элемент благоустройства для удобных и аккуратных дорожек на участке.",
    products: [
      { id: "step-pavers-black-slate", title: "Шаговые плиты", color: "Черный Сланец", extra: "990×330×55 мм, полимерно-песчаный композит, коллекция STONE", price: "1400 руб", image: "/images/fences/step-pavers/product-1.png", alt: "Шаговые плиты Черный Сланец" },
      { id: "step-pavers-light-pebble", title: "Шаговые плиты", color: "Светлая Галька", extra: "990×330×55 мм, полимерно-песчаный композит, коллекция STONE", price: "1400 руб", image: "/images/fences/step-pavers/product-2.png", alt: "Шаговые плиты Светлая Галька" },
      { id: "step-pavers-graphite-grey", title: "Шаговые плиты", color: "Графитовый Серый", extra: "990×330×55 мм, полимерно-песчаный композит, коллекция STONE", price: "1400 руб", image: "/images/fences/step-pavers/product-3.png", alt: "Шаговые плиты Графитовый Серый" },
    ],
  },
};

export const seedPrices: PriceRow[] = [
  { name: "Еврожалюзи", price: "от 132 руб/п.м", href: "/fences/euro-jalusi/", colors: "RAL8017, RAL8019, RAL7024, принтек" },
  { name: "Жалюзи ЭКО-Z", price: "от 188 руб/п.м", href: "/fences/eco-z/", colors: "RAL7024, RAL8019, RAL9003, принтек" },
  { name: "Жалюзи ЭКО-Z US (усиленные)", price: "от 188 руб/п.м", href: "/fences/eco-z/", colors: "RAL7024, RAL8019, RAL9003, принтек" },
  { name: "Жалюзи Реснички", price: "от 188 руб/п.м", href: "/fences/resnichki/", colors: "RAL9003, RAL8019, RAL7024" },
  { name: "Жалюзи Хай-Тек", price: "от 132 руб/п.м", href: "/fences/high-tech/", colors: "RAL8017, RAL8019, RAL7024, RAL9003" },
  { name: "Металлопланкен-ранчо", price: "от 160 руб/п.м", href: "/fences/metal-planken-rancho/", colors: "RAL8017, RAL8019, RAL7024, принтек" },
  { name: "Евроштакетник", price: "от 127 руб/п.м", href: "/fences/metal-planken-rancho/euro-shaketnik/", colors: "RAL8019, RAL9005, RAL8017, RAL9003, принтек" },
  { name: "Сайдинг", price: "от 160 руб/п.м", href: "/fences/siding/", colors: "RAL8017, RAL8019, RAL7024, RAL9003, принтек" },
  { name: "3D сетка Гиттер", price: "от 3 500 руб/секция", href: "/fences/gitter/", colors: "RAL6005, RAL7024, RAL9005, оцинкованная" },
  { name: "Травяной забор Grass Fence", price: "от 17 000 руб", href: "/fences/grass-fence/", colors: "Зелёный" },
  { name: "Колпаки на столбы ZKING", price: "от 800 руб", href: "/fences/accessories/caps/", colors: "Модена, Эверест, Бокс, Эльбрус" },
  { name: "Парапеты ZKING", price: "от 800 руб", href: "/fences/accessories/parapets/", colors: "Монблан, Эверест, Бона, Эльбрус" },
  { name: "Шаговые плиты", price: "1 400 руб", href: "/landscaping/step-pavers/", colors: "Чёрный Сланец, Светлая Галька, Графитовый Серый" },
];
