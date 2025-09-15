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
      "Designed and implemented a memory map system that unified access to multiple SPI and I2C flash memory devices. Developed low-level ReadByte() and WriteByte() functions to create a continuous address space across six different memory devices. Implemented a data acquisition system that sampled analog signals, processed data, and stored values to external memory. Conducted performance analysis measuring maximum sampling frequencies across different configurations with accuracy within 1.1% of theoretical calculations.",
    technologies: ["C", "SPI", "I2C", "Embedded Systems", "Data Acquisition", "Memory Management"],
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
      "Designed a DC-to-DC boost converter using a 555 timer to generate PWM signals for MOSFET switching. Calculated optimal component values through circuit analysis to achieve voltage step-up from 5V to 14V. Created PCB layout in Ultiboard with proper ground plane, trace routing, and component placement. Assembled and tested the physical circuit, verifying performance through oscilloscope measurements that matched theoretical calculations within 5% tolerance.",
    technologies: ["Circuit Design", "555 Timer", "PWM", "MOSFET", "PCB Design", "Ultiboard", "Oscilloscope"],
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
      "Designed and implemented components of a CRUD application using Java, JavaFX, and SQLite database. Developed authentication system with secure password handling for user accounts. Created comprehensive test cases to verify system functionality and identify potential issues. Structured optimized database queries for efficient data retrieval in course review operations.",
    technologies: ["Java", "JavaFX", "SQLite", "Authentication", "CRUD", "Testing"],
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
      "Executed computer simulations to validate Sallen-Key filter designs, matching experimental results to theoretical models. Analyzed frequency response characteristics of filters with measured corner frequencies at 745Hz and 500Hz. Performed signal analysis on audio tracks to determine optimal frequency cutoff points for the system. Compiled simulation results and authored technical documentation sections for the final project report.",
    technologies: ["Filter Design", "Sallen-Key", "Frequency Analysis", "Simulation", "Signal Processing"],
    imageUrl: "",
    githubUrl: "",
    featured: false,
    category: "hardware",
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();


