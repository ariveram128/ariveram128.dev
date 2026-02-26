"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  year: string;
  status: "active" | "archived" | "wip";
  index: number;
}

const statusMap = {
  active: { color: "text-neon", label: "ACTIVE" },
  archived: { color: "text-faint", label: "ARCHIVED" },
  wip: { color: "text-amber", label: "IN PROGRESS" },
};

export function ProjectCard({
  title,
  description,
  tech,
  link,
  year,
  status,
  index,
}: ProjectCardProps) {
  const { color, label } = statusMap[status];

  const Wrapper = link ? motion.a : motion.div;
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative block overflow-hidden border border-line bg-surface p-6 transition-all duration-300 hover:border-cyan/30 hover:bg-elevated"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.008 }}
    >
      {/* Scanline hover overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="h-full w-full"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,242,0.015) 2px, rgba(0,255,242,0.015) 4px)",
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-line-bright transition-colors group-hover:border-cyan/40" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-line-bright transition-colors group-hover:border-cyan/40" />

      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <span className="font-mono text-[10px] text-faint">
            PRJ-{String(index + 1).padStart(3, "0")}
          </span>
          <h3 className="mt-1 font-display text-base font-semibold tracking-wide text-heading transition-colors group-hover:text-cyan sm:text-lg">
            {title}
          </h3>
        </div>
        <div className="text-right">
          <span className={`font-mono text-[10px] ${color}`}>● {label}</span>
          <p className="mt-0.5 font-mono text-[10px] text-faint">{year}</p>
        </div>
      </div>

      <p className="mb-4 font-body text-sm leading-relaxed text-dim">
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="border border-line-bright bg-base px-2 py-0.5 font-mono text-[10px] text-faint transition-colors group-hover:border-cyan/20 group-hover:text-cyan/60"
          >
            {t}
          </span>
        ))}
      </div>

      {link && (
        <div className="mt-4 flex items-center gap-1 font-mono text-xs text-faint transition-colors group-hover:text-cyan">
          <span>→</span>
          <span>VIEW PROJECT</span>
        </div>
      )}
    </Wrapper>
  );
}
