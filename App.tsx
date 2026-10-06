import { PageLayout } from './components/PageLayout';
import { AnimatedSection } from './components/AnimatedSection';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SoftwareProjects } from './components/SoftwareProjects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

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
    <PageLayout>
      {/* React 19 Document Metadata & Preloads - automatically hoisted to <head> */}
      <title>Ryan Seaman | Biomedical Informatics</title>
      <meta name="description" content="Computational biologist and data scientist pursuing an MMSc in Biomedical Informatics at Harvard Medical School." />
      <link rel="preload" href="./images/profile.jpeg" as="image" />
      <link rel="preload" href="./images/ATK.jpg" as="image" />
      <link rel="preload" href="./images/AXO.jpeg" as="image" />
      <link rel="preload" href="./images/SEQ.jpg" as="image" />

      <main className="max-w-5xl mx-auto px-6 sm:px-8">
        <section id="hero" className="min-h-[70vh] flex flex-col justify-center pt-24 pb-8">
          <Hero />
        </section>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8 pb-8 mt-0">
          <AnimatedSection id="about" className="rounded-3xl md:col-span-8">
            <About />
          </AnimatedSection>

          <AnimatedSection id="contact" className="rounded-3xl md:col-span-4">
            <Contact />
          </AnimatedSection>

          <AnimatedSection id="experience" className="rounded-3xl md:col-span-12">
            <Experience />
          </AnimatedSection>

          <AnimatedSection id="education" className="rounded-3xl md:col-span-6">
            <Education />
          </AnimatedSection>

          <AnimatedSection id="skills" layout className="rounded-3xl md:col-span-6">
            <Skills />
          </AnimatedSection>

          <AnimatedSection id="publications" className="rounded-3xl md:col-span-12">
            <Projects />
          </AnimatedSection>

          <AnimatedSection id="projects" className="rounded-3xl md:col-span-12">
            <SoftwareProjects />
          </AnimatedSection>
        </div>
      </main>
    </PageLayout>
  );
};

export default App;
