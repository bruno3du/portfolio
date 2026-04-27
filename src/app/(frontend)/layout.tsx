import type { Metadata } from "next";
import { Archivo_Black, Instrument_Serif, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Bruno Eduardo — Fullstack Developer",
  description:
    "4+ anos transformando café em SaaS. TypeScript, React, Node, Postgres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="pt-BR"
      className={`${instrumentSerif.variable} ${newsreader.variable} ${jetbrainsMono.variable} ${archivoBlack.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
