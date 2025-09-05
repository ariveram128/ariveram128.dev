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
      {/* Epic Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-900 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/20 to-purple-600/20 animate-gradient-y"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-20">
          <Briefcase className="h-8 w-8 text-blue-400 animate-float" />
        </div>
        <div className="absolute top-32 right-20 opacity-20">
          <Award className="h-6 w-6 text-purple-400 animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <Users className="h-7 w-7 text-blue-300 animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute bottom-32 right-1/3 opacity-20">
          <Rocket className="h-5 w-5 text-purple-300 animate-float" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-md mb-6 animate-slide-in-up">
            <Briefcase className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Professional Journey</span>
          </div>

          {/* Epic Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
            Building the future through <span className="text-blue-400 font-semibold">teaching</span>, 
            <span className="text-purple-400 font-semibold"> innovation</span>, and 
            <span className="text-blue-300 font-semibold"> leadership</span>
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
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


