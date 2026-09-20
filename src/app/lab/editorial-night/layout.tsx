import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-night-display",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-night-sans",
});

export default function EditorialNightLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${display.variable} ${sans.variable} pt-10`}>{children}</div>
  );
}
