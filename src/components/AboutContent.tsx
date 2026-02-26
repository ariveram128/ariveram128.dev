"use client";

import { motion } from "framer-motion";

const skillModules = [
  {
    category: "EMBEDDED & HARDWARE",
    accent: "text-cyan",
    items: [
      "C/C++",
      "Verilog",
      "RISC-V",
      "Zephyr RTOS",
      "STM32",
      "nRF52840DK",
      "TM4C123",
      "PCB Design",
      "KiCad",
      "Keil",
      "Signal Analysis",
    ],
  },
  {
    category: "SOFTWARE & WEB",
    accent: "text-amber",
    items: [
      "Python",
      "Django",
      "Java",
      "JavaFX",
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "MATLAB",
    ],
  },
  {
    category: "PROTOCOLS & IOT",
    accent: "text-neon",
    items: [
      "BLE / GATT",
      "NFC",
      "CAN Bus",
      "SPI",
      "I2C",
      "UART",
      "Memory-Mapped I/O",
    ],
  },
  {
    category: "SECURITY & NETWORKING",
    accent: "text-danger",
    items: [
      "Wireshark",
      "Nmap",
      "Metasploit",
      "Cryptography",
      "Penetration Testing",
    ],
  },
  {
    category: "TOOLS & INFRA",
    accent: "text-dim",
    items: [
      "Git",
      "VS Code",
      "ModelSim",
      "Multisim",
      "STM32CubeIDE",
      "nRF Connect SDK",
      "LaTeX",
      "AWS S3",
      "PostgreSQL",
      "SQLite",
      "Heroku",
    ],
  },
];

const timeline = [
  {
    period: "SPRING 2025 — PRESENT",
    role: "Teaching Assistant",
    org: "University of Virginia — CS 3130",
    description:
      "Mentoring students in advanced computer systems: concurrency, virtual memory, networking, and security. Leading lab sections and holding office hours for system-level programming.",
  },
  {
    period: "SEP 2023 — PRESENT",
    role: "Hardware Integration",
    org: "UVA Solar Car Team",
    description:
      "Collaborating on PCB designs for telemetry and steering systems in KiCad. Contributing to STM32-based steering interface with CAN protocols and real-time data transmission architecture.",
  },
  {
    period: "SEP 2022 — PRESENT",
    role: "Active Member & Mentor",
    org: "Society of Hispanic Professional Engineers",
    description:
      "Selected as UVA representative for the 2024 SHPE National Convention. Mentoring first-year Computer Engineering students and developing study materials.",
  },
  {
    period: "FALL 2024 — PRESENT",
    role: "Diversity Committee Member",
    org: "Engineering Student Council",
    description:
      "Contributing to diversity initiatives, organizing career panels, and supporting mentorship programs connecting students with industry professionals.",
  },
];

export function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-2 font-mono text-xs tracking-widest text-faint">
          <span className="text-cyan">{">"}</span> SYS://ABOUT
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          PERSONNEL <span className="text-cyan glow-cyan">DOSSIER</span>
        </h1>
      </motion.div>

      <div className="grid gap-16 lg:grid-cols-5">
        {/* Bio — left column */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="mb-8 border border-line bg-surface p-6">
            <div className="mb-4 flex items-center gap-3 border-b border-line pb-3">
              <div className="h-2 w-2 rounded-full bg-neon" />
              <span className="font-mono text-[10px] tracking-widest text-faint">
                BIO // MARVIN RIVERA MARTINEZ
              </span>
            </div>

            <div className="space-y-4 font-body text-sm leading-relaxed text-dim">
              <p>
                I&apos;m a Computer Engineering student at the{" "}
                <span className="text-body">University of Virginia</span> (Minor
                in Data Science, GPA: 3.5) graduating May 2026. QuestBridge
                National Scholar and Dean&apos;s List recipient.
              </p>
              <p>
                My work lives at the boundary of hardware and software — from
                designing{" "}
                <span className="text-body">RISC-V processors in Verilog</span>{" "}
                to building{" "}
                <span className="text-body">
                  autonomous robots with computer vision
                </span>{" "}
                to engineering{" "}
                <span className="text-body">
                  wireless IoT systems with Zephyr RTOS
                </span>
                . I care about the whole stack, from the transistor to the
                interface.
              </p>
              <p>
                Beyond engineering, I&apos;m passionate about mentoring and
                representation in STEM. I serve as a TA for CS 3130, mentor
                first-year students through SHPE, and work on hardware
                integration for the UVA Solar Car Team.
              </p>
              <p className="text-faint">
                Fluent in Spanish & English. Proficient in Italian.
              </p>
            </div>

            {/* Education callout */}
            <div className="mt-6 border-t border-line pt-4">
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <span className="text-faint">DEGREE</span>
                  <p className="mt-1 text-dim">B.S. Computer Engineering</p>
                </div>
                <div>
                  <span className="text-faint">MINOR</span>
                  <p className="mt-1 text-dim">Data Science</p>
                </div>
                <div>
                  <span className="text-faint">INSTITUTION</span>
                  <p className="mt-1 text-dim">University of Virginia</p>
                </div>
                <div>
                  <span className="text-faint">GRADUATION</span>
                  <p className="mt-1 text-cyan">May 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience timeline */}
          <div>
            <h2 className="mb-6 font-display text-sm font-semibold tracking-widest text-heading">
              EXPERIENCE & LEADERSHIP
            </h2>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="group relative border-l border-line pl-6"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-line-bright transition-colors group-hover:bg-cyan" />
                  <span className="font-mono text-[10px] text-faint">
                    {item.period}
                  </span>
                  <h3 className="mt-1 font-display text-sm font-semibold tracking-wide text-heading">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-cyan">{item.org}</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-dim">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills — right column */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <div className="border border-line bg-surface p-6">
            <div className="mb-6 flex items-center gap-3 border-b border-line pb-3">
              <div
                className="h-2 w-2 rounded-full bg-amber"
                style={{ animation: "pulse-line 2s infinite" }}
              />
              <span className="font-mono text-[10px] tracking-widest text-faint">
                LOADED MODULES
              </span>
            </div>

            <div className="space-y-6">
              {skillModules.map((mod, mi) => (
                <motion.div
                  key={mod.category}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: mi * 0.08, duration: 0.35 }}
                >
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className={`font-mono text-[10px] ${mod.accent}`}>
                      ●
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-faint">
                      {mod.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.items.map((item) => (
                      <span
                        key={item}
                        className="border border-line-bright bg-base px-2 py-1 font-mono text-[10px] text-dim transition-colors hover:border-cyan/25 hover:text-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 border-t border-line pt-4 font-mono text-[10px] text-faint">
              <span className="text-neon">●</span> ALL MODULES LOADED
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
