"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";
  const clear = onHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-500 ${
        clear ? "themed-nav-clear border-transparent" : "themed-nav border-[var(--page-line)]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 md:px-6 md:py-3">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src={site.logo}
            alt="Milonga Bataclana"
            width={2400}
            height={1792}
            className="brand-logo"
            priority
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[12px] uppercase tracking-[0.18em] transition-opacity ${
                  active ? "themed-accent opacity-100" : "opacity-80 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <Link
            href="/eventos"
            className="themed-cta hidden px-4 py-2 text-[11px] uppercase tracking-[0.16em] md:inline-flex"
          >
            Ver agenda
          </Link>
          <button
            type="button"
            className="border border-current/30 px-3 py-2 text-[11px] uppercase tracking-[0.16em] md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="themed-surface flex flex-col gap-3 border-t border-[var(--page-line)] px-4 py-4 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.16em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
