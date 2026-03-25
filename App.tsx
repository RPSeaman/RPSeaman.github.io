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
import { useScrollAnimation } from './hooks/useScrollAnimation';

const AnimatedSection: React.FC<{ id: string; className: string; children: React.ReactNode }> = ({ id, className, children }) => {
  const ref = useScrollAnimation();
  return (
    <section id={id} ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </section>
  );
};

const App: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'orcid': return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
        </svg>
      );
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

          <AnimatedSection id="about" className="py-24 border-b border-border-color">
            <About />
          </AnimatedSection>

          <AnimatedSection id="education" className="py-24 border-b border-border-color">
            <Education />
          </AnimatedSection>

          <AnimatedSection id="experience" className="py-24 border-b border-border-color">
            <Experience />
          </AnimatedSection>

          <AnimatedSection id="skills" className="py-24 border-b border-border-color">
            <Skills />
          </AnimatedSection>

          <AnimatedSection id="projects" className="py-24 border-b border-border-color">
            <Projects />
          </AnimatedSection>

          <AnimatedSection id="contact" className="py-24 mb-20">
            <Contact />
          </AnimatedSection>
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
