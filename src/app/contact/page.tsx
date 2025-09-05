import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, MessageCircle, Send, Github, Linkedin } from "lucide-react";

export const metadata = {
  title: "Contact | Marvin Rivera",
  description: "Get in touch with Marvin Rivera - Let&apos;s build something amazing together.",
};

export default function ContactPage() {
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="relative py-8 px-4 overflow-hidden">
        {/* Subtle gradient background like About page */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-4 left-10 opacity-20">
          <MessageCircle className="h-6 w-6 text-blue-400 animate-float" />
        </div>
        <div className="absolute bottom-4 right-20 opacity-20">
          <Send className="h-5 w-5 text-purple-400 animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-sm mb-6 animate-slide-in-up">
            <MessageCircle className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Get In Touch</span>
          </div>

          {/* Compact Title */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="gradient-text">Contact</span>
          </h1>

          {/* Compact Subtitle */}
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-6 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
            Let&apos;s build something amazing together. I&apos;m always open to discussing new opportunities and innovative projects.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ContactForm />
          </div>
          
          <aside className="space-y-6">
            {/* Contact Info */}
            <div className="glass rounded-xl p-6 border border-white/20 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg glass border border-white/20">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-foreground/70">mrvnlxndrrvr2@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg glass border border-white/20">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm text-foreground/70">Harrisonburg, VA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-6 border border-white/20 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/ariveram128" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg glass border border-white/20 hover:border-gray-400/50 hover:bg-gray-100/10 transition-all duration-300 epic-hover group"
                >
                  <Github className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white" />
                  <div>
                    <div className="text-sm font-medium">GitHub</div>
                    <div className="text-xs text-foreground/70">@ariveram128</div>
                  </div>
                </a>
                <a 
                  href="https://linkedin.com/in/ariveram128" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg glass border border-white/20 hover:border-blue-400/50 hover:bg-blue-100/10 transition-all duration-300 epic-hover group"
                >
                  <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                  <div>
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-xs text-foreground/70">@ariveram128</div>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}


