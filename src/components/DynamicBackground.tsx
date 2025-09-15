"use client";

import { useEffect, useState, useRef } from "react";

export default function DynamicBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setIsReady(true);
    
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (!isReady) return null;

  // Calculate smooth scroll progress (0-1)
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

  // Smooth interpolation function
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  // Define gradient colors with smooth blending
  const getGradientStyle = (progress: number) => {
    // Define color stops as RGB values for smooth interpolation
    const colorStops = [
      { pos: 0.0, colors: { from: [30, 27, 75], via: [15, 23, 42], to: [59, 7, 100] } }, // Hero: blue-950 to purple-950
      { pos: 0.25, colors: { from: [59, 7, 100], via: [30, 27, 75], to: [131, 24, 67] } }, // About: purple to pink
      { pos: 0.5, colors: { from: [30, 27, 75], via: [22, 78, 99], to: [88, 28, 135] } }, // Projects: blue to cyan to purple
      { pos: 0.75, colors: { from: [88, 28, 135], via: [15, 23, 42], to: [30, 27, 75] } }, // Experience: purple to blue
      { pos: 1.0, colors: { from: [59, 7, 100], via: [131, 24, 67], to: [30, 27, 75] } }, // Contact: purple to pink
    ];

    // Find the two closest color stops
    let fromStop = colorStops[0];
    let toStop = colorStops[1];
    
    for (let i = 0; i < colorStops.length - 1; i++) {
      if (progress >= colorStops[i].pos && progress <= colorStops[i + 1].pos) {
        fromStop = colorStops[i];
        toStop = colorStops[i + 1];
        break;
      }
    }

    // Calculate interpolation factor
    const range = toStop.pos - fromStop.pos;
    const factor = range === 0 ? 0 : (progress - fromStop.pos) / range;

    // Apply easing for ultra-smooth transitions
    const easedFactor = factor * factor * (3.0 - 2.0 * factor); // Smoothstep function

    // Interpolate RGB values
    const fromR = lerp(fromStop.colors.from[0], toStop.colors.from[0], easedFactor);
    const fromG = lerp(fromStop.colors.from[1], toStop.colors.from[1], easedFactor);
    const fromB = lerp(fromStop.colors.from[2], toStop.colors.from[2], easedFactor);

    const viaR = lerp(fromStop.colors.via[0], toStop.colors.via[0], easedFactor);
    const viaG = lerp(fromStop.colors.via[1], toStop.colors.via[1], easedFactor);
    const viaB = lerp(fromStop.colors.via[2], toStop.colors.via[2], easedFactor);

    const toR = lerp(fromStop.colors.to[0], toStop.colors.to[0], easedFactor);
    const toG = lerp(fromStop.colors.to[1], toStop.colors.to[1], easedFactor);
    const toB = lerp(fromStop.colors.to[2], toStop.colors.to[2], easedFactor);

    return {
      background: `linear-gradient(to bottom left, 
        rgba(${Math.round(fromR)}, ${Math.round(fromG)}, ${Math.round(fromB)}, 0.6), 
        rgba(${Math.round(viaR)}, ${Math.round(viaG)}, ${Math.round(viaB)}, 0.8), 
        rgba(${Math.round(toR)}, ${Math.round(toG)}, ${Math.round(toB)}, 0.4))`
    };
  };

  const gradientStyle = getGradientStyle(scrollProgress);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Ultra-smooth dynamic gradient overlay */}
      <div 
        className="absolute inset-0 transition-all duration-75 ease-linear"
        style={gradientStyle}
      />
      
      {/* Subtle animated particles/dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "3s" }} />
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>
      
      {/* Subtle mesh pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 25%, rgba(96, 165, 250, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 25% 75%, rgba(167, 139, 250, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(219, 39, 119, 0.3) 0%, transparent 50%)`,
          backgroundSize: "400px 400px",
          animation: "float-bg 20s ease-in-out infinite"
        }}
      />
    </div>
  );
}
