"use client";

import { useState } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <>
          <span
            className="pointer-events-none absolute left-0 top-0 text-cyan opacity-70"
            style={{ animation: "glitch-1 0.3s infinite" }}
            aria-hidden="true"
          >
            {children}
          </span>
          <span
            className="pointer-events-none absolute left-0 top-0 text-amber opacity-70"
            style={{ animation: "glitch-2 0.3s infinite" }}
            aria-hidden="true"
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}
