import type { Metadata } from "next";
import Link from "next/link";
import { images } from "@/data/images";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "La milonga",
  description: "Qué esperar de una milonga si es tu primera noche.",
};

const tips = [
  {
    title: "Podés solo mirar",
    text: "Sentarte, tomar algo y escuchar tandas es una forma válida de estar.",
  },
  {
    title: "El abrazo no es un examen",
    text: "Se pide con claridad y se puede decir que no. Eso también es tango.",
  },
  {
    title: "Hay un ritmo de la noche",
    text: "Tandas, cortinas, un descanso. Si no lo conocés, preguntá. Nadie se ofende.",
  },
];

export default function MilongaPage() {
  return (
    <div>
      <PageHero
        title="Qué esperar de una milonga"
        lede="Bataclana no pide que llegues sabiendo. Pide que llegues con ganas de estar."
        image={images.salon.src}
        imageAlt={images.salon.alt}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6">
        {tips.map((tip) => (
          <ArtFrame key={tip.title} className="p-8">
            <h2 className="font-display text-3xl">{tip.title}</h2>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-[var(--page-muted)]">
              {tip.text}
            </p>
          </ArtFrame>
        ))}
      </section>
      <div className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <Link href="/eventos" className="themed-cta inline-flex px-5 py-3 text-[12px] uppercase tracking-[0.16em]">
          Elegir una noche
        </Link>
      </div>
    </div>
  );
}
