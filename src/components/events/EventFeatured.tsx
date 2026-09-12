import Image from "next/image";
import Link from "next/link";
import { events, kindLabel } from "@/data/events";
import { ArtFrame } from "@/components/ui/ArtFrame";

export function EventFeatured() {
  const featured = events.filter((event) => event.featured);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)]">Esta semana</h2>
        <Link
          href="/eventos"
          className="hidden text-[12px] uppercase tracking-[0.16em] underline-offset-4 hover:underline md:inline"
        >
          Toda la agenda
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {featured.map((event) => (
          <ArtFrame key={event.slug}>
            <Link href={`/eventos/${event.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover p-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="px-8 pb-8 pt-2">
                <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[var(--page-muted)]">
                  <span>{kindLabel[event.kind]}</span>
                  <span>{event.dateLabel}</span>
                </div>
                <h3 className="font-display text-4xl">{event.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--page-muted)]">
                  {event.excerpt}
                </p>
                <p className="mt-5 text-[12px] uppercase tracking-[0.14em] opacity-70">
                  {event.time} · {event.venue}
                </p>
              </div>
            </Link>
          </ArtFrame>
        ))}
      </div>
    </section>
  );
}
