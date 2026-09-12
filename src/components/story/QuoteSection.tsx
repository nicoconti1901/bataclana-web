export function QuoteSection() {
  return (
    <section className="px-4 py-20 md:px-6">
      <blockquote className="mx-auto max-w-3xl text-center">
        <p className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
          Pausa. Tensión. Movimiento. Pausa.
        </p>
        <footer className="mt-6 text-[12px] uppercase tracking-[0.2em] text-[var(--page-muted)]">
          La lógica de la pista
        </footer>
      </blockquote>
    </section>
  );
}
