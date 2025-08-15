import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Home | Marvin Rivera Martinez",
  description: "Computer Engineering student portfolio: embedded systems, digital design, and software projects.",
};

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <main>
      <Hero />
      
      {/* Mission statement */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-sm mb-6">
            <Rocket className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Mission</span>
          </div>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            I build reliable hardware and software systems with a focus on{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              usability
            </span>{" "}
            and{" "}
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              performance
            </span>
            . Experienced with embedded devices, web applications, and product-focused engineering.
          </p>
        </div>
      </section>

      <SkillsGrid />
      
      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A showcase of recent work spanning embedded systems, digital design, and full-stack development
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold epic-hover pulse-glow"
          >
            View All Projects
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  );
}
