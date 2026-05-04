type CallToActionProps = {
  text: string;
  phoneNumber: string;
};

export function CallToActionSection({ text, phoneNumber }: CallToActionProps) {
  return (
    <section className="bg-gradient-to-r from-[#5c7887] to-[#6d8896] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-white sm:text-3xl lg:text-4xl leading-tight">
            {text}
          </h2>
          <a
            href={`tel:${phoneNumber.replace(/\D/g, '')}`}
            className="inline-block text-2xl font-bold text-white hover:text-white/80 transition duration-300 sm:text-3xl"
          >
            {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
