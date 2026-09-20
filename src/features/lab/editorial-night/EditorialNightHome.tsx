"use client";

import { motion } from "motion/react";
import type { HomeContent } from "@/lib/repositories/types";
import { formatEventWhen, levelLabel } from "@/lib/formatters";
import { useMotionSafe } from "@/lib/motion";
import { MediaPlaceholder } from "@/components/tango/MediaPlaceholder";

const sections = [
  { id: "evento", label: "Evento" },
  { id: "agenda", label: "Agenda" },
  { id: "clases", label: "Clases" },
  { id: "editorial", label: "Editorial" },
  { id: "hoy", label: "Hoy" },
  { id: "docentes", label: "Docentes" },
  { id: "contacto", label: "Contacto" },
] as const;

type Props = { content: HomeContent };

export function EditorialNightHome({ content }: Props) {
  const { organization, featuredEvent, upcomingEvents, classes, editorial, instructors } =
    content;
  const motionSafe = useMotionSafe();

  return (
    <div className="min-h-screen bg-[#070606] text-[#efe6d8] [font-family:var(--font-night-sans),system-ui,sans-serif]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-soft-light">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <aside className="fixed bottom-0 left-0 top-10 z-40 hidden w-16 flex-col items-center border-r border-white/10 pt-10 lg:flex">
        <p
          className="origin-center rotate-180 text-[11px] uppercase tracking-[0.35em] text-white/45 [writing-mode:vertical-rl]"
          style={{ fontFamily: "var(--font-night-display), serif" }}
        >
          {organization.name}
        </p>
        <nav
          aria-label="Secciones"
          className="mt-auto flex flex-col items-center gap-5 pb-8"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="origin-center rotate-180 text-[10px] uppercase tracking-[0.22em] text-white/40 transition hover:text-[#efe6d8] focus-visible:text-[#efe6d8] [writing-mode:vertical-rl]"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      <nav
        aria-label="Secciones móviles"
        className="sticky top-10 z-30 flex gap-4 overflow-x-auto border-b border-white/10 bg-[#070606]/95 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/50 lg:hidden"
      >
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="shrink-0 hover:text-[#efe6d8]">
            {section.label}
          </a>
        ))}
      </nav>

      <main className="relative lg:pl-16">
        <section className="grid min-h-[88vh] grid-cols-1 lg:grid-cols-12">
          <motion.div
            className="relative lg:col-span-7"
            {...motionSafe.fade}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {featuredEvent?.heroImage ? (
              <MediaPlaceholder
                slot={featuredEvent.heroImage}
                className="h-full min-h-[52vh] w-full lg:min-h-[88vh]"
                label="Lámina principal"
              />
            ) : (
              <div className="min-h-[52vh] bg-[#161311] lg:min-h-[88vh]" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070606] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#070606]/80" />
          </motion.div>

          <div className="flex flex-col justify-end px-5 py-10 sm:px-8 lg:col-span-5 lg:px-10 lg:py-16">
            <motion.div {...motionSafe.fadeUp}>
              <p className="text-[11px] uppercase tracking-[0.32em] text-[#c4a574]/80">
                {organization.city} · {organization.neighborhood}
              </p>
              <h1
                className="mt-4 text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-[#f7f0e4]"
                style={{ fontFamily: "var(--font-night-display), serif" }}
              >
                {organization.name}
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
                {organization.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {featuredEvent ? (
          <section id="evento" className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                  Próximo encuentro
                </p>
                <h2
                  className="mt-4 text-4xl leading-none tracking-tight sm:text-5xl"
                  style={{ fontFamily: "var(--font-night-display), serif" }}
                >
                  {featuredEvent.title}
                </h2>
              </div>
              <div className="space-y-6 lg:col-span-5 lg:col-start-6">
                <p className="text-sm uppercase tracking-[0.18em] text-[#c4a574]/90">
                  {formatEventWhen(featuredEvent.startsAt)}
                </p>
                <p className="max-w-md text-lg leading-relaxed text-white/70">
                  {featuredEvent.shortDescription}
                </p>
                <p className="text-sm text-white/45">
                  {featuredEvent.venueName}
                  {featuredEvent.venueAddress ? ` · ${featuredEvent.venueAddress}` : null}
                </p>
                {featuredEvent.priceLabel ? (
                  <p className="text-sm text-white/55">{featuredEvent.priceLabel}</p>
                ) : null}
                <a
                  href={featuredEvent.registrationUrl ?? "#contacto"}
                  className="inline-block border-b border-[#c4a574]/70 pb-1 text-sm tracking-wide text-[#efe6d8] transition hover:border-[#efe6d8]"
                >
                  {featuredEvent.registrationLabel ?? "Reservar"}
                </a>
              </div>
            </div>
          </section>
        ) : null}

        <section id="agenda" className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-16">
          <h2
            className="text-3xl tracking-tight"
            style={{ fontFamily: "var(--font-night-display), serif" }}
          >
            Agenda breve
          </h2>
          <ul className="mt-10 divide-y divide-white/10">
            {upcomingEvents.map((event) => (
              <li
                key={event.id}
                className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline"
              >
                <span className="text-xs uppercase tracking-[0.16em] text-white/40">
                  {formatEventWhen(event.startsAt)}
                </span>
                <span>
                  <span className="block text-lg text-[#f7f0e4]">{event.title}</span>
                  <span className="mt-1 block text-sm text-white/45">
                    {event.venueName} · {event.shortDescription}
                  </span>
                </span>
                <span className="text-xs text-white/35">{event.priceLabel}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="clases" className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <h2
              className="text-3xl lg:col-span-3"
              style={{ fontFamily: "var(--font-night-display), serif" }}
            >
              Clases
            </h2>
            <div className="columns-1 gap-10 sm:columns-2 lg:col-span-8 lg:col-start-5">
              {classes.map((item) => (
                <article key={item.id} className="mb-8 break-inside-avoid">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#c4a574]/80">
                    {levelLabel(item.level)}
                  </p>
                  <h3
                    className="mt-2 text-2xl"
                    style={{ fontFamily: "var(--font-night-display), serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    {item.weekday} · {item.timeLabel} · {item.venueName}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.shortDescription}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="editorial" className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-16">
          <h2
            className="text-3xl"
            style={{ fontFamily: "var(--font-night-display), serif" }}
          >
            Editorial
          </h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {editorial.map((piece, index) => (
              <article
                key={piece.id}
                className={index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-10" : ""}
              >
                {piece.heroImage ? (
                  <MediaPlaceholder slot={piece.heroImage} className="mb-5 w-full lg:mb-0" />
                ) : null}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {piece.byline} · {piece.publishedAt}
                  </p>
                  <h3
                    className="mt-3 text-3xl leading-tight"
                    style={{ fontFamily: "var(--font-night-display), serif" }}
                  >
                    {piece.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
                    {piece.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="hoy" className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-16">
          <blockquote
            className="mx-auto max-w-3xl text-center text-3xl leading-snug tracking-tight text-[#f7f0e4] sm:text-4xl"
            style={{ fontFamily: "var(--font-night-display), serif" }}
          >
            “{organization.statement}”
          </blockquote>
        </section>

        <section id="docentes" className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-16">
          <h2
            className="text-3xl"
            style={{ fontFamily: "var(--font-night-display), serif" }}
          >
            Docentes
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {instructors.map((person) => (
              <li key={person.id}>
                {person.portrait ? (
                  <MediaPlaceholder slot={person.portrait} className="mb-4 w-full" />
                ) : null}
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-night-display), serif" }}
                >
                  {person.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/40">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{person.bio}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer
          id="contacto"
          className="border-t border-white/10 px-5 py-14 sm:px-8 lg:px-16"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-2xl"
                style={{ fontFamily: "var(--font-night-display), serif" }}
              >
                {organization.name}
              </p>
              <p className="mt-2 text-sm text-white/45">{organization.addressHint}</p>
            </div>
            <div className="text-sm text-white/55">
              <a href={`mailto:${organization.email}`} className="block hover:text-[#efe6d8]">
                {organization.email}
              </a>
              <p className="mt-1">{organization.instagram}</p>
            </div>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-white/30">
            Contenido ficticio · Design Lab · Concepto A
          </p>
        </footer>
      </main>
    </div>
  );
}
