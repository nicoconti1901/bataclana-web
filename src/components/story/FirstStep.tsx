import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { ArtFrame } from "@/components/ui/ArtFrame";

export function FirstStep() {
  return (
    <section className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 py-12 md:grid-cols-12 md:px-6 md:py-16">
      <div className="flex flex-col justify-end md:col-span-5 md:py-6">
        <h2 className="font-display text-[clamp(2.3rem,4.5vw,3.8rem)] leading-[0.92]">
          Qué es el tango. Cómo probarlo. Dónde ir.
        </h2>
        <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-[var(--page-muted)]">
          Si el oído ya pidió más, la casa está en La Plata. Una noche para
          escuchar, o una clase para dar el primer peso.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tango" className="themed-cta px-5 py-3 text-[12px] uppercase tracking-[0.16em]">
            Entender el tango
          </Link>
          <Link
            href="/milonga"
            className="border border-[var(--page-line)] px-5 py-3 text-[12px] uppercase tracking-[0.16em]"
          >
            Qué esperar de una milonga
          </Link>
        </div>
      </div>
      <ArtFrame className="md:col-span-7">
        <div className="relative aspect-[4/3] min-h-[22rem]">
          <Image
            src={images.close.src}
            alt={images.close.alt}
            fill
            className="object-cover p-[12px]"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      </ArtFrame>
    </section>
  );
}
