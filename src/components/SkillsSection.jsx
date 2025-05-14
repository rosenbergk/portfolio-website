import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Java", level: 5, category: "programming languages" },
  { name: "C++", level: 3, category: "programming languages" },
  { name: "C#", level: 4, category: "programming languages" },
  { name: "Python", level: 2.5, category: "programming languages" },
  { name: "JavaScript", level: 1, category: "programming languages" },

  // Tools and Technologies
  { name: "Git/GitHub", level: 4, category: "tools" },
  { name: "Linux", level: 3, category: "tools" },
  { name: "NoSQL", level: 2.3, category: "tools" },
  { name: "Spring Boot", level: 1.7, category: "tools" },
  { name: "Unity", level: 3.5, category: "tools" },

  // Specialties
  { name: "LLM Development", level: 3.5, category: "specialties" },
  { name: "Game Development", level: 4, category: "specialties" },
];

const categories = ["all", "programming languages", "tools", "specialties"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: (skill.level / 5) * 100 + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
