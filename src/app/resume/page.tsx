"use client";

import { useState } from "react";
import { Download, FileText, ExternalLink, Eye, Maximize2 } from "lucide-react";

export default function ResumePage() {
  const [pdfError, setPdfError] = useState(false);
  const resumePdfPath = "/Marvin_Rivera_Resume_August_2025.pdf";

  return (
    <main className="min-h-screen">
      {/* Compact Hero Section */}
      <section className="relative py-8 px-4 overflow-hidden">
        {/* Subtle gradient background like About page */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-4 left-10 opacity-20">
          <FileText className="h-6 w-6 text-blue-400 animate-float" />
        </div>
        <div className="absolute bottom-4 right-20 opacity-20">
          <Download className="h-5 w-5 text-purple-400 animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 backdrop-blur-sm mb-6 animate-slide-in-up">
              <FileText className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Professional Resume</span>
            </div>

            {/* Compact Title */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="gradient-text">Resume</span>
            </h1>

            {/* Compact Subtitle */}
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-6 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
              My comprehensive professional profile and technical expertise
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
              <a
                href={resumePdfPath}
                download="Marvin_Rivera_Resume.pdf"
                className="group relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden epic-hover pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </span>
              </a>
              
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-5 py-2.5 rounded-xl glass border border-white/20 text-foreground font-semibold overflow-hidden epic-hover hover:border-blue-300/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="glass rounded-2xl border border-white/20 backdrop-blur-md p-6 animate-slide-in-up" style={{ animationDelay: "0.8s" }}>
          {/* PDF Viewer Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20">
                <Eye className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Resume Preview</h2>
                <p className="text-sm text-gray-400">Interactive PDF viewer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.open(resumePdfPath, '_blank')}
                className="p-2 rounded-lg glass border border-white/20 text-blue-400 hover:border-blue-300/50 transition-all duration-300"
                title="Open in new window"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* PDF Embed */}
          <div className="relative w-full" style={{ height: "80vh" }}>
            {!pdfError ? (
              <iframe
                src={`${resumePdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-full rounded-xl border border-white/10"
                title="Resume PDF"
                onError={() => setPdfError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center glass rounded-xl border border-white/20">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">PDF Preview Not Available</h3>
                  <p className="text-gray-400 mb-6">The PDF file is not yet available for preview.</p>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-300">To add your resume PDF:</p>
                    <div className="text-left space-y-2 text-sm text-gray-400">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400">1.</span>
                        <span>Generate PDF from your LaTeX file: <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">pdflatex Marvin_Rivera_Resume_August_2025.tex</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400">2.</span>
                        <span>Move the generated PDF to: <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">public/Marvin_Rivera_Resume_August_2025.pdf</code></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400">3.</span>
                        <span>Refresh this page to see the PDF preview</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={resumePdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/20 text-blue-400 hover:border-blue-300/50 transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Try Direct Link
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}


