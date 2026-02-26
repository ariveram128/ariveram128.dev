"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const bootLines = [
  { text: "INITIALIZING SYSTEM...", delay: 0 },
  { text: "LOADING KERNEL v4.2.6", delay: 400 },
  { text: "ESTABLISHING NEURAL LINK...", status: "OK", delay: 800 },
  { text: "MOUNTING FILESYSTEM...", status: "OK", delay: 1150 },
  { text: "LOADING PORTFOLIO DATA...", status: "OK", delay: 1500 },
  { text: "RENDERING INTERFACE...", status: "OK", delay: 1850 },
  { text: "", delay: 2200 },
  { text: "WELCOME, OPERATOR.", highlight: true, delay: 2400 },
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("portfolio-booted")) {
        setDone(true);
        onComplete();
        return;
      }
    } catch {
      setDone(true);
      onComplete();
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    bootLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleCount(i + 1);

          if (i === bootLines.length - 1) {
            timers.push(
              setTimeout(() => {
                try {
                  sessionStorage.setItem("portfolio-booted", "1");
                } catch {}
                setDone(true);
                onComplete();
              }, 1000)
            );
          }
        }, line.delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (done) return null;

  const progress = (visibleCount / bootLines.length) * 100;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-lg px-8">
        <div className="mb-6 font-display text-[10px] tracking-[0.35em] text-cyan glow-cyan">
          SYS://BOOT
        </div>

        <div className="space-y-2">
          {bootLines.slice(0, visibleCount).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.12 }}
              className={`font-mono text-sm ${
                line.highlight ? "text-cyan glow-cyan" : "text-dim"
              }`}
            >
              {line.text && (
                <>
                  <span className="mr-2 text-faint">{">"}</span>
                  {line.text}
                  {line.status && (
                    <span className="ml-2 text-neon glow-green">
                      [{line.status}]
                    </span>
                  )}
                </>
              )}
            </motion.div>
          ))}

          {visibleCount > 0 && visibleCount < bootLines.length && (
            <div className="font-mono text-sm">
              <span className="mr-2 text-faint">{">"}</span>
              <span className="cursor-blink" />
            </div>
          )}
        </div>

        <div className="mt-8 h-px w-full overflow-hidden bg-line">
          <motion.div
            className="h-full bg-cyan"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.25 }}
            style={{ boxShadow: "0 0 10px rgba(0,255,242,0.5)" }}
          />
        </div>

        <div className="mt-3 font-mono text-[10px] text-faint">
          {Math.round(progress)}% COMPLETE
        </div>
      </div>
    </motion.div>
  );
}
