import type { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "C/C++", category: "programming", level: 4 },
  { name: "Java", category: "programming", level: 3 },
  { name: "Python", category: "programming", level: 4 },
  { name: "JavaScript", category: "programming", level: 3 },
  { name: "SQL", category: "programming", level: 3 },
  { name: "MATLAB", category: "programming", level: 3 },
  { name: "Verilog", category: "hardware", level: 3 },
  { name: "PCB Design (KiCad)", category: "hardware", level: 3 },
  { name: "Oscilloscope/Logic Analyzer", category: "hardware", level: 3 },
  { name: "TM4C123, nRF52840DK", category: "hardware", level: 3 },
  { name: "Zephyr RTOS", category: "frameworks", level: 3 },
  { name: "nRF Connect SDK", category: "frameworks", level: 3 },
  { name: "Django", category: "frameworks", level: 3 },
  { name: "React", category: "frameworks", level: 4 },
  { name: "Next.js", category: "frameworks", level: 4 },
  { name: "Tailwind CSS", category: "frameworks", level: 4 },
  { name: "Git/GitHub", category: "tools", level: 5 },
  { name: "STM32CubeIDE / Keil", category: "tools", level: 3 },
  { name: "ModelSim", category: "tools", level: 3 },
  { name: "AWS S3", category: "tools", level: 3 },
  { name: "PostgreSQL/SQLite", category: "tools", level: 3 },
];

export const skillCategories: Skill["category"][] = [
  "programming",
  "hardware",
  "tools",
  "frameworks",
];


