import type { Experience } from "@/types";
import { MapPin, Calendar, Briefcase, Award, Users } from "lucide-react";

const getCompanyIcon = (company: string) => {
  if (company.toLowerCase().includes("university")) return Briefcase;
  if (company.toLowerCase().includes("solar")) return Award;
  if (company.toLowerCase().includes("shpe")) return Users;
  return Briefcase;
};

export default function ExperienceCard({ item }: { item: Experience }) {
  const IconComponent = getCompanyIcon(item.company);
  
  return (
    <article className="relative pl-8 pb-2 group">
      {/* Timeline Dot with Glow */}
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50 border-2 border-white/20 group-hover:shadow-blue-400/70 transition-all duration-300" />
      
      {/* Timeline Line */}
      <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
      
      {/* Content Card */}
      <div className="glass rounded-xl border border-white/20 backdrop-blur-md p-6 hover:border-blue-300/50 transition-all duration-300 epic-hover group-hover:shadow-lg group-hover:shadow-blue-500/10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20">
              <IconComponent className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight text-white group-hover:text-blue-300 transition-colors">
                {item.position}
              </h3>
              <div className="text-blue-400 font-semibold">
                {item.company}
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full glass border border-white/20 text-sm text-blue-300">
              <Calendar className="h-3 w-3" />
              {item.startDate} – {item.endDate ?? "Present"}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-gray-300 text-sm">{item.location}</span>
        </div>

        {/* Description */}
        <div className="mb-4">
          <ul className="space-y-2">
            {item.description.map((d, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, idx) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium rounded-full glass border border-white/20 text-blue-300 hover:border-blue-300/50 transition-all duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}


