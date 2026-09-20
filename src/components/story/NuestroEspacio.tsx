"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { spaces } from "@/data/spaces";

const INTERVAL_MS = 5200;

export function NuestroEspacio() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = spaces[index] ?? spaces[0];

  useEffect(() => {
    if (reduce || paused || spaces.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % spaces.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24"
      aria-labelledby="nuestro-espacio"
    >
      <div className="mb-10 max-w-2xl md:mb-12">
        <h2
          id="nuestro-espacio"
          className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.92]"
        >
          Nuestro espacio
        </h2>
        <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-[var(--page-muted)] md:text-base">
          Las milongas de Bataclana habitan salones, luces y rincones concretos.
          Una mirada a la casa: sin catálogo, con atmósfera.
        </p>
      </div>

      <div
        className="space-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
        <div className="space-carousel-frame" aria-live="polite" aria-atomic="true">
          {spaces.map((space, i) => (
            <div
              key={space.id}
              className={`space-carousel-slide ${i === index ? "is-active" : ""}`}
              aria-hidden={i !== index}
            >
              <Image
                src={space.image}
                alt={space.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 72rem"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="space-carousel-meta">
          <div className="space-carousel-caption">
            <span className="space-carousel-title">{current.title}</span>
            <span className="space-carousel-text">{current.caption}</span>
          </div>

          <div className="space-carousel-dots" role="tablist" aria-label="Fotos del espacio">
            {spaces.map((space, i) => (
              <button
                key={space.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${space.title}: ${space.caption}`}
                className={`space-carousel-dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
