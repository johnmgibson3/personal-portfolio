interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "TailwindCSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Pandas", "Scikit-learn", "Flask", ".NET"]
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MySQL", "Amazon RDS", "Oracle Database"]
  },
  {
    name: "DevOps",
    skills: ["Git", "GitHub", "Docker", "AWS", "Azure", "CI/CD"]
  },
  {
    name: "Tools",
    skills: ["VS Code", "Figma", "Postman", "npm/yarn"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Technologies</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          I'm constantly learning and expanding my toolkit. Here's an overview of my current technical skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={category.name} 
              className="glass p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="tech-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 