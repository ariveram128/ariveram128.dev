import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "PROJECTS // SYSTEM ARCHIVE",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-12">
        <div className="mb-2 font-mono text-xs tracking-widest text-faint">
          <span className="text-cyan">{">"}</span> SYS://PROJECTS
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          PROJECT <span className="text-cyan glow-cyan">ARCHIVE</span>
        </h1>
        <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-dim">
          A curated collection of experiments, applications, and open-source
          contributions.
        </p>

        <div className="mt-6 flex items-center gap-6 font-mono text-xs text-faint">
          <span>
            TOTAL:{" "}
            <span className="text-dim">{projects.length}</span>
          </span>
          <span>
            ACTIVE:{" "}
            <span className="text-neon">
              {projects.filter((p) => p.status === "active").length}
            </span>
          </span>
          <span>
            IN PROGRESS:{" "}
            <span className="text-amber">
              {projects.filter((p) => p.status === "wip").length}
            </span>
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </div>
    </div>
  );
}
