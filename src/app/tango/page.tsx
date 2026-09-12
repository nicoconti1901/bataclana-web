import type { Metadata } from "next";
import Link from "next/link";
import { images } from "@/data/images";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { PageHero } from "@/components/ui/PageHero";
import { SectionRule } from "@/components/ui/SectionRule";

export const metadata: Metadata = {
  title: "Qué es el tango",
  description:
    "El tango como música, danza, encuentro y cultura. Una entrada para quien nunca bailó.",
};

export default function TangoPage() {
  return (
    <article>
      <PageHero
        title="El tango está vivo."
        lede="No es un museo. Es una forma de encontrarse: en la música, en el abrazo, en una noche de milonga."
        image={images.orchestra.src}
        imageAlt={images.orchestra.alt}
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-2 md:px-6">
        <ArtFrame className="p-8 md:p-10">
          <h2 className="font-display text-4xl">Si nunca lo viste de cerca</h2>
          <p className="mt-5 max-w-[42ch] leading-relaxed text-[var(--page-muted)]">
            El tango se escucha antes de bailarse. Hay orquestas, DJs, tandas y
            silencios. Nadie te pide un examen para entrar.
          </p>
        </ArtFrame>
        <ArtFrame className="p-8 md:p-10">
          <h2 className="font-display text-4xl">Cómo probarlo</h2>
          <ol className="mt-5 space-y-4 text-[var(--page-muted)]">
            <li>Venite a escuchar una milonga.</li>
            <li>Tomá una clase de inicio.</li>
            <li>Quedate en la práctica abierta.</li>
          </ol>
          <Link href="/clases" className="themed-cta mt-8 inline-flex px-5 py-3 text-[12px] uppercase tracking-[0.16em]">
            Ir a las clases
          </Link>
        </ArtFrame>
      </div>
      <SectionRule />
    </article>
  );
}
