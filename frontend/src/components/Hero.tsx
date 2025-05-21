import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mt-20">
          <p className="text-primary mb-2 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Hello, my name is
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            John Gibson
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            I build things for the web.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, user-centered products.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center mt-auto mb-8">
        <a 
          href="#projects" 
          className="animate-bounce-subtle text-primary"
          aria-label="Scroll to projects"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero; 