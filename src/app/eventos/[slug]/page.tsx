import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEvent, kindLabel } from "@/data/events";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { PageHero } from "@/components/ui/PageHero";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Evento" };
  return {
    title: event.title,
    description: event.excerpt,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <article>
      <PageHero
        title={event.title}
        lede={`${kindLabel[event.kind]} · ${event.dateLabel} · ${event.time}`}
        image={event.image}
        imageAlt={event.imageAlt}
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.35fr_0.65fr] md:px-6">
        <ArtFrame className="p-8 md:p-10">
          <p className="max-w-[62ch] text-lg leading-relaxed text-[var(--page-muted)]">
            {event.body}
          </p>
          <Link href="/eventos" className="mt-8 inline-block text-sm underline-offset-4 hover:underline">
            Volver a la agenda
          </Link>
        </ArtFrame>
        <ArtFrame className="h-fit p-8 text-sm">
          <dl className="space-y-5">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[var(--page-muted)]">Horario</dt>
              <dd className="mt-1">{event.time}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[var(--page-muted)]">Lugar</dt>
              <dd className="mt-1">
                {event.venue}
                <br />
                {event.neighborhood}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-[var(--page-muted)]">Para quién</dt>
              <dd className="mt-1">{event.level}</dd>
            </div>
          </dl>
          <a
            href={`mailto:hola@milongabataclana.com?subject=${encodeURIComponent(event.title)}`}
            className="themed-cta mt-8 inline-flex w-full justify-center px-4 py-3 text-[12px] uppercase tracking-[0.16em]"
          >
            Reservar por mail
          </a>
        </ArtFrame>
      </div>
    </article>
  );
}
