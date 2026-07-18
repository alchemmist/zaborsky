import { GEO } from "@/lib/geo";

// Базовые синонимы-связки под каждый раздел каталога.
// Отсюда динамически собираются поисковые фразы (город + намерения).
const BASE_TERMS: Record<string, string[]> = {
  "euro-jalusi": ["еврожалюзи", "забор жалюзи", "жалюзи для забора", "заборы жалюзи"],
  "eco-z": ["жалюзи ЭКО-Z", "забор жалюзи ЭКО-Z", "жалюзи для забора"],
  resnichki: ["жалюзи реснички", "забор жалюзи реснички"],
  "high-tech": ["жалюзи хай-тек", "забор жалюзи хай-тек"],
  "metal-planken-rancho": [
    "забор ранчо",
    "заборы ранчо",
    "забор из металлопланкена",
    "металлопланкен",
    "планкен для забора",
  ],
  "euro-shaketnik": [
    "евроштакетник",
    "металлический штакетник",
    "штакетник для забора",
    "стальной штакетник",
    "штакетник из металла",
  ],
  siding: ["металлический сайдинг", "сайдинг для забора", "забор из сайдинга"],
  gitter: ["3D сетка гиттер", "заборная сетка гиттер", "3D забор сетка"],
  "grass-fence": ["травяной забор", "искусственный забор Grass Fence", "зелёный забор"],
  gates: ["откатные ворота", "автоматические ворота", "ворота для забора"],
  "accessories/caps": ["колпаки на столбы", "колпаки для забора"],
  "accessories/parapets": ["парапеты на забор", "парапеты для столбов"],
  "step-pavers": ["шаговые плиты", "садовые плиты для дорожек"],
  "terrace-board": ["террасная доска ДПК", "террасная доска", "доска ДПК для террасы"],
};

function lower(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

export function buildKeywords(slug: string): string[] {
  const terms = BASE_TERMS[slug];
  if (!terms || terms.length === 0) return [];

  const phrases: string[] = [];
  for (const term of terms) {
    const t = lower(term);
    phrases.push(`${term} ${GEO.cityIn}`);
    phrases.push(`купить ${t} ${GEO.cityIn}`);
    phrases.push(`${term} под ключ`);
    phrases.push(`${term} с монтажом`);
    phrases.push(`${term} цена ${GEO.city}`);
    phrases.push(`${term} ${GEO.region}`);
  }
  // Пара связок с ближайшими городами — для окрестных населённых пунктов.
  const near = GEO.nearbyCities.slice(0, 2);
  for (const city of near) {
    phrases.push(`${terms[0]} ${city}`);
  }

  // Уникализируем и держим разумный лимит, чтобы не выглядело как спам.
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const p of phrases) {
    const key = p.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(p);
    }
  }
  return unique.slice(0, 24);
}
