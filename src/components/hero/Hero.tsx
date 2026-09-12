"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        className="object-cover object-[18%_center] md:object-[28%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/35 to-black/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:items-end md:justify-end md:px-6 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="font-display on-photo max-w-xl text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.9] tracking-tight md:text-right"
        >
          No necesitás saber bailar para empezar.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="on-photo-muted mt-5 max-w-md text-base leading-relaxed md:text-right md:text-lg"
        >
          Una puerta al tango en Buenos Aires: música, clase, pista y barrio.
          Entrá a mirar. El resto aparece.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3 md:justify-end"
        >
          <Link href="/tango" className="themed-cta px-5 py-3 text-[12px] uppercase tracking-[0.16em]">
            Descubrir el tango
          </Link>
          <Link
            href="/clases"
            className="on-photo border border-[var(--on-photo)]/40 px-5 py-3 text-[12px] uppercase tracking-[0.16em]"
          >
            Tu primer paso
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
