"use client";

import Image from "next/image";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center group`}>
      {/* Main logo container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105">
        
        {/* Logo image */}
        <Image
          src="/logo.png"
          alt="Marvin Rivera Martinez Logo"
          width={48}
          height={48}
          className="w-full h-full object-cover rounded-2xl"
          priority
        />
        
        {/* Hover overlay effects */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-600/40 blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 -z-10 scale-125" />
      
      {/* Pulse ring effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 -z-10" />
    </div>
  );
}
