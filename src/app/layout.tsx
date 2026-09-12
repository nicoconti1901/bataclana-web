import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/lib/theme";
import { site } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display-loaded",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Tango en Buenos Aires`,
    template: `%s · ${site.shortName}`,
  },
  description:
    "Milonga, clases y cultura tanguera en Buenos Aires. No necesitás saber bailar para empezar.",
  openGraph: {
    title: site.name,
    description:
      "Una experiencia digital para descubrir el tango: agenda, clases y la milonga.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="vino">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
