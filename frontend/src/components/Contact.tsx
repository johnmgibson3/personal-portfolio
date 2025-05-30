import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Have a question or want to work together? Feel free to reach out.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently open to freelance opportunities and am looking for full-time positions starting in December.
              If you have a project that could use my help, please don't hesitate to reach out.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail size={20} className="text-primary mr-3" />
                <a href="mailto:johnmgibson3@gmail.com" className="hover:text-primary transition-colors">
                  johnmgibson3@gmail.com
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/johnmgibson3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/john-gibson-iii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-secondary/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-secondary/50"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  className="bg-secondary/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  className="min-h-[150px] bg-secondary/50"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 