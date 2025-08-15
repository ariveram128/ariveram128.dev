import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Marvin Rivera Martinez | Portfolio",
    template: "%s | Marvin Rivera Martinez",
  },
  description: "Computer Engineering portfolio showcasing projects and experience.",
  openGraph: {
    title: "Marvin Rivera Martinez | Portfolio",
    description: "Computer Engineering portfolio showcasing projects and experience.",
    url: "https://example.com",
    siteName: "Marvin Rivera Martinez",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "Open Graph preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvin Rivera Martinez | Portfolio",
    description: "Computer Engineering portfolio",
    images: ["/next.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}> 
        <Navigation />
        {children}
      </body>
    </html>
  );
}
