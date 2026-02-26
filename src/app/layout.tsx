import type { Metadata } from "next";
import { Orbitron, IBM_Plex_Mono, Syne } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { CRTEffect } from "@/components/CRTEffect";
import { Footer } from "@/components/Footer";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MARVIN RIVERA // PORTFOLIO",
  description:
    "Marvin Rivera Martinez — Computer Engineer at UVA. Embedded systems, IoT, hardware design, and full-stack development.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${ibmPlexMono.variable} ${syne.variable} antialiased`}
      >
        <CRTEffect />
        <Navigation />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
