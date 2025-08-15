import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/lib/experience";

export const metadata = {
  title: "Experience | Marvin Rivera",
  description: "Internships, research, and roles held by Marvin Rivera.",
};

export default function ExperiencePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Experience</h1>
      <section className="mt-6">
        {experiences.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}


