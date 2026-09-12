"use client";

import { useTheme } from "@/lib/theme";

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <path
        fill="currentColor"
        d="M16.4 14.6A7.2 7.2 0 0 1 9.2 4.8 7.4 7.4 0 1 0 16.4 14.6Z"
      />
    </svg>
  );
}

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex overflow-hidden border border-[var(--page-line)]"
      role="group"
      aria-label="Modo de color"
    >
      <button
        type="button"
        onClick={() => setTheme("vino")}
        aria-pressed={theme === "vino"}
        aria-label="Modo oscuro"
        className={`grid h-9 w-9 place-items-center ${
          theme === "vino" ? "themed-cta" : "opacity-70 hover:opacity-100"
        }`}
      >
        <IconMoon />
      </button>
      <button
        type="button"
        onClick={() => setTheme("sepia")}
        aria-pressed={theme === "sepia"}
        aria-label="Modo claro"
        className={`grid h-9 w-9 place-items-center ${
          theme === "sepia" ? "themed-cta" : "opacity-70 hover:opacity-100"
        }`}
      >
        <IconSun />
      </button>
    </div>
  );
}
