import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SoftwareProjects } from './components/SoftwareProjects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
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
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-bg-primary selection:bg-white selection:text-black">
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-5xl mx-auto px-6 sm:px-8">
          <section id="hero" className="min-h-[70vh] flex flex-col justify-center border-b border-border-color py-20">
            <Hero />
          </section>

          <AnimatedSection id="about" className="py-24 border-b border-border-color">
            <About />
          </AnimatedSection>

          <AnimatedSection id="experience" className="py-24 border-b border-border-color">
            <Experience />
          </AnimatedSection>

          <AnimatedSection id="education" className="py-24 border-b border-border-color">
            <Education />
          </AnimatedSection>

          <AnimatedSection id="publications" className="py-24 border-b border-border-color">
            <Projects />
          </AnimatedSection>

          <AnimatedSection id="projects" className="py-24 border-b border-border-color">
            <SoftwareProjects />
          </AnimatedSection>

          <AnimatedSection id="skills" className="py-24 border-b border-border-color">
            <Skills />
          </AnimatedSection>

          <AnimatedSection id="contact" className="py-24 mb-20">
            <Contact />
          </AnimatedSection>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
