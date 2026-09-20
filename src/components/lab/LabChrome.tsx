import Link from "next/link";
import { labConcepts, type LabConceptId } from "@/features/lab/concepts";
import { cn } from "@/lib/utils";

type LabChromeProps = {
  active?: LabConceptId;
};

export function LabChrome({ active }: LabChromeProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] print:hidden">
      <div className="pointer-events-auto border-b border-white/10 bg-black/80 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-3 py-2 text-[11px] tracking-wide sm:px-4">
          <Link
            href="/lab"
            className="shrink-0 font-medium uppercase tracking-[0.18em] text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Design Lab
          </Link>
          <span className="hidden text-white/30 sm:inline">·</span>
          <span className="hidden text-white/45 sm:inline">
            Demo fiction · Casa Meridiana
          </span>
          <nav
            aria-label="Conceptos del Design Lab"
            className="ml-auto flex flex-wrap items-center justify-end gap-1"
          >
            {labConcepts.map((concept) => {
              const isActive = concept.id === active;
              return (
                <Link
                  key={concept.id}
                  href={concept.route}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-sm px-2 py-1 uppercase tracking-[0.14em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                    isActive
                      ? "bg-white text-black"
                      : "text-white/65 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {concept.letter}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
