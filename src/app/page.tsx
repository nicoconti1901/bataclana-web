import { ClassList } from "@/components/classes/ClassList";
import { EventFeatured } from "@/components/events/EventFeatured";
import { Hero } from "@/components/hero/Hero";
import { FirstStep } from "@/components/story/FirstStep";
import { QuoteSection } from "@/components/story/QuoteSection";
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
      <EventFeatured />
      <SectionRule />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display mb-10 text-[clamp(2.4rem,5vw,4rem)]">
          Si nunca bailaste
        </h2>
        <ClassList />
      </section>
      <SectionRule />
      <FirstStep />
    </>
  );
}
