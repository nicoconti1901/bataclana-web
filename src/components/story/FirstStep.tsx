import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { ArtFrame } from "@/components/ui/ArtFrame";

export function FirstStep() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      <ArtFrame>
        <div className="relative min-h-[32rem] overflow-hidden">
          <Image
            src={images.city.src}
            alt={images.city.alt}
            fill
            className="object-cover object-[72%_center]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
          <div className="relative z-10 flex min-h-[32rem] flex-col justify-end p-8 md:p-12">
            <h2 className="font-display on-photo max-w-xl text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.92]">
              Qué es el tango. Cómo probarlo. Dónde ir.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/tango" className="themed-cta px-5 py-3 text-[12px] uppercase tracking-[0.16em]">
                Entender el tango
              </Link>
              <Link
                href="/milonga"
                className="on-photo border border-[var(--on-photo)]/40 px-5 py-3 text-[12px] uppercase tracking-[0.16em]"
              >
                Qué esperar de una milonga
              </Link>
            </div>
          </div>
        </div>
      </ArtFrame>
    </section>
  );
}
