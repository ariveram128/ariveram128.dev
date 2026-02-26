export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  year: string;
  status: "active" | "archived" | "wip";
}

export const projects: Project[] = [
  {
    id: "talos",
    title: "TALOS",
    description:
      "Autonomous Jenga-playing robot achieving 73% gameplay success rate. Architected MVC GUI with thread-safe event bus, reverse-engineered Dobot SDK serial protocols for Linux control, and built a vision pipeline with Intel RealSense D405 reaching 94.84% block detection accuracy.",
    tech: ["Python", "OpenCV", "Intel RealSense", "Dobot SDK", "Linux"],
    link: "https://github.com/ariveram128",
    year: "2025",
    status: "active",
  },
  {
    id: "riscv-cpu",
    title: "RISC-V CPU",
    description:
      "Complete RV32I processor with memory-mapped UART designed in Verilog. Features multi-cycle datapath and controller, 4KB RAM, 8KB ROM, custom address decoder, and a UART peripheral with baud rate generator. Verified via ModelSim testbench transmitting 'Hello, world!' over UART.",
    tech: ["Verilog", "RISC-V", "ModelSim", "UART"],
    year: "2024",
    status: "active",
  },
  {
    id: "rentscan",
    title: "RENTSCAN",
    description:
      "Wireless NFC tag rental management system using nRF52840DK devices. Engineered firmware with Zephyr RTOS and nRF Connect SDK implementing NFC reader, BLE GATT services for data transmission, and a simulated backend with rental database management.",
    tech: ["Zephyr RTOS", "nRF52840DK", "BLE", "NFC", "C"],
    year: "2025",
    status: "active",
  },
  {
    id: "skirentals",
    title: "SKIRENTALS",
    description:
      "Full-stack web application for cataloging and lending ski equipment. Features Google OAuth2 authentication, role-based access control, AWS S3 image uploads, rental/pricing logic, and CI/CD pipelines for Heroku deployment.",
    tech: ["Django", "PostgreSQL", "AWS S3", "OAuth2", "Heroku"],
    link: "https://github.com/ariveram128",
    year: "2025",
    status: "active",
  },
  {
    id: "candy-ninja",
    title: "CANDY NINJA",
    description:
      "Interactive embedded game on TM4C123 microcontroller with RTOS. Engineered sound design, game state logic, deadlock prevention for sprite movement, joystick input processing, and LCD rendering across multiple synchronized threads.",
    tech: ["C", "TM4C123", "RTOS", "Keil", "ADC"],
    year: "2025",
    status: "active",
  },
  {
    id: "nlp-bias-research",
    title: "NLP BIAS RESEARCH",
    description:
      "First-author research investigating entity-specific biases in text classification models across nationality, gender, and anthroponymic attributes. Extended the Perturbation Sensitivity Analysis framework with custom corpora and evaluation metrics.",
    tech: ["Python", "NLP", "BERT", "DistilBERT", "Statistics"],
    year: "2025",
    status: "active",
  },
  {
    id: "memory-integration",
    title: "MEMORY INTEGRATION SYSTEM",
    description:
      "Unified memory map system spanning multiple SPI and I2C flash memory devices. Implemented data acquisition, analog signal sampling, and performance analysis achieving accuracy within 1.1% of theoretical calculations.",
    tech: ["C", "SPI", "I2C", "Embedded", "Signal Processing"],
    year: "2024",
    status: "archived",
  },
  {
    id: "boost-converter",
    title: "BOOST CONVERTER",
    description:
      "DC-to-DC boost converter stepping 5V to 14V using a 555 timer for PWM-driven MOSFET switching. Designed PCB layout in Ultiboard with proper ground plane and trace routing. Performance verified within 5% tolerance.",
    tech: ["KiCad", "Ultiboard", "PCB Design", "Circuit Analysis"],
    year: "2023",
    status: "archived",
  },
];
