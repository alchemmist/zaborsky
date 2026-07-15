export type CatalogProduct = {
  id: string;
  title: string;
  color: string;
  extra?: string;
  price: string;
  image: string;
  alt: string;
  hidden?: boolean;
};

export type DetailedCatalogProduct = {
  id: string;
  title: string;
  diameter: string;
  size: string;
  coating: string;
  cell: string;
  rodDiameter: string;
  colors: string[];
  additional?: string;
  price: string;
  hidden?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteSettings = {
  phone: string;
  email: string;
  heroTitle: string;
  heroSubtitle: string;
  faq: FaqItem[];
};

export type PriceRow = {
  name: string;
  price: string;
  href: string;
  colors: string;
};

export type CatalogSection = {
  kind: "catalog" | "detailed";
  description?: string;
  specs?: string[];
  compactImages?: boolean;
  products: CatalogProduct[] | DetailedCatalogProduct[];
};

export type CatalogData = Record<string, CatalogSection>;
