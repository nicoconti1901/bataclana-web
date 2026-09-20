import { DM_Sans, Instrument_Serif } from "next/font/google";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stage-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-stage-sans",
});

export default function ContemporaryStageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${display.variable} ${sans.variable}`}>{children}</div>;
}
