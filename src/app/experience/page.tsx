import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/lib/experience";
import { Briefcase, Award, Users, Rocket } from "lucide-react";

export const metadata = {
  title: "Experience | Marvin Rivera",
  description: "Professional experience, leadership roles, and contributions by Marvin Rivera.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Compact Hero Section */}
      <section className="relative py-8 px-4 overflow-hidden">
        {/* Subtle gradient background like About page */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-4 left-10 opacity-20">
          <Briefcase className="h-6 w-6 text-blue-400 animate-float" />
        </div>
        <div className="absolute top-8 right-20 opacity-20">
          <Award className="h-5 w-5 text-purple-400 animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute bottom-4 left-1/4 opacity-20">
          <Users className="h-6 w-6 text-blue-300 animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute bottom-8 right-1/3 opacity-20">
          <Rocket className="h-5 w-5 text-purple-300 animate-float" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-sm mb-6 animate-slide-in-up">
            <Briefcase className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Professional Journey</span>
          </div>

          {/* Compact Title */}
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="gradient-text">Experience</span>
          </h1>

          {/* Compact Subtitle */}
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
            Building the future through <span className="text-blue-600 dark:text-blue-400 font-semibold">teaching</span>, 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> innovation</span>, and 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> leadership</span>
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="space-y-4">
          {experiences.map((item, index) => (
            <div
              key={item.id}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ExperienceCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


