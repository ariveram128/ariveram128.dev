"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "HOME", index: "01" },
  { href: "/projects", label: "PROJECTS", index: "02" },
  { href: "/about", label: "ABOUT", index: "03" },
  { href: "/contact", label: "CONTACT", index: "04" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-line bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-xs text-faint">SYS://</span>
          <span className="font-display text-sm font-bold tracking-widest text-cyan glow-cyan">
            PORTFOLIO
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`relative px-3 py-1.5 font-mono text-xs tracking-wider transition-colors ${
                    isActive
                      ? "text-cyan"
                      : "text-dim hover:text-body"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-1 text-faint">[{item.index}]</span>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-x-0 -bottom-[17px] h-px bg-cyan"
                      style={{ boxShadow: "0 0 8px rgba(0,255,242,0.5)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-px w-5 bg-cyan"
            animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block h-px w-5 bg-cyan"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block h-px w-5 bg-cyan"
            animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line bg-base/95 backdrop-blur-md sm:hidden"
          >
            <div className="flex flex-col gap-3 px-6 py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-mono text-sm tracking-wider transition-colors ${
                      isActive ? "text-cyan glow-cyan" : "text-dim"
                    }`}
                  >
                    <span className="mr-2 text-faint">[{item.index}]</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
