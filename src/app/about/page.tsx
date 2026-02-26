import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "ABOUT // PERSONNEL DOSSIER",
};

export default function AboutPage() {
  return <AboutContent />;
}
