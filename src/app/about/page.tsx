import Image from "next/image";
import SkillsGrid from "@/components/SkillsGrid";
import { MapPin, Calendar, Award, BookOpen, Heart, Code, Cpu, Globe } from "lucide-react";

export const metadata = {
  title: "About | Marvin Rivera Martinez",
  description: "About Marvin Rivera Martinez – Computer Engineering student focused on embedded systems and web applications.",
};

export default function AboutPage() {
  return (
    <main className="pb-16">
      {/* Hero section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 slide-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-sm mb-6">
              <Code className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">About Me</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Building the <span className="gradient-text">future</span> with code
            </h1>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I am a Computer Engineering student who enjoys building reliable systems that connect
              hardware and software. My recent work spans embedded devices, full-stack web
              applications, and tooling that improves developer productivity.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/20 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-sm">Harrisonburg, VA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/20 backdrop-blur-sm">
                <Calendar className="h-4 w-4 text-purple-600" />
                <span className="text-sm">Class of 2026</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/20 backdrop-blur-sm">
                <Award className="h-4 w-4 text-yellow-600" />
                <span className="text-sm">Dean's List</span>
              </div>
            </div>
          </div>
          
          <div className="justify-self-center md:justify-self-end">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse scale-110"></div>
              
              {/* Profile image */}
              <div className="relative h-64 w-64 rounded-full overflow-hidden glass border-2 border-white/30 backdrop-blur-lg float">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20"></div>
                <Image src="/profile.jpg" alt="Marvin Rivera Martinez" fill className="object-cover relative z-10" />
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 glass rounded-full p-3 float" style={{ animationDelay: "1s" }}>
                <Cpu className="h-6 w-6 text-orange-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-full p-3 float" style={{ animationDelay: "3s" }}>
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Academic excellence in Computer Engineering with focus on practical applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="glass rounded-2xl p-8 border border-white/20 backdrop-blur-lg epic-hover slide-in-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">University of Virginia</h3>
                <p className="text-foreground/70">B.S. Computer Engineering, Minor in Data Science</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Expected Graduation</span>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">May 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">GPA</span>
                <span className="text-sm text-green-600 dark:text-green-400 font-semibold">3.48/4.0</span>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Honors & Recognition</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-yellow-100/80 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-200/60">Dean's List</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200/60">QuestBridge Scholar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Machine Learning",
              "AI Hardware", 
              "Operating Systems",
              "Computer Architecture & Design",
              "Advanced Embedded Systems",
              "Internet of Things (IoT)",
              "Cybersecurity",
              "Software Engineering",
              "Data Structures & Algorithms",
              "Computer Engineering Capstone"
            ].map((course, index) => (
              <div 
                key={course}
                className="p-3 rounded-lg glass border border-white/20 backdrop-blur-sm hover:border-blue-300/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium group-hover:text-blue-300 transition-colors">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillsGrid />
      
      {/* Interests section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Interests & Passions</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            What drives my curiosity and shapes my learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: "Embedded AI", desc: "Edge computing and AI on microcontrollers" },
            { icon: Code, title: "Developer Tools", desc: "Building tools that improve productivity" },
            { icon: Heart, title: "Open Source", desc: "Contributing to the community" }
          ].map((interest, index) => (
            <div 
              key={interest.title}
              className="p-6 rounded-2xl glass border border-white/20 backdrop-blur-lg epic-hover slide-in-up text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
                <interest.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
              <p className="text-sm text-foreground/70">{interest.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


