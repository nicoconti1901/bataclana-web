"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { images } from "@/data/images";

export function TangoStory() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduce) {
      video.pause();
      return;
    }
    void video.play().catch(() => undefined);
  }, [reduce]);

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-12 md:px-6">
      <div className="md:col-span-6">
        <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[0.92]">
          El tango no se mira de lejos.
        </h2>
        <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-[var(--page-muted)]">
          Es música de barrio, abrazo y una forma de estar con otra persona. Si
          nunca bailaste, el primer gesto es escuchar.
        </p>
      </div>
      <ArtFrame className="md:col-span-6">
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="absolute inset-[12px] h-[calc(100%-24px)] w-[calc(100%-24px)] object-cover"
            autoPlay={!reduce}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="El tango en movimiento: no se mira de lejos"
          >
            <source src={images.storyVideo} type="video/mp4" />
          </video>
        </div>
      </ArtFrame>
    </section>
  );
}
