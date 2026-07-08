import { promises as fs } from "fs";
import path from "path";
import { seedCatalog, seedPrices } from "@/lib/seed";
import type {
  CatalogData,
  CatalogSection,
  PriceRow,
  CatalogProduct,
  DetailedCatalogProduct,
} from "@/lib/types";

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");
const CATALOG_FILE = path.join(DATA_DIR, "catalog.json");
const PRICES_FILE = path.join(DATA_DIR, "prices.json");

async function readJson<T>(file: string, seed: T): Promise<T> {
  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    await writeJson(file, seed);
    return seed;
  }
}

async function writeJson<T>(file: string, data: T): Promise<void> {
  await fs.mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf8");
  await fs.rename(tmp, file);
}

export async function getCatalog(): Promise<CatalogData> {
  return readJson<CatalogData>(CATALOG_FILE, seedCatalog);
}

export async function getSection(slug: string): Promise<CatalogSection | null> {
  const catalog = await getCatalog();
  return catalog[slug] ?? null;
}

export async function getPrices(): Promise<PriceRow[]> {
  return readJson<PriceRow[]>(PRICES_FILE, seedPrices);
}

function randomId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`;
}

export async function upsertProduct(
  slug: string,
  product: CatalogProduct | DetailedCatalogProduct
): Promise<void> {
  const catalog = await getCatalog();
  const section = catalog[slug];
  if (!section) throw new Error(`Unknown section: ${slug}`);
  const list = section.products as (CatalogProduct | DetailedCatalogProduct)[];
  if (product.id) {
    const idx = list.findIndex((p) => p.id === product.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...product };
    } else {
      list.push(product);
    }
  } else {
    list.push({ ...product, id: randomId(slug.replace(/\W+/g, "-")) });
  }
  await writeJson(CATALOG_FILE, catalog);
}

export async function deleteProduct(slug: string, id: string): Promise<void> {
  const catalog = await getCatalog();
  const section = catalog[slug];
  if (!section) throw new Error(`Unknown section: ${slug}`);
  section.products = (section.products as { id: string }[]).filter(
    (p) => p.id !== id
  ) as CatalogSection["products"];
  await writeJson(CATALOG_FILE, catalog);
}

export async function updateSectionMeta(
  slug: string,
  patch: { description?: string; specs?: string[] }
): Promise<void> {
  const catalog = await getCatalog();
  const section = catalog[slug];
  if (!section) throw new Error(`Unknown section: ${slug}`);
  if (patch.description !== undefined) section.description = patch.description;
  if (patch.specs !== undefined) section.specs = patch.specs;
  await writeJson(CATALOG_FILE, catalog);
}

export async function savePrices(rows: PriceRow[]): Promise<void> {
  await writeJson(PRICES_FILE, rows);
}
