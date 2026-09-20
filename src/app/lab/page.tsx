import type { Metadata } from "next";
import Link from "next/link";
import { LabChrome } from "@/components/lab/LabChrome";
import { labConcepts } from "@/features/lab/concepts";

export const metadata: Metadata = {
  title: "Design Lab",
  description:
    "Cuatro direcciones de arte comparables para Casa Meridiana (demo).",
};

export default function LabIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0908] text-[#f3eee6]">
      <LabChrome />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-20 sm:px-8">
        <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-white/45">
          Fase 1 · Exploración visual
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          Design Lab
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          Cuatro home pages con dirección de arte distinta — composición,
          tipografía, navegación, imagen, ritmo y motion. No son cambios de
          color. El contenido es ficticio (Casa Meridiana) solo para evaluar
          forma.
        </p>

        <ol className="mt-14 space-y-0 border-t border-white/15">
          {labConcepts.map((concept) => (
            <li
              key={concept.id}
              className="border-b border-white/15 py-7 transition hover:bg-white/[0.03]"
            >
              <Link
                href={concept.route}
                className="group grid gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-sm text-white/40">
                  {concept.letter}
                </span>
                <span>
                  <span className="block text-2xl tracking-tight group-hover:underline sm:text-3xl">
                    {concept.name}
                  </span>
                  <span className="mt-2 block max-w-xl text-sm leading-relaxed text-white/55">
                    {concept.oneLiner}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-white/35">
                    {concept.differentiators.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white">
                  Abrir →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-xs leading-relaxed text-white/35">
          Rutas: /lab/editorial-night · /lab/urban-milonga ·
          /lab/contemporary-stage · /lab/archivo-vivo
        </p>
      </main>
    </div>
  );
}
