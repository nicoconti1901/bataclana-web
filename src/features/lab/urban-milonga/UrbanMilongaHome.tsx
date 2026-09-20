"use client";

import { motion } from "motion/react";
import type { HomeContent } from "@/lib/repositories/types";
import { formatEventWhen, levelLabel } from "@/lib/formatters";
import { useMotionSafe } from "@/lib/motion";
import { MediaPlaceholder } from "@/components/tango/MediaPlaceholder";
import { cn } from "@/lib/utils";

type Props = { content: HomeContent };

export function UrbanMilongaHome({ content }: Props) {
  const { organization, featuredEvent, upcomingEvents, classes, editorial, instructors } =
    content;
  const { reduce } = useMotionSafe();

  const panel = reduce
    ? {}
    : {
        initial: { opacity: 0, x: -24, clipPath: "inset(0 100% 0 0)" },
        whileInView: { opacity: 1, x: 0, clipPath: "inset(0 0 0 0)" },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] as const },
      };

  return (
    <div className="min-h-screen overflow-hidden bg-[#1a1917] pb-32 text-[#f2f0ea] [font-family:var(--font-urban-ui),system-ui,sans-serif] md:pb-24">
      <header className="flex items-start justify-between gap-4 border-b-2 border-[#f2f0ea] px-4 pb-4 pt-14 sm:px-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f0b429]">
            La Plata · en vivo
          </p>
          <h1
            className="mt-1 text-[clamp(2.4rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight"
            style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
          >
            {organization.name}
          </h1>
        </div>
        <div className="border-2 border-[#f2f0ea] px-3 py-2 text-right text-[10px] uppercase leading-tight tracking-[0.16em]">
          <div>Sello</div>
          <div className="text-[#f0b429]">2026</div>
        </div>
      </header>

      <main>
        {featuredEvent ? (
          <section className="relative grid border-b-2 border-[#f2f0ea] lg:grid-cols-12">
            <motion.div className="relative lg:col-span-8" {...panel}>
              {featuredEvent.heroImage ? (
                <MediaPlaceholder
                  slot={{ ...featuredEvent.heroImage, tone: "concrete" }}
                  className="min-h-[48vh] w-full grayscale contrast-150 brightness-75 lg:min-h-[70vh]"
                />
              ) : null}
              <div
                aria-hidden
                className="absolute left-[-8%] top-[48%] h-3 w-[116%] -rotate-6 bg-[#f0b429] mix-blend-screen"
              />
              <div className="absolute left-0 top-0 bg-[#f0b429] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black">
                Esta noche / próxima
              </div>
              <div
                className="absolute bottom-4 left-4 max-w-md bg-[#1a1917] px-4 py-3 text-[clamp(1.8rem,5vw,3.4rem)] uppercase leading-[0.9] text-[#f2f0ea] mix-blend-normal"
                style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
              >
                {featuredEvent.title}
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col justify-between gap-6 border-t-2 border-[#f2f0ea] p-5 lg:col-span-4 lg:border-l-2 lg:border-t-0"
              {...panel}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0b429]">
                  {formatEventWhen(featuredEvent.startsAt)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  {featuredEvent.shortDescription}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-white/50">
                  {featuredEvent.venueName}
                  {featuredEvent.venueAddress ? ` · ${featuredEvent.venueAddress}` : ""}
                </p>
              </div>
              <div className="space-y-3 border-t border-white/20 pt-4">
                <p className="text-lg font-semibold">{featuredEvent.priceLabel}</p>
                <a
                  href="#contacto"
                  className="inline-flex bg-[#f2f0ea] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#f0b429]"
                >
                  {featuredEvent.registrationLabel ?? "Entrar"}
                </a>
              </div>
            </motion.div>
          </section>
        ) : null}

        <section id="agenda" aria-labelledby="agenda-title" className="border-b-2 border-[#f2f0ea]">
          <div className="flex items-center justify-between bg-[#f2f0ea] px-4 py-2 text-black">
            <h2
              id="agenda-title"
              className="text-xl uppercase leading-none"
              style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
            >
              Agenda / flujo nocturno
            </h2>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
              Sep — Oct / La Plata
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {upcomingEvents.map((event, index) => (
              <motion.article
                key={event.id}
                className={cn(
                  "border-[#f2f0ea] p-4 sm:border-r-2 [&:nth-child(2n)]:sm:border-r-0 lg:[&:nth-child(2n)]:border-r-2 lg:[&:nth-child(4n)]:border-r-0",
                  index === 1 && "bg-[#255bd9]",
                )}
                style={{ borderBottomWidth: index < upcomingEvents.length - 1 ? 2 : 0 }}
                {...panel}
                transition={{
                  duration: 0.4,
                  delay: reduce ? 0 : index * 0.06,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#f0b429]">
                  {formatEventWhen(event.startsAt)}
                </p>
                <h2
                  className="mt-2 text-2xl uppercase leading-none"
                  style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
                >
                  {event.title}
                </h2>
                <p className="mt-2 text-xs text-white/55">{event.venueName}</p>
                <p className="mt-2 text-sm text-white/70">{event.shortDescription}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="clases"
          aria-labelledby="clases-title"
          className="grid border-b-2 border-[#f2f0ea] lg:grid-cols-[1fr_2fr]"
        >
          <div className="border-b-2 border-[#f2f0ea] bg-[#f0b429] p-5 text-black lg:border-b-0 lg:border-r-2">
            <h2
              id="clases-title"
              className="text-4xl uppercase leading-none"
              style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
            >
              Clases
            </h2>
            <p className="mt-3 text-sm font-medium">Por nivel · horario fijo · piso real</p>
          </div>
          <div className="divide-y-2 divide-[#f2f0ea]">
            {classes.map((item) => (
              <div
                key={item.id}
                className="grid gap-2 p-4 sm:grid-cols-[7rem_1fr_auto] sm:items-center"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#f0b429]">
                  {levelLabel(item.level)}
                </span>
                <div>
                  <h3
                    className="text-xl uppercase leading-none"
                    style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/55">
                    {item.weekday} {item.timeLabel} · {item.venueName}
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase">{item.priceLabel}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="lecturas"
          aria-label="Editorial"
          className="grid border-b-2 border-[#f2f0ea] md:grid-cols-2"
        >
          {editorial.map((piece) => (
            <article
              key={piece.id}
              className="border-[#f2f0ea] p-0 md:border-r-2 md:last:border-r-0"
            >
              {piece.heroImage ? (
                <MediaPlaceholder
                  slot={{ ...piece.heroImage, tone: "concrete" }}
                  className="w-full"
                />
              ) : null}
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#f0b429]">
                  Editorial · {piece.publishedAt}
                </p>
                <h2
                  className="mt-2 text-3xl uppercase leading-none"
                  style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
                >
                  {piece.title}
                </h2>
                <p className="mt-3 text-sm text-white/70">{piece.excerpt}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="relative overflow-hidden border-b-2 border-[#f2f0ea] px-5 py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 top-4 text-[clamp(4rem,18vw,12rem)] uppercase leading-none text-white/[0.06]"
            style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
          >
            HOY
          </div>
          <p
            className="relative max-w-3xl text-2xl uppercase leading-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
          >
            {organization.statement}
          </p>
        </section>

        <section id="equipo" className="border-b-2 border-[#f2f0ea]">
          <div className="border-b-2 border-[#f2f0ea] px-5 py-4">
            <h2
              className="text-3xl uppercase"
              style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
            >
              Docentes
            </h2>
          </div>
          <div className="grid sm:grid-cols-3">
            {instructors.map((person) => (
              <article
                key={person.id}
                className="border-[#f2f0ea] p-4 sm:border-r-2 sm:last:border-r-0"
              >
                {person.portrait ? (
                  <MediaPlaceholder
                    slot={{ ...person.portrait, tone: "ember" }}
                    className="mb-3 w-full"
                  />
                ) : null}
                <h3
                  className="text-xl uppercase"
                  style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
                >
                  {person.name}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#f0b429]">
                  {person.role}
                </p>
                <p className="mt-2 text-sm text-white/65">{person.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <footer id="contacto" className="px-5 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div>
              <p
                className="text-2xl uppercase"
                style={{ fontFamily: "var(--font-urban-display), sans-serif" }}
              >
                {organization.name}
              </p>
              <p className="mt-1 text-sm text-white/55">{organization.tagline}</p>
            </div>
            <div className="text-sm">
              <a href={`mailto:${organization.email}`} className="underline-offset-2 hover:underline">
                {organization.email}
              </a>
              <p className="mt-1">{organization.instagram}</p>
            </div>
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-white/35">
            Contenido ficticio · Design Lab · Concepto B
          </p>
        </footer>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-[#f2f0ea] bg-[#11100e] text-[#f2f0ea]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-[10px] uppercase tracking-[0.16em]">
          <span className="font-semibold text-[#f0b429]">{organization.addressHint}</span>
          <p className="order-first w-full bg-[#e84c2d] px-2 py-1 font-bold text-black sm:order-none sm:w-auto">
            Esta noche: {featuredEvent?.title ?? "Casa abierta"}
          </p>
          <nav aria-label="Accesos rápidos" className="flex flex-wrap gap-4">
            <a href="#agenda" className="hover:text-[#f0b429]">
              Agenda
            </a>
            <a href="#clases" className="hover:text-[#f0b429]">
              Clases
            </a>
            <a href="#lecturas" className="hover:text-[#f0b429]">
              Lecturas
            </a>
            <a href="#equipo" className="hover:text-[#f0b429]">
              Equipo
            </a>
          </nav>
          <span>Piso abierto · {organization.city}</span>
        </div>
      </div>
    </div>
  );
}
