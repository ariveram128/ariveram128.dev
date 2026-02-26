"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "C / C++ / Embedded", level: 93 },
  { name: "Python / Django", level: 90 },
  { name: "Verilog / FPGA / RISC-V", level: 82 },
  { name: "IoT / RTOS / BLE / NFC", level: 85 },
  { name: "Hardware / PCB Design", level: 88 },
  { name: "Java / JavaFX", level: 85 },
  { name: "JavaScript / HTML / CSS", level: 78 },
  { name: "Security / Networking", level: 76 },
  { name: "Cloud / Databases", level: 74 },
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

function SkillBar({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
        <span className="text-dim transition-colors group-hover:text-body">
          {name}
        </span>
        <span className="text-faint">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden bg-line">
        <motion.div
          className="h-full bg-cyan"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
          style={{ boxShadow: "0 0 8px rgba(0,255,242,0.3)" }}
        />
      </div>
    </div>
  );
}

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
                SYSTEM DIAGNOSTICS
              </span>
            </div>

            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>

            <div className="mt-6 border-t border-line pt-4 font-mono text-[10px] text-faint">
              <span className="text-neon">●</span> ALL SYSTEMS NOMINAL
            </div>
          </div>

          {/* Tools & hardware */}
          <div className="mt-6 border border-line bg-surface p-6">
            <div className="mb-4 flex items-center gap-3 border-b border-line pb-3">
              <div className="h-2 w-2 rounded-full bg-cyan-mid" />
              <span className="font-mono text-[10px] tracking-widest text-faint">
                HARDWARE & TOOLS
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "STM32CubeIDE",
                "Keil",
                "KiCad",
                "Multisim",
                "ModelSim",
                "Oscilloscope",
                "nRF52840DK",
                "TM4C123",
                "PCB Assembly",
                "Wireshark",
                "Nmap",
                "Git",
                "LaTeX",
                "AWS S3",
                "PostgreSQL",
              ].map((tool) => (
                <span
                  key={tool}
                  className="border border-line-bright bg-base px-2 py-1 font-mono text-[10px] text-faint transition-colors hover:border-cyan/20 hover:text-cyan/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
