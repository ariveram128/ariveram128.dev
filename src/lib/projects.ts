import type { Project } from "@/types";

export const projects: Project[] = [
  // Featured Projects (Most Recent & Impactful)
  {
    id: "skirentals-web",
    title: "SkiRentals Web Application",
    description: "Full-stack ski rental platform with Django, PostgreSQL, and AWS S3; led architecture and development.",
    longDescription:
      "Developed and deployed a full-stack web application for ski equipment rental management featuring comprehensive inventory tracking, user authentication, and cloud storage integration.",
    technologies: ["Django", "Python", "PostgreSQL", "AWS S3", "HTML", "CSS", "JavaScript", "Heroku", "OAuth2"],
    keyHighlights: [
      "Spearheaded architecture design and database schema for equipment cataloging system",
      "Engineered Google OAuth2 authentication and role-based access control for secure user management", 
      "Integrated AWS S3 for image uploads and customized Django admin interface with thumbnails",
      "Configured CI/CD pipelines for automated Heroku deployment with unit testing"
    ],
    imageUrl: "",
    githubUrl: "",
    liveUrl: "",
    featured: true,
    category: "web",
  },
  {
    id: "rentscan-nfc",
    title: "RentScan – Wireless NFC Tag Rental System",
    description: "Wireless rental management system with NFC and BLE on nRF52840DK; project lead and primary developer.",
    longDescription:
      "Led development of a wireless rental management system using NFC tag scanning and BLE communication for real-time rental tracking and status updates.",
    technologies: ["nRF52840", "BLE", "NFC", "Zephyr RTOS", "nRF Connect SDK", "C", "GATT", "NTAG216"],
    keyHighlights: [
      "Architected NFC and BLE communication between nRF52840DK devices for wireless rental tracking",
      "Engineered firmware using Zephyr RTOS and nRF Connect SDK with NTAG216 tag interaction",
      "Implemented BLE GATT services for data transmission and simulated backend database management",
      "Directed system design with rental expiration logic and command-line interface for device control"
    ],
    imageUrl: "",
    githubUrl: "",
    featured: true,
    category: "embedded",
  },
  {
    id: "candyninja",
    title: "Candy Ninja – TM4C123 Game",
    description: "Interactive RTOS microcontroller game with advanced deadlock prevention and multi-threaded architecture.",
    longDescription:
      "Developed an interactive microcontroller game on TM4C123 featuring multi-threaded RTOS architecture, custom graphics, and responsive input handling.",
    technologies: ["TM4C123", "RTOS", "Keil", "C", "ADC", "GPIO", "LCD"],
    keyHighlights: [
      "Led core development with advanced deadlock prevention algorithm for sprite movement synchronization",
      "Engineered multi-threaded RTOS environment for concurrent game logic, LCD rendering, and peripheral management",
      "Implemented joystick input processing, sound design, and game state logic (restart, game over mechanics)",
      "Created custom bitmaps and optimized graphics rendering for smooth 60fps gameplay performance"
    ],
    imageUrl: "",
    githubUrl: "",
    featured: true,
    category: "embedded",
  },
  {
    id: "riscv-uart",
    title: "RISC-V CPU with Memory-Mapped UART",
    description: "Complete RISC-V processor system in Verilog with custom UART peripheral and memory architecture.",
    longDescription:
      "Designed and implemented a complete RISC-V RV32I processor system in Verilog with custom memory-mapped UART communication and comprehensive verification.",
    technologies: ["Verilog", "RISC-V", "UART", "ModelSim", "Assembly", "RAM", "ROM"],
    keyHighlights: [
      "Designed multi-cycle datapath and controller for RV32I core with custom address decoder",
      "Integrated custom RAM (4KB), ROM (8KB), and memory-mapped UART (8-E-1 format) peripheral",
      "Implemented UART with transmit/receive registers, status flags (TxRDY, RxRDY, RxParityErr), and baud rate generator",
      "Created comprehensive ModelSim verification environment with RISC-V assembly 'Hello, world!' program"
    ],
    imageUrl: "",
    githubUrl: "",
    featured: true,
    category: "hardware",
  },
  {
    id: "nlp-bias-research",
    title: "Entity-Specific Biases in Text Classification Models",
    description: "First-author research investigating NLP model biases using Perturbation Sensitivity Analysis framework.",
    longDescription:
      "Led independent research on entity-specific biases in NLP models, developing novel evaluation frameworks and analysis methods for bias detection in text classification.",
    technologies: ["Python", "NLP", "Research", "Machine Learning", "Statistical Analysis", "Bias Detection"],
    keyHighlights: [
      "Adapted Perturbation Sensitivity Analysis (PSA) framework for quantifying bias across nationality, gender, and names",
      "Constructed custom corpora using Tatoeba, Wikipedia, RtGender, and Python names-dataset for bias evaluation",
      "Analyzed state-of-the-art models (toxic-bert, distilbert-sst-2) revealing significant differential treatment patterns",
      "Co-authored research paper with statistical validation and novel evaluation metrics (ScoreSens, ScoreDev, LabelDist)"
    ],
    imageUrl: "",
    githubUrl: "",
    featured: true,
    category: "software",
  },

  // Additional Engineering Projects
  {
    id: "memory-data-logging",
    title: "Memory Integration and Data Logging System",
    description: "Advanced embedded system unifying multiple SPI and I2C flash memory devices with data acquisition.",
    longDescription:
      "Advanced embedded system with unified memory mapping across multiple flash devices and real-time data acquisition capabilities.",
    technologies: ["C", "SPI", "I2C", "Embedded Systems", "Data Acquisition", "Memory Management"],
    keyHighlights: [
      "Designed memory map system unifying access to six different SPI and I2C flash memory devices",
      "Developed low-level ReadByte() and WriteByte() functions creating continuous address space architecture",
      "Implemented real-time data acquisition system sampling analog signals and storing to external memory",
      "Achieved performance analysis accuracy within 1.1% of theoretical calculations across multiple configurations"
    ],
    imageUrl: "",
    githubUrl: "",
    featured: false,
    category: "embedded",
  },
  {
    id: "boost-converter",
    title: "DC-to-DC Boost Converter Circuit",
    description: "Custom boost converter design with 555 timer PWM control, achieving 5V to 14V step-up conversion.",
    longDescription:
      "Power electronics project featuring custom boost converter circuit with 555 timer PWM control and comprehensive PCB design.",
    technologies: ["Circuit Design", "555 Timer", "PWM", "MOSFET", "PCB Design", "Ultiboard", "Oscilloscope"],
    keyHighlights: [
      "Designed 555 timer-based PWM generation system for MOSFET switching control in boost topology",
      "Calculated optimal component values achieving precise 5V to 14V voltage step-up conversion",
      "Created professional PCB layout in Ultiboard with proper ground plane and optimized trace routing",
      "Verified circuit performance with oscilloscope measurements matching theoretical calculations within 5% tolerance"
    ],
    imageUrl: "",
    githubUrl: "",
    featured: false,
    category: "hardware",
  },
  {
    id: "uva-course-review",
    title: "UVA Course Review System",
    description: "CRUD application for course reviews with secure authentication and efficient database operations.",
    longDescription:
      "Full-stack desktop application for university course reviews featuring secure user authentication and optimized database operations.",
    technologies: ["Java", "JavaFX", "SQLite", "Authentication", "CRUD", "Testing"],
    keyHighlights: [
      "Designed and implemented complete CRUD application architecture using Java and JavaFX for desktop interface",
      "Developed secure authentication system with encrypted password handling and user account management",
      "Created comprehensive test suite for system functionality verification and edge case identification",
      "Optimized SQLite database queries for efficient course review data retrieval and storage operations"
    ],
    imageUrl: "",
    githubUrl: "",
    featured: false,
    category: "software",
  },
  {
    id: "audio-spectrum-analyzer",
    title: "Audio Spectrum Analyzer",
    description: "Filter design and simulation project with Sallen-Key topology and frequency response analysis.",
    longDescription:
      "Signal processing project implementing Sallen-Key filter topology with comprehensive frequency response analysis and validation.",
    technologies: ["Filter Design", "Sallen-Key", "Frequency Analysis", "Simulation", "Signal Processing"],
    keyHighlights: [
      "Executed computer simulations validating Sallen-Key filter designs with experimental-theoretical model correlation",
      "Analyzed frequency response characteristics measuring precise corner frequencies at 745Hz and 500Hz",
      "Performed comprehensive signal analysis on audio tracks determining optimal frequency cutoff specifications",
      "Compiled detailed simulation results and authored technical documentation for final project deliverables"
    ],
    imageUrl: "",
    githubUrl: "",
    featured: false,
    category: "hardware",
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();


