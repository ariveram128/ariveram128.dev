import ProjectsClient from "@/components/ProjectsClient";
import { Code, Zap } from "lucide-react";

export const metadata = {
  title: "Projects | Marvin Rivera",
  description: "Selected hardware, embedded, and software projects by Marvin Rivera.",
};

export default function ProjectsPage() {
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="relative py-8 px-4 overflow-hidden">
        {/* Subtle gradient background like About page */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-4 left-10 opacity-20">
          <Code className="h-6 w-6 text-blue-400 animate-float" />
        </div>
        <div className="absolute bottom-4 right-20 opacity-20">
          <Zap className="h-5 w-5 text-purple-400 animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-sm mb-6 animate-slide-in-up">
            <Code className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Technical Projects</span>
          </div>

          {/* Compact Title */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="gradient-text">Projects</span>
          </h1>

          {/* Compact Subtitle */}
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-6 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
            Selected hardware, embedded, and software projects showcasing technical expertise
          </p>
        </div>
      </section>

      {/* Projects Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <ProjectsClient />
      </section>
    </main>
  );
}


