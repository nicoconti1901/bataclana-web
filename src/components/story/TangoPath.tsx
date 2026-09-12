"use client";

import { motion, useReducedMotion } from "motion/react";
import { tangoPath } from "@/data/path";

export function TangoPath() {
  const reduce = useReducedMotion();
  const view = { once: false, amount: 0.28 };

  return (
    <div className="path-stage relative">
      <span aria-hidden className="path-rail absolute top-6 bottom-4 left-3 w-px md:left-1/2" />

      <ol className="space-y-10">
        {tangoPath.map((step, index) => {
          const toRight = index % 2 === 1;
          const mark = String(index + 1).padStart(2, "0");

          return (
            <li key={step.id} className="path-step relative grid md:grid-cols-2">
              <span
                aria-hidden
                className="path-node absolute top-1/2 left-0 z-10 h-3 w-3 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2"
              />

              <div className={`path-slot ${toRight ? "md:col-start-2" : "md:col-start-1"}`}>
                <div className="path-frame">
                  <motion.div
                    className="path-panel"
                    initial={reduce ? { opacity: 1, scaleX: 1 } : { opacity: 1, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={view}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span aria-hidden className="path-index">
                      {mark}
                    </span>
                    <p className="path-kicker">{step.beat}</p>
                    <h3 className="font-display path-title">{step.title}</h3>
                    <p className="path-copy">{step.text}</p>
                  </motion.div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
