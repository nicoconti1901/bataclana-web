export function QuoteSection() {
  return (
    <section className="px-4 py-20 md:px-6">
      <blockquote className="mx-auto max-w-3xl text-center">
        <p className="font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.08]">
          Aprendí de la vida, de la calle y de la noche.
        </p>
        <footer className="mt-6 text-[12px] uppercase tracking-[0.2em] text-[var(--page-muted)]">
          Roberto Goyeneche
        </footer>
      </blockquote>
    </section>
  );
}
