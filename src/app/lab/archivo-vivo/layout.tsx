import { IBM_Plex_Mono, Source_Sans_3, Source_Serif_4 } from "next/font/google";

const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-archive-display",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-archive-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-archive-mono",
});

export default function ArchivoVivoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${display.variable} ${sans.variable} ${mono.variable} pt-10`}>
      {children}
    </div>
  );
}
