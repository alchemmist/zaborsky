type DevelopmentPageProps = {
  title?: string;
};

export function DevelopmentPage({ title = "В разработке" }: DevelopmentPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#5c7887] text-white">
      <div className="px-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.5em] text-white/70">
          ZABORSKY
        </p>
        <h1 className="mt-6 text-4xl font-semibold uppercase tracking-[0.22em] sm:text-5xl">
          {title}
        </h1>
      </div>
    </main>
  );
}
