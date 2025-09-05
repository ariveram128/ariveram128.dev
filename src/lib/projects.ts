import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "rentscan-nfc",
    title: "RentScan – Wireless NFC Tag Rental System",
    description: "NFC + BLE rental system on nRF52840DK with Zephyr RTOS; course project lead.",
    longDescription:
      "Designed NFC reader and BLE gateway firmware using Zephyr RTOS and nRF Connect SDK to manage rentals between devices. Implemented device pairing, tag scanning, and a simple rental database with robust state handling.",
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
      "Built a RISC-V RV32I core in Verilog including controller, datapath, and custom address decoding to interface RAM, ROM, and a memory-mapped UART. Verified modules in ModelSim and integrated top-level system.",
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
      "Architected and implemented authentication (Google OAuth2), role-based access control, rental/return logic, and S3-backed media storage. Deployed with a managed Postgres database.",
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
      "Led development of a TM4C123 game in an RTOS environment. Implemented sound design, game state logic, and joystick input processing; ensured deadlock-free concurrency.",
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
      "Investigated entity-specific biases in NLP models by analyzing response shifts to perturbed inputs varying nationality and gender attributes.",
    technologies: ["Python", "NLP"],
    imageUrl: "",
    featured: false,
    category: "software",
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();


