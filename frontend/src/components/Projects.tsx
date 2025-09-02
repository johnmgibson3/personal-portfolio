import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';
import CineNiche from '@/assets/images/CineNiche.jpeg';
import TurtleShelter from '@/assets/images/TurtleShelter.png';
interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "CineNiche - Movie Streaming Platform",
    description: "A secure movie streaming platform build with custom machine learning models to recommend movies to users. It was built with React, .NET, and MySQL",
    image: CineNiche,
    technologies: ["React","TypeScript", ".NET", "Azure ML", "MySQL"],
    githubUrl: "https://github.com/johnmgibson3/INTEX2_cineniche",
    // liveUrl: "https://cineniche.net",
  },
  {
    id: 2,
    title: "Turtle Shelter Project - Charity Management System",
    description: "A website that allows a charity to manage their donations and volunteers. Features a fully functional admin dashboard and custom email system. It was built with JavaScript and deployed to AWS",
    image: TurtleShelter,
    technologies: ["JavaScript", "AWS", "Amazon RDS", "Amazon Beanstalk"],
    githubUrl: "https://github.com/Team1-12/intex-2024",
    liveUrl: "https://turtleshelterintex.dev",
  },
  {
    id: 3,
    title: "Mail Services Financial System",
    description: "A financial system that allows BYU's Print and Mail center to manage their finances transactions. It was built with TypeScript, Angular, Python Flask, and Oracle Database",
    image: "/placeholder.svg",
    technologies: ["TypeScript", "Angular", "Python Flask", "Oracle Database"],

  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A selection of my recent work. Each project presented unique challenges and opportunities for growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="h-48 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                )}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Link size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 
