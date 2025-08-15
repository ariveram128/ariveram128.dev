import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact | Marvin Rivera Martinez",
  description: "Get in touch with Marvin Rivera Martinez.",
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Contact</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <aside className="space-y-3">
          <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4" /> mrvnlxndrrvr2@gmail.com</div>
          <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" /> Harrisonburg, VA</div>
          <a className="text-blue-600 hover:underline text-sm block" href="https://github.com/ariveram128" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-blue-600 hover:underline text-sm block" href="https://linkedin.com/in/ariveram128" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </aside>
      </div>
    </main>
  );
}


