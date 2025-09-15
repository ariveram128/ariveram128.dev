import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "rentscan-nfc",
    title: "RentScan – Wireless NFC Tag Rental System",
    description: "NFC + BLE rental system on nRF52840DK with Zephyr RTOS; course project lead.",
    longDescription:
      "Comprehensive embedded rental system built on nRF52840DK using Zephyr RTOS. Features NFC tag scanning for item identification, BLE mesh networking for device communication, and real-time rental state management. Implemented secure device pairing protocols, robust error handling, and optimized power consumption for extended battery life.",
    technologies: ["nRF52840", "BLE", "NFC", "Zephyr RTOS", "nRF Connect SDK", "C"],
    imageUrl: "",
    featured: true,
    category: "embedded",
  },
  {
    id: "riscv-uart",
    title: "RISC-V CPU with Memory-Mapped UART",
    description: "Custom RV32I CPU in Verilog with multi-cycle datapath and UART peripheral.",
    longDescription:
      "Designed and implemented a complete RISC-V RV32I processor core in Verilog featuring multi-cycle datapath architecture, custom memory controller with address decoding for RAM/ROM interfaces, and memory-mapped UART peripheral. Includes comprehensive testbench suite, ModelSim verification, and optimized instruction execution pipeline for embedded system applications.",
    technologies: ["Verilog", "RISC-V", "UART", "ModelSim"],
    imageUrl: "",
    featured: true,
    category: "hardware",
  },
  {
    id: "skirentals-web",
    title: "SkiRentals Web Application",
    description: "Django + PostgreSQL full-stack app with OAuth2 and AWS S3 storage.",
    longDescription:
      "Comprehensive ski rental management platform built with Django framework featuring Google OAuth2 authentication, role-based access control system, and advanced inventory tracking. Includes automated rental/return workflows, real-time availability checking, customer management dashboard, and AWS S3 integration for secure file storage. Deployed with optimized PostgreSQL database and Redis caching for enhanced performance.",
    technologies: ["Django", "Python", "PostgreSQL", "AWS S3"],
    imageUrl: "",
    featured: true,
    category: "web",
  },
  {
    id: "candyninja",
    title: "Candy Ninja – TM4C123 Game",
    description: "RTOS-based microcontroller game with concurrent threads and input/audio.",
    longDescription:
      "Advanced embedded game development project on TM4C123 ARM Cortex-M4 microcontroller using real-time operating system. Features multi-threaded game engine with concurrent audio processing, responsive joystick input handling, and optimized graphics rendering. Implemented deadlock-free task scheduling, interrupt-driven I/O operations, and memory-efficient game state management for smooth 60fps gameplay performance.",
    technologies: ["TM4C123", "RTOS", "Keil", "C"],
    imageUrl: "",
    featured: false,
    category: "embedded",
  },
  {
    id: "nlp-bias-research",
    title: "Entity-Specific Biases in Text Classification",
    description: "First-author research with Perturbation Sensitivity Analysis on bias.",
    longDescription:
      "Comprehensive research study on bias detection in natural language processing models using novel Perturbation Sensitivity Analysis techniques. Developed automated bias evaluation framework to identify entity-specific discrimination patterns across gender, nationality, and demographic attributes. Implemented statistical significance testing, created comprehensive bias measurement metrics, and published findings on systematic fairness issues in state-of-the-art text classification systems.",
    technologies: ["Python", "NLP"],
    imageUrl: "",
    featured: false,
    category: "software",
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();


