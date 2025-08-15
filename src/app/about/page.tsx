import Image from "next/image";
import SkillsGrid from "@/components/SkillsGrid";

export const metadata = {
  title: "About | Marvin Rivera Martinez",
  description: "About Marvin Rivera Martinez – Computer Engineering student focused on embedded systems and web applications.",
};

export default function AboutPage() {
  return (
    <main className="pb-16">
      <section className="max-w-6xl mx-auto px-4 pt-10 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">About</h1>
          <p className="mt-4 text-foreground/80">
            I am a Computer Engineering student who enjoys building reliable systems that connect
            hardware and software. My recent work spans embedded devices, full-stack web
            applications, and tooling that improves developer productivity.
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold tracking-tight">Education</h2>
            <ul className="mt-3 text-sm space-y-2">
              <li>
                <span className="font-medium">University of Virginia</span> — B.S. in Computer Engineering, Minor in Data Science, Expected May 2026
              </li>
              <li className="text-foreground/70">GPA: 3.48/4.0 · Dean&#39;s List (Spring 2023, Spring 2024, Fall 2024, Spring 2025) · QuestBridge National Scholar</li>
              <li className="text-foreground/70">Relevant coursework: Data Structures, Embedded Systems, Digital Logic, Computer Architecture, Operating Systems, Networks</li>
            </ul>
          </div>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <div className="relative h-44 w-44 rounded-full overflow-hidden ring-2 ring-blue-200/50 dark:ring-blue-400/30 ring-offset-4 ring-offset-background">
            <Image src="/profile.jpg" alt="Marvin Rivera Martinez" fill className="object-cover" />
          </div>
        </div>
      </section>
      <SkillsGrid />
      <section className="max-w-6xl mx-auto px-4 pt-4">
        <h2 className="text-lg font-semibold tracking-tight">Interests</h2>
        <p className="mt-2 text-foreground/80">
          Embedded AI, edge computing, robotics, developer tools, user-centered design, and open-source.
        </p>
      </section>
    </main>
  );
}


