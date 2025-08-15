import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "ta-systems2",
    company: "University of Virginia",
    position: "Teaching Assistant, Computer Systems & Organization II",
    startDate: "2025-01",
    endDate: "2025-05",
    location: "Charlottesville, VA",
    description: [
      "Mentored students in architecture, concurrency, and security topics.",
      "Led weekly lab sections; held office hours on cache coherency and networking.",
    ],
    technologies: ["C", "Computer Architecture", "Networks"],
  },
  {
    id: "solar-car-hw",
    company: "UVA Solar Car Team",
    position: "Hardware Integration Team Member",
    startDate: "2023-09",
    location: "Charlottesville, VA",
    description: [
      "Collaborated on PCB designs for telemetry and steering systems using KiCad and STM32-based interfaces.",
      "Contributed to communication architecture for real-time in-vehicle data transmission.",
    ],
    technologies: ["KiCad", "STM32", "CAN", "PCB"],
  },
  {
    id: "shpe-mentor",
    company: "SHPE UVA Chapter",
    position: "Active Member & Mentor",
    startDate: "2022-09",
    location: "Charlottesville, VA",
    description: [
      "Selected as UVA representative for 2024 SHPE National Convention.",
      "Mentored first-year Computer Engineering students and prepared study materials.",
    ],
    technologies: ["Mentorship", "Leadership"],
  },
];


