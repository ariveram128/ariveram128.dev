"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/20 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="group flex items-center gap-2 font-bold text-xl tracking-tight epic-hover">
          <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="gradient-text">Marvin Rivera Martinez</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {route.label}
                {/* Active indicator */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-2">
          <a
            className="p-2.5 rounded-xl glass border border-white/20 hover:border-blue-300/50 transition-all duration-300 epic-hover"
            href="https://github.com/ariveram128"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            className="p-2.5 rounded-xl glass border border-white/20 hover:border-blue-300/50 transition-all duration-300 epic-hover"
            href="https://linkedin.com/in/ariveram128"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            className="p-2.5 rounded-xl glass border border-white/20 hover:border-blue-300/50 transition-all duration-300 epic-hover"
            href="mailto:mrvnlxndrrvr2@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile navigation */}
      <nav className="md:hidden border-t border-white/20 glass">
        <div className="px-4 py-3 flex gap-6 overflow-x-auto">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`relative text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {route.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`} />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}


