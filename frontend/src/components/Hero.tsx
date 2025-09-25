import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import portraitImage from '@/assets/images/portrait.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 md:py-24 mb">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 max-w-2xl">
            <p className="text-primary mb-2 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              Hello, my name is
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
              John Gibson
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
              Information Systems Student at BYU's Marriott School of Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
              I'm an aspiring sofware engineer specializing in building secure, scalable, and efficient software solutions.
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
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
            <img 
              src={portraitImage} 
              alt="John Gibson" 
              className="w-full h-full object-cover rounded-full border-4 border-primary/20"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2">
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