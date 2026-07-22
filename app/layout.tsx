import type { Metadata, Viewport } from "next";
import { Fraunces, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-schibsted",
  display: "swap",
});

const SITE_URL = "https://lukaslasak.cz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lukáš Lasák — Obchodní zástupce & Business Development",
  description:
    "Obchodník s více než desetiletou praxí v B2B, podnikatelským myšlením a vášní pro AI a moderní technologie. Hledám novou výzvu, kde spojím obchod, technologie a kreativitu.",
  keywords: [
    "Lukáš Lasák",
    "obchodní zástupce",
    "business development",
    "B2B obchod",
    "SMB akvizice",
    "AI",
    "Praha",
  ],
  authors: [{ name: "Lukáš Lasák" }],
  openGraph: {
    title: "Lukáš Lasák — Obchodní zástupce & Business Development",
    description:
      "Obchodník s více než desetiletou praxí v B2B, podnikatelským myšlením a vášní pro AI a moderní technologie.",
    url: SITE_URL,
    siteName: "Lukáš Lasák",
    locale: "cs_CZ",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${fraunces.variable} ${schibsted.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
