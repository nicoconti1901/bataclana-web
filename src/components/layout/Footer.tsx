import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="themed-footer mt-24 border-t border-[var(--page-line)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
        <div>
          <Image
            src="/logo-bataclana.jpg"
            alt=""
            width={180}
            height={108}
            className="mb-5 h-14 w-auto"
          />
          <p className="max-w-sm text-sm leading-relaxed opacity-80">
            Una milonga contemporánea en Buenos Aires. El tango se descubre,
            se escucha, se aprende y se vive.
          </p>
        </div>
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.2em] opacity-60">Entrar</p>
          <ul className="space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:opacity-70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.2em] opacity-60">Contacto</p>
          <p className="text-sm opacity-80">{site.city}</p>
          <p className="text-sm opacity-80">{site.address}</p>
          <a className="mt-3 inline-block text-sm underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
