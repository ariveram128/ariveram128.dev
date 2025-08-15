"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, allTechnologies } from "@/lib/projects";
import type { Project } from "@/types";

type Category = Project["category"] | "All";

export default function ProjectsClient() {
  const [techFilter, setTechFilter] = useState<string>("All");
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const byTech = techFilter === "All" || p.technologies.includes(techFilter);
      const byCat = category === "All" || p.category === category;
      return byTech && byCat;
    });
  }, [techFilter, category]);

  const categories: Category[] = ["All", "hardware", "software", "web", "embedded"];

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <select
          aria-label="Filter by technology"
          className="px-3 py-2 rounded-md border border-black/10 dark:border-white/15 bg-transparent"
          value={techFilter}
          onChange={(e) => setTechFilter(e.target.value)}
        >
          <option>All</option>
          {allTechnologies.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                category === c
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}


