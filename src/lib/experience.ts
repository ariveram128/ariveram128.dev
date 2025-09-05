import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "ta-systems2",
    company: "University of Virginia",
    position: "Teaching Assistant, Computer Systems & Organization II",
    startDate: "2025-01",
    location: "Charlottesville, VA",
    description: [
      "Invited to return as Teaching Assistant for a second semester based on strong performance and positive student feedback.",
      "Mentor and provide academic support to over 30 undergraduate students by leading weekly office hours and lab sessions.",
      "Grade homework, projects, and exams, providing constructive feedback to improve student understanding of complex concepts.",
      "Collaborate with the professor to improve course materials and address student feedback.",
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
      "Designed schematic capture and PCB layout for over 10 custom boards using KiCad for critical vehicle systems.",
      "Compiled and verified BOM for all team hardware, identifying over 200+ unique electronic components for procurement.",
      "Assisted in designing CAN bus communication architecture for reliable data links between motor controller and driver interface.",
      "Performed hardware migration by removing and documenting wiring connections from previous car model for new competition vehicle.",
    ],
    technologies: ["KiCad", "STM32", "CAN Bus", "PCB Layout", "Schematic Capture", "BOM Management"],
  },
  {
    id: "shpe-mentor",
    company: "SHPE UVA Chapter",
    position: "Mentor & Chapter Member",
    startDate: "2022-09",
    location: "Charlottesville, VA",
    description: [
      "Selected as a chapter representative for the 2024 SHPE National Convention based on active involvement and leadership potential.",
      "Mentor a first-year Computer Engineering student, providing academic guidance, career advice, and support for their transition to university life.",
      "Develop and distribute study materials for foundational courses to improve mentee preparedness for exams and projects.",
      "Represented the chapter at the UVA Student Activities Fair, engaging with over 100+ prospective members to drive chapter growth and visibility.",
    ],
    technologies: ["Mentorship", "Leadership"],
  },
  {
    id: "olive-garden",
    company: "Olive Garden",
    position: "Server & Returning Team Member",
    startDate: "2021-06",
    endDate: "2025-08",
    location: "Harrisonburg, VA",
    description: [
      "Consistently rehired across multiple summers (2021-2022, 2023, 2024, 2025) demonstrating exceptional performance and reliability.",
      "Maintained high customer satisfaction ratings through attentive service and problem-solving skills.",
      "Developed strong communication and multitasking abilities in fast-paced, high-pressure environment.",
    ],
    technologies: ["Customer Service", "Communication", "Team Collaboration"],
  },
  {
    id: "shift-manager",
    company: "El Charro Mexican Restaurant",
    position: "Shift Manager",
    startDate: "2020-10",
    endDate: "2021-06",
    location: "Harrisonburg, VA",
    description: [
      "Managed closing operations for high-revenue restaurant generating $2,000-$10,000+ in daily sales.",
      "Handled cash management responsibilities including drawer reconciliation, deposit preparation, and tip distribution to staff.",
      "Led and supervised team of employees during high-volume service periods and end-of-shift procedures.",
      "Trained new staff members on procedures, safety protocols, and customer service standards.",
    ],
    technologies: ["Leadership", "Training", "Operations Management"],
  },
];


