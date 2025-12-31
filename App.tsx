import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { SOCIALS } from './constants';
import { Github, Linkedin, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-white selection:text-black">
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-5xl mx-auto px-6 sm:px-8">
          <section id="hero" className="min-h-[80vh] flex flex-col justify-center border-b border-border-color">
            <Hero />
          </section>

          <section id="about" className="py-24 border-b border-border-color">
            <About />
          </section>

          <section id="education" className="py-24 border-b border-border-color">
            <Education />
          </section>

          <section id="experience" className="py-24 border-b border-border-color">
            <Experience />
          </section>

          <section id="skills" className="py-24 border-b border-border-color">
            <Skills />
          </section>

          <section id="projects" className="py-24 border-b border-border-color">
            <Projects />
          </section>

          <section id="contact" className="py-24 mb-20">
            <Contact />
          </section>
        </main>

        <footer className="py-12 border-t border-border-color bg-bg-primary">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-8">
            <div className="flex gap-6">
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors p-2 hover:bg-white/5 rounded-full"
                  aria-label={social.platform}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
            <p className="text-text-secondary text-sm">© {new Date().getFullYear()} Ryan Seaman.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;