import type { Metadata } from "next";
import { EventTimeline } from "@/components/events/EventTimeline";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Milongas, clases, prácticas y música en vivo en Bataclana.",
};

export default function EventosPage() {
  return (
    <div>
      <PageHero
        title="Qué hay esta luna"
        lede="Milonga, clase, práctica o en vivo. La información práctica está en cada fecha."
        image={images.night.src}
        imageAlt={images.night.alt}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <EventTimeline />
      </div>
    </div>
  );
}
