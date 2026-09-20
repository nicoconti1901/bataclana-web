import Link from "next/link";
import { events, kindLabel, type EventItem } from "@/data/events";
import { ArtFrame } from "@/components/ui/ArtFrame";

export function EventTimeline({ items = events }: { items?: EventItem[] }) {
  return (
    <ol className="space-y-4">
      {items.map((event) => (
        <li key={event.slug}>
          <ArtFrame>
            <Link
              href={`/eventos/${event.slug}`}
              className="group grid gap-3 px-8 py-7 md:grid-cols-[6.5rem_1fr_auto] md:items-baseline"
            >
              <span className="font-display text-3xl leading-none">{event.dateLabel}</span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--page-muted)]">
                  {kindLabel[event.kind]} · {event.level}
                </p>
                <h3 className="font-display mt-1 text-3xl md:text-4xl">{event.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-[var(--page-muted)]">{event.excerpt}</p>
              </div>
              <span className="text-[12px] uppercase tracking-[0.14em] opacity-70">
                {event.time}
              </span>
            </Link>
          </ArtFrame>
        </li>
      ))}
    </ol>
  );
}
