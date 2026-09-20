"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="hero-split relative min-h-svh overflow-hidden">
      <div className="hero-stage">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          className="hero-photo object-cover"
          sizes="100vw"
        />
        <div className="hero-couple-light" aria-hidden />
        <div className="hero-grain" aria-hidden />
      </div>
      <div className="hero-split-tone" aria-hidden />
      <div className="hero-floor-fade" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl items-center px-4 pt-28 pb-16 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="font-display hero-ink text-[clamp(2.6rem,6vw,5rem)] leading-[0.9] tracking-tight">
            No necesitás saber bailar para empezar.
          </h1>
          <p className="hero-ink-soft mt-6 max-w-md text-base leading-relaxed md:text-lg">
            Una puerta al tango en La Plata: música, clase, pista y barrio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/tango" className="hero-action px-5 py-3 text-[12px] uppercase tracking-[0.16em]">
              Descubrir el tango
            </Link>
            <Link href="/clases" className="hero-action px-5 py-3 text-[12px] uppercase tracking-[0.16em]">
              Tu primer paso
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
