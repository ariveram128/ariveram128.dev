"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/types";
import { Github, ExternalLink, Zap, Star, Calendar, MapPin, X, ChevronRight, Eye, RotateCcw } from "lucide-react";
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

            {/* Project icon */}
            <div className="relative h-full overflow-hidden">
              <div className="absolute inset-0">
                <ProjectIcon projectId={project.id} className="h-full w-full" />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-gray-200 line-clamp-2 mb-3">{project.description}</p>
                
                {/* Interactive hints */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-blue-300 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-3 w-3" />
                    <span>Hover to flip</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-purple-300 opacity-70 group-hover:opacity-100 transition-opacity">
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
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/20 backdrop-blur-md p-6 animate-modal-enter" 
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

            {/* Modal content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4 animate-slide-in-from-left" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden animate-scale-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                  <ProjectIcon projectId={project.id} className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-white animate-slide-in-from-top" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                      {project.title}
                    </h2>
                    {project.featured && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-medium text-white animate-bounce-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                        <Star className="h-3 w-3" />
                        Featured
                      </div>
                    )}
                  </div>
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${categoryColors[project.category]} animate-slide-in-from-bottom`} style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                    <span>{categoryIcons[project.category]}</span>
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="animate-slide-in-from-left" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                <h3 className="text-lg font-semibold text-white mb-3 animate-fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
                  Description
                </h3>
                <div className="overflow-hidden">
                  <p className="text-gray-300 leading-relaxed animate-text-reveal" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="animate-slide-in-from-right" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
                <h3 className="text-lg font-semibold text-white mb-3 animate-fade-in-up" style={{ animationDelay: "1.0s", animationFillMode: "both" }}>
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300 animate-slide-in-from-left" style={{ animationDelay: "1.1s", animationFillMode: "both" }}>
                    <Zap className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0 animate-bounce-in" style={{ animationDelay: "1.2s", animationFillMode: "both" }} />
                    <span className="animate-text-reveal" style={{ animationDelay: "1.3s", animationFillMode: "both" }}>
                      Built using modern {project.category} development practices
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 animate-slide-in-from-left" style={{ animationDelay: "1.3s", animationFillMode: "both" }}>
                    <Star className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0 animate-bounce-in" style={{ animationDelay: "1.4s", animationFillMode: "both" }} />
                    <span className="animate-text-reveal" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
                      Integrated {project.technologies.length} different technologies
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 animate-slide-in-from-left" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
                    <Calendar className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0 animate-bounce-in" style={{ animationDelay: "1.6s", animationFillMode: "both" }} />
                    <span className="animate-text-reveal" style={{ animationDelay: "1.7s", animationFillMode: "both" }}>
                      Part of ongoing computer engineering portfolio
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="animate-slide-in-from-bottom" style={{ animationDelay: "1.8s", animationFillMode: "both" }}>
                <h3 className="text-lg font-semibold text-white mb-3 animate-fade-in-up" style={{ animationDelay: "1.9s", animationFillMode: "both" }}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 text-sm font-medium rounded-lg glass border border-white/20 text-blue-400 hover:border-blue-300/50 transition-all duration-300 animate-scale-in-stagger"
                      style={{ 
                        animationDelay: `${2.0 + (index * 0.1)}s`, 
                        animationFillMode: "both" 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-white/10 animate-slide-in-from-bottom" style={{ animationDelay: "2.5s", animationFillMode: "both" }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 animate-slide-in-from-left"
                    style={{ animationDelay: "2.6s", animationFillMode: "both" }}
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
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 animate-slide-in-from-right"
                    style={{ animationDelay: "2.7s", animationFillMode: "both" }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}