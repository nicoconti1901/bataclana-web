"use client";

import { useTheme } from "@/lib/theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex overflow-hidden border border-[var(--page-line)] text-[10px] uppercase tracking-[0.16em]"
      role="group"
      aria-label="Modo de color"
    >
      <button
        type="button"
        onClick={() => setTheme("vino")}
        aria-pressed={theme === "vino"}
        className={`px-2.5 py-1.5 ${
          theme === "vino" ? "themed-cta" : "opacity-70 hover:opacity-100"
        }`}
      >
        Oscuro
      </button>
      <button
        type="button"
        onClick={() => setTheme("sepia")}
        aria-pressed={theme === "sepia"}
        className={`px-2.5 py-1.5 ${
          theme === "sepia" ? "themed-cta" : "opacity-70 hover:opacity-100"
        }`}
      >
        Claro
      </button>
    </div>
  );
}
