import type { MediaSlot } from "@/features/events/types";
import { cn } from "@/lib/utils";

const toneStyles: Record<MediaSlot["tone"], string> = {
  ink: "bg-[radial-gradient(ellipse_at_30%_20%,#3a322c_0%,#0c0b0a_55%,#050505_100%)]",
  warm: "bg-[radial-gradient(ellipse_at_70%_30%,#8a5a3a_0%,#2a1810_50%,#120c09_100%)]",
  concrete:
    "bg-[linear-gradient(135deg,#6d6a66_0%,#3d3b38_40%,#1c1b1a_100%)]",
  stage:
    "bg-[radial-gradient(circle_at_50%_20%,#5c5348_0%,#161412_45%,#050505_100%)]",
  paper:
    "bg-[linear-gradient(160deg,#e8dcc8_0%,#c4b49a_45%,#8a7a62_100%)]",
  ember:
    "bg-[radial-gradient(ellipse_at_40%_60%,#a34a2e_0%,#3a1c14_50%,#120908_100%)]",
};

const aspectStyles = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
};

type MediaPlaceholderProps = {
  slot: MediaSlot;
  className?: string;
  label?: string;
};

/**
 * Replaceable media slot. Swap for next/image + real photography later
 * without changing surrounding layout components.
 */
export function MediaPlaceholder({
  slot,
  className,
  label,
}: MediaPlaceholderProps) {
  return (
    <figure
      data-media-slot={slot.id}
      className={cn(
        "relative overflow-hidden",
        toneStyles[slot.tone],
        aspectStyles[slot.aspect ?? "landscape"],
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 3px), repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.03) 4px)",
        }}
      />
      <figcaption className="sr-only">{slot.alt}</figcaption>
      {label ? (
        <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.22em] text-white/55">
          {label}
        </span>
      ) : null}
    </figure>
  );
}
