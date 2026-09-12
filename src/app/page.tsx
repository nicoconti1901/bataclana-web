import { EventFeatured } from "@/components/events/EventFeatured";
import { Hero } from "@/components/hero/Hero";
import { FirstStep } from "@/components/story/FirstStep";
import { NuestroEspacio } from "@/components/story/NuestroEspacio";
import { QuoteSection } from "@/components/story/QuoteSection";
import { TangoPath } from "@/components/story/TangoPath";
import { TangoStory } from "@/components/story/TangoStory";
import { SectionRule } from "@/components/ui/SectionRule";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TangoStory />
      <SectionRule />
      <QuoteSection />
      <SectionRule />
      <NuestroEspacio />
      <SectionRule />
      <EventFeatured />
      <SectionRule />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display mb-4 text-[clamp(2.4rem,5vw,4rem)]">
          Si nunca bailaste
        </h2>
        <p className="mb-12 max-w-[46ch] text-sm leading-relaxed text-[var(--page-muted)]">
          Cuatro gestos, no cuatro fechas. Un camino técnico y sencillo para
          acercarte al tango sin que nadie te examine.
        </p>
        <TangoPath />
      </section>
      <SectionRule />
      <FirstStep />
    </>
  );
}
