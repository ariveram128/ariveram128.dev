import Link from "next/link";

export const metadata = {
  title: "Resume | Marvin Rivera Martinez",
  description: "Web-optimized resume for Marvin Rivera Martinez with a downloadable PDF.",
};

export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 print:px-0">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Resume</h1>
        <Link
          href="/Marvin_Rivera_Resume.pdf"
          className="px-3 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 print:hidden"
        >
          Download PDF
        </Link>
      </div>

      <section className="mt-6 space-y-4">
        <header>
          <h2 className="text-lg font-semibold">Marvin Rivera Martinez</h2>
          <div className="text-sm text-foreground/80">Harrisonburg, VA · mrvnlxndrrvr2@gmail.com · linkedin.com/in/ariveram128 · github.com/ariveram128</div>
        </header>
        <p className="text-sm text-foreground/90">
          Computer Engineering student with hands-on experience in embedded systems, digital design, and full-stack development. Passionate about reliable products and rapid learning.
        </p>

        <div>
          <h3 className="font-semibold">Education</h3>
          <p className="text-sm">University of Virginia — B.S. in Computer Engineering, Minor in Data Science (Expected May 2026)</p>
          <p className="text-xs text-foreground/70">GPA: 3.48/4.0 · Dean&#39;s List (Spring 2023, Spring 2024, Fall 2024, Spring 2025) · QuestBridge National Scholar</p>
          <p className="text-xs text-foreground/70">Coursework: Data Structures, Embedded Systems, Digital Logic, Computer Architecture, Operating Systems, Networks</p>
        </div>

        <div>
          <h3 className="font-semibold">Leadership & Experience</h3>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Teaching Assistant, Computer Systems & Organization II — University of Virginia (Spring 2025)</li>
            <li>Hardware Integration Team Member — UVA Solar Car Team (Sep 2023 – Present)</li>
            <li>Active Member & Mentor — SHPE UVA Chapter (Sep 2022 – Present)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Projects</h3>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>RentScan – Wireless NFC Tag Rental System — nRF52840, BLE/NFC, Zephyr RTOS</li>
            <li>RISC-V CPU with Memory-Mapped UART — Verilog, ModelSim</li>
            <li>SkiRentals Web App — Django, PostgreSQL, AWS S3</li>
            <li>Candy Ninja — TM4C123, Keil, RTOS</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Skills</h3>
          <p className="text-sm">C/C++, Python, Java, JavaScript, SQL, Verilog, React, Next.js, Django, Zephyr RTOS, nRF Connect SDK, Git, KiCad, ModelSim, AWS S3, PostgreSQL</p>
        </div>
      </section>
    </main>
  );
}


