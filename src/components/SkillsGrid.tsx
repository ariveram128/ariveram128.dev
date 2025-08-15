import { skills, skillCategories } from "@/lib/skills";
import { Code, Cpu, Wrench, Layers } from "lucide-react";

const categoryIcons = {
  programming: Code,
  hardware: Cpu,
  tools: Wrench,
  frameworks: Layers,
};

const categoryColors = {
  programming: "from-blue-500 to-cyan-500",
  hardware: "from-orange-500 to-red-500", 
  tools: "from-green-500 to-teal-500",
  frameworks: "from-purple-500 to-pink-500",
};

export default function SkillsGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          A comprehensive toolkit for building reliable, scalable systems from hardware to cloud
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = categoryIcons[category];
          return (
            <div 
              key={category} 
              className="group relative rounded-2xl glass border border-white/20 backdrop-blur-lg p-6 epic-hover slide-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category header with icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[category]} text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold capitalize gradient-text">
                  {category}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-3">
                {skills
                  .filter((s) => s.category === category)
                  .slice(0, 6)
                  .map((skill, index) => (
                    <li 
                      key={skill.name} 
                      className="group/skill"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium group-hover/skill:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i < skill.level
                                  ? `bg-gradient-to-r ${categoryColors[category]}`
                                  : "bg-gray-200 dark:bg-gray-700"
                              }`}
                              style={{
                                animationDelay: `${(categoryIndex * 0.1) + (index * 0.05) + (i * 0.02)}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Skill level progress bar */}
                      <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${categoryColors[category]} transition-all duration-700 ease-out`}
                          style={{ 
                            width: `${(skill.level / 5) * 100}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`
                          }}
                        />
                      </div>
                    </li>
                  ))}
              </ul>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${categoryColors[category]} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}


