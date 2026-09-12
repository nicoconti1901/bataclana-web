import Link from "next/link";
import { classes } from "@/data/classes";
import { ArtFrame } from "@/components/ui/ArtFrame";

export function ClassList() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {classes.map((item) => (
        <ArtFrame key={item.id} className="p-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--page-muted)]">
            {item.day} · {item.time}
          </p>
          <h3 className="font-display mt-5 text-4xl">{item.title}</h3>
          <p className="mt-3 text-sm font-medium">{item.forWhom}</p>
          <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-[var(--page-muted)]">
            {item.note}
          </p>
        </ArtFrame>
      ))}
      <ArtFrame className="flex flex-col items-start justify-between gap-5 p-8 md:col-span-3 md:flex-row md:items-center">
        <p className="max-w-xl text-sm leading-relaxed text-[var(--page-muted)]">
          No necesitás pareja ni zapatos especiales la primera vez. Reservá un
          lugar y preguntá todo lo que no sepas.
        </p>
        <Link href="/eventos/primer-paso" className="themed-cta px-5 py-3 text-[12px] uppercase tracking-[0.16em]">
          Empezar por acá
        </Link>
      </ArtFrame>
    </div>
  );
}
