"use client";

import { motion } from "motion/react";
import type { HomeContent } from "@/lib/repositories/types";
import { formatEventWhen, levelLabel } from "@/lib/formatters";
import { useMotionSafe } from "@/lib/motion";
import { MediaPlaceholder } from "@/components/tango/MediaPlaceholder";

const indexItems = [
  { n: "01", href: "#lamina-evento", label: "Evento destacado" },
  { n: "02", href: "#linea-tiempo", label: "Línea de tiempo" },
  { n: "03", href: "#clases", label: "Clases" },
  { n: "04", href: "#dossier", label: "Dossier editorial" },
  { n: "05", href: "#nota", label: "Nota al margen" },
  { n: "06", href: "#retratos", label: "Retratos" },
  { n: "07", href: "#contacto", label: "Contacto" },
] as const;

type Props = { content: HomeContent };

export function ArchivoVivoHome({ content }: Props) {
  const { organization, featuredEvent, upcomingEvents, classes, editorial, instructors } =
    content;
  const { reduce } = useMotionSafe();

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7 },
      };

  return (
    <div className="min-h-screen bg-[#e7e1d4] text-[#1c1915] [font-family:var(--font-archive-sans),system-ui,sans-serif]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(28,25,21,0.06) 0.6px, transparent 0.6px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-0 lg:grid-cols-[14rem_1fr]">
        <aside className="border-[#1c1915]/20 px-4 pb-8 pt-14 lg:sticky lg:top-10 lg:h-[calc(100vh-2.5rem)] lg:border-r lg:py-14">
          <p
            className="text-[10px] uppercase tracking-[0.28em] text-[#1c1915]/55"
            style={{ fontFamily: "var(--font-archive-mono), monospace" }}
          >
            Índice · demo
          </p>
          <h1
            className="mt-4 text-3xl leading-none"
            style={{ fontFamily: "var(--font-archive-display), serif" }}
          >
            {organization.name}
          </h1>
          <p
            className="mt-3 text-[11px] leading-relaxed text-[#1c1915]/60"
            style={{ fontFamily: "var(--font-archive-mono), monospace" }}
          >
            Ficha cultural · {organization.city}
          </p>
          <nav aria-label="Índice del archivo" className="mt-8 space-y-3">
            {indexItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex gap-3 text-sm text-[#1c1915]/75 transition hover:text-[#1c1915]"
              >
                <span
                  className="text-[11px] text-[#8b1e1e]"
                  style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                >
                  {item.n}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <p
            className="mt-10 inline-block -rotate-2 border border-[#8b1e1e] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#8b1e1e]"
            style={{ fontFamily: "var(--font-archive-mono), monospace" }}
          >
            Archivo vivo
          </p>
        </aside>

        <main className="px-4 pb-20 pt-14 sm:px-8 lg:pt-14">
          <nav
            aria-label="Índice móvil"
            className="mb-8 flex gap-4 overflow-x-auto border-b border-[#1c1915]/20 pb-3 text-[11px] lg:hidden"
            style={{ fontFamily: "var(--font-archive-mono), monospace" }}
          >
            {indexItems.map((item) => (
              <a key={item.href} href={item.href} className="shrink-0 text-[#1c1915]/65">
                {item.n} {item.label}
              </a>
            ))}
          </nav>

          {featuredEvent ? (
            <motion.section id="lamina-evento" className="scroll-mt-24" {...fade}>
              <div className="flex items-baseline justify-between gap-4 border-b border-[#1c1915]/30 pb-2">
                <p
                  className="text-[11px] uppercase tracking-[0.2em] text-[#8b1e1e]"
                  style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                >
                  Lámina 01
                </p>
                <p
                  className="text-[11px] text-[#1c1915]/50"
                  style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                >
                  {formatEventWhen(featuredEvent.startsAt)}
                </p>
              </div>
              <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                {featuredEvent.heroImage ? (
                  <figure>
                    <MediaPlaceholder
                      slot={{ ...featuredEvent.heroImage, tone: "paper" }}
                      className="w-full border border-[#1c1915]/25"
                    />
                    <figcaption
                      className="mt-2 text-[11px] text-[#1c1915]/55"
                      style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                    >
                      Fig. A — {featuredEvent.heroImage.alt}
                    </figcaption>
                  </figure>
                ) : null}
                <div>
                  <h2
                    className="text-4xl leading-none sm:text-5xl"
                    style={{ fontFamily: "var(--font-archive-display), serif" }}
                  >
                    {featuredEvent.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-[#1c1915]/75">
                    {featuredEvent.shortDescription}
                  </p>
                  <aside
                    className="mt-6 border-l-2 border-[#8b1e1e] pl-4 text-[12px] leading-relaxed text-[#1c1915]/65"
                    style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                  >
                    Nota: {featuredEvent.venueName}
                    {featuredEvent.venueAddress ? ` · ${featuredEvent.venueAddress}` : ""}.{" "}
                    {featuredEvent.priceLabel}.
                  </aside>
                  <a
                    href="#contacto"
                    className="mt-8 inline-block border-b border-[#1c1915] pb-0.5 text-sm"
                  >
                    {featuredEvent.registrationLabel ?? "Solicitar lugar"}
                  </a>
                </div>
              </div>
            </motion.section>
          ) : null}

          <motion.section id="linea-tiempo" className="mt-20 scroll-mt-24" {...fade}>
            <div className="flex items-baseline justify-between border-b border-[#1c1915]/30 pb-2">
              <h2
                className="text-2xl"
                style={{ fontFamily: "var(--font-archive-display), serif" }}
              >
                Línea de tiempo
              </h2>
              <span
                className="text-[11px] text-[#8b1e1e]"
                style={{ fontFamily: "var(--font-archive-mono), monospace" }}
              >
                02
              </span>
            </div>
            <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
              {upcomingEvents.map((event, index) => (
                <article
                  key={event.id}
                  className="min-w-[220px] flex-1 border border-[#1c1915]/25 bg-[#efe9dc] p-4"
                >
                  <p
                    className="text-[10px] text-[#8b1e1e]"
                    style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                  >
                    {String(index + 1).padStart(2, "0")} · {formatEventWhen(event.startsAt)}
                  </p>
                  <h3
                    className="mt-3 text-xl leading-tight"
                    style={{ fontFamily: "var(--font-archive-display), serif" }}
                  >
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#1c1915]/65">{event.venueName}</p>
                  <p className="mt-2 text-sm text-[#1c1915]/75">{event.shortDescription}</p>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section id="clases" className="mt-20 scroll-mt-24" {...fade}>
            <div className="flex items-baseline justify-between border-b border-[#1c1915]/30 pb-2">
              <h2
                className="text-2xl"
                style={{ fontFamily: "var(--font-archive-display), serif" }}
              >
                Clases por nivel
              </h2>
              <span
                className="text-[11px] text-[#8b1e1e]"
                style={{ fontFamily: "var(--font-archive-mono), monospace" }}
              >
                03
              </span>
            </div>
            <ol className="mt-6 divide-y divide-[#1c1915]/15">
              {classes.map((item, index) => (
                <li key={item.id} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr_8rem]">
                  <span
                    className="text-[11px] text-[#1c1915]/45"
                    style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.16em] text-[#8b1e1e]"
                      style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                    >
                      {levelLabel(item.level)}
                    </p>
                    <h3
                      className="mt-1 text-xl"
                      style={{ fontFamily: "var(--font-archive-display), serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#1c1915]/65">
                      {item.weekday} · {item.timeLabel} · {item.venueName}
                    </p>
                    <p className="mt-2 text-sm text-[#1c1915]/75">{item.shortDescription}</p>
                  </div>
                  <p
                    className="text-sm sm:text-right"
                    style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                  >
                    {item.priceLabel}
                  </p>
                </li>
              ))}
            </ol>
          </motion.section>

          <motion.section id="dossier" className="mt-20 scroll-mt-24" {...fade}>
            <div className="flex items-baseline justify-between border-b border-[#1c1915]/30 pb-2">
              <h2
                className="text-2xl"
                style={{ fontFamily: "var(--font-archive-display), serif" }}
              >
                Dossier editorial
              </h2>
              <span
                className="text-[11px] text-[#8b1e1e]"
                style={{ fontFamily: "var(--font-archive-mono), monospace" }}
              >
                04
              </span>
            </div>
            <div className="mt-8 space-y-12">
              {editorial.map((piece, index) => (
                <article key={piece.id} className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                  {piece.heroImage ? (
                    <figure>
                      <MediaPlaceholder
                        slot={{ ...piece.heroImage, tone: "paper" }}
                        className="w-full border border-[#1c1915]/25"
                      />
                      <figcaption
                        className="mt-2 text-[11px] text-[#1c1915]/55"
                        style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                      >
                        Lámina {String(index + 2).padStart(2, "0")} · {piece.publishedAt}
                      </figcaption>
                    </figure>
                  ) : null}
                  <div>
                    <p
                      className="text-[11px] text-[#1c1915]/50"
                      style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                    >
                      {piece.byline} · {piece.taxonomy.join(" / ")}
                    </p>
                    <h3
                      className="mt-2 text-3xl leading-tight"
                      style={{ fontFamily: "var(--font-archive-display), serif" }}
                    >
                      {piece.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#1c1915]/75">
                      {piece.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.section id="nota" className="mt-20 scroll-mt-24" {...fade}>
            <div className="relative border border-dashed border-[#1c1915]/35 bg-[#efe9dc] p-6 sm:p-10">
              <p
                className="absolute -top-2 left-4 bg-[#e7e1d4] px-2 text-[10px] uppercase tracking-[0.18em] text-[#8b1e1e]"
                style={{ fontFamily: "var(--font-archive-mono), monospace" }}
              >
                05 · Nota al margen
              </p>
              <p
                className="text-2xl leading-snug sm:text-3xl"
                style={{ fontFamily: "var(--font-archive-display), serif" }}
              >
                {organization.statement}
              </p>
            </div>
          </motion.section>

          <motion.section id="retratos" className="mt-20 scroll-mt-24" {...fade}>
            <div className="flex items-baseline justify-between border-b border-[#1c1915]/30 pb-2">
              <h2
                className="text-2xl"
                style={{ fontFamily: "var(--font-archive-display), serif" }}
              >
                Retratos
              </h2>
              <span
                className="text-[11px] text-[#8b1e1e]"
                style={{ fontFamily: "var(--font-archive-mono), monospace" }}
              >
                06
              </span>
            </div>
            <ul className="mt-8 grid gap-8 sm:grid-cols-3">
              {instructors.map((person, index) => (
                <li key={person.id}>
                  {person.portrait ? (
                    <MediaPlaceholder
                      slot={{ ...person.portrait, tone: "warm" }}
                      className="mb-3 w-full border border-[#1c1915]/25"
                    />
                  ) : null}
                  <p
                    className="text-[10px] text-[#8b1e1e]"
                    style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                  >
                    Retrato {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="mt-1 text-xl"
                    style={{ fontFamily: "var(--font-archive-display), serif" }}
                  >
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#1c1915]/55">{person.role}</p>
                  <p className="mt-2 text-sm text-[#1c1915]/75">{person.bio}</p>
                </li>
              ))}
            </ul>
          </motion.section>

          <footer id="contacto" className="mt-20 scroll-mt-24 border-t border-[#1c1915]/30 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div>
                <p
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-archive-display), serif" }}
                >
                  {organization.name}
                </p>
                <p
                  className="mt-2 text-sm text-[#1c1915]/65"
                  style={{ fontFamily: "var(--font-archive-mono), monospace" }}
                >
                  {organization.addressHint}
                </p>
              </div>
              <div className="text-sm">
                <a href={`mailto:${organization.email}`} className="underline-offset-2 hover:underline">
                  {organization.email}
                </a>
                <p className="mt-1">{organization.instagram}</p>
              </div>
            </div>
            <p
              className="mt-8 text-[10px] uppercase tracking-[0.16em] text-[#1c1915]/45"
              style={{ fontFamily: "var(--font-archive-mono), monospace" }}
            >
              Contenido ficticio · Design Lab · Concepto D · 07
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
