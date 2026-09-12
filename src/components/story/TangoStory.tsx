import Image from "next/image";
import { images } from "@/data/images";
import { ArtFrame } from "@/components/ui/ArtFrame";

export function TangoStory() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-12 md:gap-16 md:px-6">
      <div className="md:col-span-5 md:col-start-1">
        <h2 className="font-display text-[clamp(2.6rem,5vw,4.25rem)] leading-[0.92]">
          El tango no se mira de lejos.
        </h2>
        <p className="mt-7 max-w-[36ch] text-[16px] leading-relaxed text-[var(--page-muted)]">
          Es música, abrazo, barrio y una forma de estar con otra persona. Si
          nunca bailaste, el primer gesto es escuchar — después, si querés, la
          pista.
        </p>
      </div>
      <ArtFrame className="md:col-span-7">
        <div className="relative aspect-[5/6] md:aspect-[4/5]">
          <Image
            src={images.story.src}
            alt={images.story.alt}
            fill
            className="object-cover p-[14px]"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      </ArtFrame>
    </section>
  );
}
