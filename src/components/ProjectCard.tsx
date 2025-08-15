import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";
import { Github, ExternalLink, Zap, Star } from "lucide-react";

const categoryIcons = {
  hardware: "🔧",
  software: "💻", 
  web: "🌐",
  embedded: "⚡"
};

const categoryColors = {
  hardware: "from-orange-500 to-red-500",
  software: "from-blue-500 to-cyan-500",
  web: "from-green-500 to-teal-500", 
  embedded: "from-purple-500 to-pink-500"
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl glass border border-white/20 backdrop-blur-lg overflow-hidden epic-hover slide-in-up flex-1 flex flex-col">
      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[project.category]}`}>
          <span>{categoryIcons[project.category]}</span>
          {project.category}
        </div>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-medium text-white">
            <Star className="h-3 w-3" />
            Featured
          </div>
        </div>
      )}

      {/* Project image with gradient overlay */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-purple-900/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <Image 
          src={project.imageUrl} 
          alt="Project preview" 
          fill 
          className="object-contain p-8 dark:invert transition-transform duration-300 group-hover:scale-105" 
        />
        
        {/* Floating action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              className="p-2 rounded-full glass border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 text-white" />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              className="p-2 rounded-full glass border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
            >
              <ExternalLink className="h-4 w-4 text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold tracking-tight group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <Zap className="h-5 w-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <p className="text-sm text-foreground/70 mb-4 flex-1">
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={tech} 
              className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-700/60 font-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 text-gray-600 dark:text-gray-400 border border-gray-300/60 dark:border-gray-600/60 font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 transition-all duration-500 pointer-events-none"></div>
    </article>
  );
}


