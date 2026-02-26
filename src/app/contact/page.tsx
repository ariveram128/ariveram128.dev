import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "CONTACT // OPEN CHANNEL",
};

export default function ContactPage() {
  return <ContactForm />;
}
