import ProjectsClient from "@/components/ProjectsClient";

export const metadata = {
  title: "Projects | Marvin Rivera",
  description: "Selected hardware, embedded, and software projects by Marvin Rivera.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Projects</h1>
      <ProjectsClient />
    </main>
  );
}


