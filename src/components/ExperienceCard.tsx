import type { Experience } from "@/types";

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="relative pl-6 pb-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-600" />
      <div className="absolute left-1.5 top-3 bottom-0 w-px bg-black/10 dark:bg-white/15" />
      <div className="rounded-md border border-black/10 dark:border-white/15 p-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold tracking-tight">
            {item.position} · {item.company}
          </h3>
          <span className="text-xs text-foreground/70 whitespace-nowrap">
            {item.startDate} – {item.endDate ?? "Present"}
          </span>
        </div>
        <div className="text-sm text-foreground/70">{item.location}</div>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
          {item.description.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.technologies.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300 border border-blue-200/60">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}


