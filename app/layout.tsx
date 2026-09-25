import type { Metadata } from "next";
import { Onest, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./styles.css";
import "./demos.css";

const onest = Onest({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-onest", display: "swap" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-source-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Inlu — Design together. One click to code.",
  description:
    "Collaborative design, prototyping and one-click output to React, HTML/CSS, SwiftUI and Flutter. Redesign concept for inlu.com.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${onest.variable} ${sourceSans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
