import Image from "next/image";
import Link from "next/link";
import { Sparkles, Code, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Epic background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 float">
        <Code className="h-8 w-8 text-blue-500" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 float" style={{ animationDelay: "2s" }}>
        <Cpu className="h-6 w-6 text-purple-500" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 float" style={{ animationDelay: "4s" }}>
        <Sparkles className="h-7 w-7 text-pink-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center slide-in-up">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Computer Engineering</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Marvin Rivera</span>
            <span className="block gradient-text">Martinez</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg">
            Building the future with <span className="font-semibold text-blue-600">embedded systems</span>, 
            <span className="font-semibold text-purple-600"> digital design</span>, and 
            <span className="font-semibold text-pink-600"> full-stack development</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              href="/projects" 
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden epic-hover pulse-glow"
            >
              <span className="relative z-10">View Projects</span>
            </Link>
            
            <Link 
              href="/resume" 
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden epic-hover pulse-glow"
            >
              <span className="relative z-10">View Resume</span>
            </Link>
            
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden epic-hover pulse-glow"
            >
              <span className="relative z-10">Contact Me</span>
            </Link>
          </div>
        </div>
        
        <div className="relative justify-self-center md:justify-self-end">
          <div className="relative">
            {/* Glowing background circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse scale-110"></div>
            
            {/* Profile image container */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden glass border-2 border-white/30 backdrop-blur-lg float">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20"></div>
              <Image 
                src="/profile.jpg" 
                alt="Marvin Rivera Martinez" 
                fill 
                className="object-cover relative z-10" 
                priority
              />
            </div>
            
            {/* Floating tech icons around profile */}
            <div className="absolute -top-4 -right-4 glass rounded-full p-3 float" style={{ animationDelay: "1s" }}>
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-full p-3 float" style={{ animationDelay: "3s" }}>
              <Cpu className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}