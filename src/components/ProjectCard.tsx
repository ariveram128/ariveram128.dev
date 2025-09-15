"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/types";
import { Github, ExternalLink, Zap, Star, Calendar, MapPin, X, ChevronRight, Eye, RotateCcw, Code, Database, Globe, Cpu, Wrench, Layers } from "lucide-react";
import ProjectIcon from "./ProjectIcons";

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

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  
  // Programming Languages
  if (techLower.includes('react') || techLower.includes('javascript')) return Code;
  if (techLower.includes('python') || techLower.includes('django')) return Code;
  if (techLower.includes('verilog') || techLower.includes('c')) return Code;
  
  // Databases
  if (techLower.includes('mongodb') || techLower.includes('postgresql')) return Database;
  
  // Web Technologies
  if (techLower.includes('node') || techLower.includes('tailwind') || techLower.includes('css')) return Globe;
  
  // Hardware/Embedded
  if (techLower.includes('risc') || techLower.includes('uart') || techLower.includes('nrf') || techLower.includes('tm4c')) return Cpu;
  if (techLower.includes('rtos') || techLower.includes('zephyr') || techLower.includes('keil')) return Wrench;
  
  // Cloud/Services
  if (techLower.includes('aws') || techLower.includes('s3') || techLower.includes('digitalocean')) return Layers;
  if (techLower.includes('three') || techLower.includes('modelsim')) return Layers;
  
  // Default
  return Code;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Flip Card */}
      <article 
        className="group relative h-80 w-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => setShowModal(true)}
      >
        <div 
          className="relative w-full h-full transition-transform duration-700"
          style={{ 
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          
          {/* Front Side */}
          <div 
            className="absolute inset-0 w-full h-full rounded-2xl glass border border-white/20 backdrop-blur-lg overflow-hidden pulse-border"
            style={{ backfaceVisibility: "hidden" }}
          >
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

            {/* Project Layout */}
            <div className="relative h-full p-6 flex flex-col">
              {/* Project Icon Area */}
              <div className="flex-1 flex items-center justify-center mb-6">
                <div className="w-24 h-24 flex items-center justify-center">
                  <ProjectIcon projectId={project.id} className="w-full h-full" />
                </div>
              </div>
              
              {/* Project Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">{project.description}</p>
                
                {/* Interactive hints */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-3 w-3" />
                    <span>Hover to flip</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-purple-400 opacity-70 group-hover:opacity-100 transition-opacity">
                    <span>Click for details</span>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 w-full h-full rounded-2xl glass border border-white/20 backdrop-blur-lg overflow-hidden p-6 flex flex-col"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg glass border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg glass border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-4 flex-1">{project.description}</p>

            {/* Tech stack */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 text-xs font-medium rounded-full glass border border-white/20 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Click to expand hint */}
            <div className="mt-4 flex items-center justify-center text-xs text-gray-400">
              <span>Click for details</span>
              <ChevronRight className="h-3 w-3 ml-1" />
            </div>
          </div>
        </div>
      </article>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" 
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative w-full max-w-2xl h-[85vh] glass rounded-2xl border border-white/20 backdrop-blur-md animate-modal-enter overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg glass border border-white/20 text-white hover:bg-white/10 transition-colors z-10 animate-slide-in-from-right"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              <X className="h-4 w-4" />
            </button>

            {/* Scrollable content wrapper */}
            <div className="h-full overflow-y-auto custom-scrollbar">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center glass border border-white/20">
                    <ProjectIcon projectId={project.id} className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                      {project.featured && (
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-medium text-white">
                          <Star className="h-3 w-3" />
                          Featured
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Description Section */}
                <div className="mb-8">
                  <h3 className="text-base font-semibold text-blue-400 mb-4">Description</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tech Stack Section */}
                <div className="mb-8">
                  <h3 className="text-base font-semibold text-blue-400 mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <span 
                          key={tech} 
                          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 text-gray-300 rounded-md border border-white/20"
                        >
                          <IconComponent className="h-4 w-4" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Key Highlights Section */}
                <div className="mb-8">
                  <h3 className="text-base font-semibold text-blue-400 mb-4">Key Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                      <span>Built using modern {project.category} development practices</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                      <span>Integrated {project.technologies.length} different technologies</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                      <span>Part of ongoing computer engineering portfolio</span>
                    </li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-6 border-t border-white/10">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}