"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { HomeContent } from "@/lib/repositories/types";
import { formatEventWhen, levelLabel } from "@/lib/formatters";
import { useMotionSafe } from "@/lib/motion";
import { MediaPlaceholder } from "@/components/tango/MediaPlaceholder";

const links = [
  { href: "#acto-i", label: "Acto I" },
  { href: "#acto-ii", label: "Acto II" },
  { href: "#acto-iii", label: "Acto III" },
  { href: "#elenco", label: "Elenco" },
  { href: "#contacto", label: "Contacto" },
] as const;

type Props = { content: HomeContent };

export function ContemporaryStageHome({ content }: Props) {
  const { organization, featuredEvent, upcomingEvents, classes, editorial, instructors } =
    content;
  const { reduce } = useMotionSafe();
  const [menuOpen, setMenuOpen] = useState(false);

  const enter = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 56, scale: 0.985 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, amount: 0.35 },
        transition: {
          duration: 1.15,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0b0c] text-[#ece8e1] selection:bg-[#c9663d] selection:text-black [font-family:var(--font-stage-sans),system-ui,sans-serif]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(120,110,90,0.18),transparent_55%)]" />

      <header className="fixed inset-x-0 top-10 z-40 flex items-center justify-between px-6 py-6 mix-blend-difference sm:px-10">
        <p
          suppressHydrationWarning
          className="text-[11px] uppercase tracking-[0.35em] text-white/40"
        >
          {organization.name}
        </p>
        <div
          className="relative flex items-center justify-end gap-5"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          onFocus={() => setMenuOpen(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setMenuOpen(false);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
            }
          }}
        >
          <AnimatePresence>
            {menuOpen ? (
              <motion.nav
                id="stage-menu-desktop"
                aria-label="Escena"
                initial={reduce ? false : { opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: 10 }}
                className="hidden items-center gap-5 sm:flex"
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[10px] uppercase tracking-[0.2em] text-white/55 transition hover:text-white focus-visible:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.nav>
            ) : null}
          </AnimatePresence>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="stage-menu-desktop stage-menu-mobile"
            onClick={() => setMenuOpen(true)}
            className="text-[11px] uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
          >
            Menú
          </button>
          <AnimatePresence>
            {menuOpen ? (
              <motion.nav
                id="stage-menu-mobile"
                aria-label="Escena móvil"
                initial={reduce ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                className="absolute right-0 top-full mt-3 min-w-[10rem] bg-[#0b0b0c]/95 p-4 backdrop-blur-sm sm:hidden"
              >
                <ul className="space-y-3 text-[11px] uppercase tracking-[0.22em] text-white/60">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="hover:text-white"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </header>

      <main className="relative">
        <section className="relative flex min-h-[100svh] items-center justify-center px-6 text-center">
          <motion.p
            className="absolute left-6 top-[24%] z-20 max-w-28 text-left text-[10px] uppercase leading-5 tracking-[0.35em] text-white/35 sm:left-10"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 1.4 },
                })}
          >
            {organization.tagline}
          </motion.p>
          <motion.h1
            className="pointer-events-none absolute inset-x-0 top-1/2 z-20 -translate-y-1/2 text-[clamp(4.5rem,14vw,12rem)] leading-[0.72] tracking-[-0.06em]"
            style={{ fontFamily: "var(--font-stage-display), serif" }}
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 48 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
                })}
          >
            {organization.name}
          </motion.h1>
          <motion.div
            className="relative h-[62svh] w-[min(72vw,760px)] min-w-[270px] overflow-hidden rounded-[50%]"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 1.04 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 1.4, delay: 0.35 },
                })}
          >
            {featuredEvent?.heroImage ? (
              <div className="relative h-full overflow-hidden">
                <MediaPlaceholder
                  slot={{ ...featuredEvent.heroImage, tone: "stage", aspect: "wide" }}
                  className="h-full w-full !aspect-auto scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,rgba(11,11,12,0.55)_70%,rgba(11,11,12,0.92)_100%)]" />
              </div>
            ) : null}
          </motion.div>
        </section>

        {featuredEvent ? (
          <section id="acto-i" className="mx-auto flex min-h-[130svh] max-w-4xl items-center px-6 py-48 text-center">
            <motion.div {...enter}>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">Acto I</p>
              <h2
                className="mt-6 text-5xl leading-none tracking-tight sm:text-6xl"
                style={{ fontFamily: "var(--font-stage-display), serif" }}
              >
                {featuredEvent.title}
              </h2>
              <p
                suppressHydrationWarning
                className="mt-8 text-sm uppercase tracking-[0.22em] text-white/45"
              >
                {formatEventWhen(featuredEvent.startsAt)} · {featuredEvent.venueName}
              </p>
              <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-white/65">
                {featuredEvent.shortDescription}
              </p>
              <a
                href="#contacto"
                className="mt-10 inline-block text-sm tracking-[0.18em] uppercase text-white underline decoration-white/30 underline-offset-8 hover:decoration-white"
              >
                {featuredEvent.registrationLabel ?? "Reservar"}
              </a>
            </motion.div>
          </section>
        ) : null}

        <section className="mx-auto min-h-[100svh] max-w-2xl px-6 py-48">
          <motion.div {...enter}>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">Programa</p>
            <ul className="mt-12 space-y-10">
              {upcomingEvents.map((event) => (
                <li key={event.id} className="text-center">
                  <p
                    suppressHydrationWarning
                    className="text-xs uppercase tracking-[0.2em] text-white/35"
                  >
                    {formatEventWhen(event.startsAt)}
                  </p>
                  <h3
                    className="mt-3 text-3xl"
                    style={{ fontFamily: "var(--font-stage-display), serif" }}
                  >
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{event.venueName}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section id="acto-ii" className="min-h-[140svh] px-6 py-56">
          <motion.div className="mx-auto max-w-4xl" {...enter}>
            <p className="text-center text-[11px] uppercase tracking-[0.35em] text-white/35">
              Acto II · Clases
            </p>
            <div className="mt-16 space-y-16">
              {classes.map((item) => (
                <article key={item.id} className="grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[1fr_2fr]">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                    {levelLabel(item.level)}
                  </p>
                  <div>
                    <h3
                      className="text-4xl leading-none"
                      style={{ fontFamily: "var(--font-stage-display), serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm text-white/50">
                      {item.weekday} · {item.timeLabel} · {item.venueName}
                    </p>
                    <p className="mt-3 max-w-lg text-base text-white/65">
                      {item.shortDescription}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="acto-iii" className="min-h-[150svh] px-6 py-56">
          <motion.div className="mx-auto max-w-5xl" {...enter}>
            <p className="text-center text-[11px] uppercase tracking-[0.35em] text-white/35">
              Acto III · Lecturas
            </p>
            <div className="mt-32 space-y-56">
              {editorial.map((piece, index) => (
                <article
                  key={piece.id}
                  className={`max-w-2xl ${index % 2 ? "ml-auto" : ""}`}
                >
                  {piece.heroImage ? (
                    <div className="relative mb-10 ml-auto w-[min(72vw,420px)] overflow-hidden rounded-[50%]">
                      <MediaPlaceholder
                        slot={{ ...piece.heroImage, tone: "stage" }}
                        className="w-full"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse,transparent_10%,rgba(11,11,12,.85)_100%)]" />
                    </div>
                  ) : null}
                  <h3
                    className="text-3xl leading-tight"
                    style={{ fontFamily: "var(--font-stage-display), serif" }}
                  >
                    {piece.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{piece.excerpt}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="flex min-h-[130svh] items-center px-6 py-56">
          <motion.p
            className="mx-auto max-w-3xl text-center text-3xl leading-snug sm:text-5xl"
            style={{ fontFamily: "var(--font-stage-display), serif" }}
            {...enter}
          >
            {organization.statement}
          </motion.p>
        </section>

        <section id="elenco" className="min-h-[165svh] px-6 py-56">
          <motion.div className="mx-auto max-w-5xl" {...enter}>
            <p className="text-center text-[11px] uppercase tracking-[0.35em] text-white/35">
              Elenco
            </p>
            <ul className="mt-32 space-y-48">
              {instructors.map((person, index) => (
                <li
                  key={person.id}
                  className={`flex max-w-2xl flex-col items-center gap-10 sm:flex-row ${
                    index % 2 ? "ml-auto sm:flex-row-reverse" : ""
                  }`}
                >
                  {person.portrait ? (
                    <div className="relative w-[min(68vw,280px)] shrink-0 overflow-hidden rounded-[50%]">
                      <MediaPlaceholder
                        slot={{ ...person.portrait, tone: "stage" }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_15%,rgba(11,11,12,.75)_100%)]" />
                    </div>
                  ) : null}
                  <div className="text-center sm:text-left">
                    <h3
                      className="text-5xl leading-none sm:text-7xl"
                      style={{ fontFamily: "var(--font-stage-display), serif" }}
                    >
                      {person.name}
                    </h3>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/40">
                      {person.role}
                    </p>
                    <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
                      {person.bio}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <footer id="contacto" className="px-6 py-20 text-center">
          <p
            className="text-3xl"
            style={{ fontFamily: "var(--font-stage-display), serif" }}
          >
            {organization.name}
          </p>
          <p className="mt-4 text-sm text-white/45">{organization.addressHint}</p>
          <a
            href={`mailto:${organization.email}`}
            className="mt-6 inline-block text-sm tracking-[0.16em] text-white/70 underline-offset-8 hover:underline"
          >
            {organization.email}
          </a>
          <p className="mt-10 text-[10px] uppercase tracking-[0.2em] text-white/30">
            Contenido ficticio · Design Lab · Concepto C
          </p>
        </footer>
      </main>
    </div>
  );
}
