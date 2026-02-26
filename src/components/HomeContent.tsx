"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BootSequence } from "@/components/BootSequence";
import { GlitchText } from "@/components/GlitchText";

const navCards = [
  {
    href: "/projects",
    title: "PROJECTS",
    description:
      "From autonomous robots to RISC-V CPUs — embedded systems, IoT, and full-stack builds.",
    index: "01",
  },
  {
    href: "/about",
    title: "ABOUT",
    description:
      "Background, technical skills, and the engineering journey so far.",
    index: "02",
  },
  {
    href: "/contact",
    title: "CONTACT",
    description: "Open a channel — let's build something together.",
    index: "03",
  },
];

export function HomeContent() {
  const [booted, setBooted] = useState(false);
  const handleBootComplete = useCallback(() => setBooted(true), []);

  return (
    <>
      <AnimatePresence>
        {!booted && <BootSequence onComplete={handleBootComplete} />}
      </AnimatePresence>

      {booted && (
        <motion.div
          className="mx-auto max-w-6xl px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Hero */}
          <section className="flex min-h-[70vh] flex-col justify-center py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="mb-4 font-mono text-xs tracking-widest text-faint">
                <span className="text-cyan">{">"}</span> SYSTEM READY //
                PORTFOLIO v1.0
              </div>

              <h1 className="mb-6 font-display text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
                <GlitchText className="text-cyan glow-cyan">MARVIN</GlitchText>
                <br />
                <span className="text-heading">RIVERA</span>
                <span className="text-cyan">.</span>
              </h1>

              <motion.p
                className="max-w-xl font-body text-lg leading-relaxed text-dim sm:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Computer Engineer building at the intersection of hardware and
                software. Embedded systems, IoT, and security. UVA &apos;26.
              </motion.p>

              {/* Status indicators */}
              <motion.div
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-faint">
                  STATUS:{" "}
                  <span className="text-neon glow-green">ONLINE</span>
                </span>
                <span className="text-faint">
                  ROLE:{" "}
                  <span className="text-dim">COMPUTER ENGINEER</span>
                </span>
                <span className="text-faint">
                  BASE:{" "}
                  <span className="text-dim">CHARLOTTESVILLE, VA</span>
                </span>
              </motion.div>
            </motion.div>
          </section>

          {/* Navigation Cards */}
          <section className="pb-24">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-line" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-faint">
                NAVIGATE
              </span>
              <div className="h-px flex-1 bg-line" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {navCards.map((card, i) => (
                <motion.div
                  key={card.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.12, duration: 0.5 }}
                >
                  <Link href={card.href} className="group block">
                    <div className="relative overflow-hidden border border-line bg-surface p-6 transition-all duration-300 hover:border-cyan/30 hover:bg-elevated">
                      <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-line-bright transition-colors group-hover:border-cyan/40" />
                      <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-line-bright transition-colors group-hover:border-cyan/40" />

                      <span className="font-mono text-[10px] text-faint">
                        [{card.index}]
                      </span>
                      <h2 className="mt-2 font-display text-xl font-semibold tracking-wide text-heading transition-colors group-hover:text-cyan">
                        {card.title}
                      </h2>
                      <p className="mt-2 font-body text-sm leading-relaxed text-dim">
                        {card.description}
                      </p>
                      <div className="mt-4 font-mono text-xs text-faint transition-colors group-hover:text-cyan">
                        → ENTER
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}
