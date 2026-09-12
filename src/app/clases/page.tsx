import type { Metadata } from "next";
import { ClassList } from "@/components/classes/ClassList";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Clases",
  description: "Clases de tango para principiantes y quienes vuelven a la pista.",
};

export default function ClasesPage() {
  return (
    <div>
      <PageHero
        title="Tu primer paso"
        lede="Sin pareja obligatoria. Sin jerga innecesaria. Te decimos qué esperar antes de cruzar la puerta."
        image={images.class.src}
        imageAlt={images.class.alt}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <ClassList />
      </div>
    </div>
  );
}
