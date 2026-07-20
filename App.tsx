import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
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

export const AnimatedSection: React.FC<{ id?: string; className?: string; layout?: boolean; children: React.ReactNode }> = ({ id, className = '', layout, children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse 3D tilt spring rotation transformations
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      id={id}
      layout={layout}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        stiffness: 55,
        damping: 14,
        mass: 1
      }}
      className={`glass-panel overflow-hidden transition-colors duration-300 hover:border-accent-teal/20 ${className}`}
    >
      {/* Tilting inner content wrapper - keeps the outer backdrop-filter flat so glass blur never drops! */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.008 }}
        className="w-full h-full p-8 md:p-12 transition-transform duration-300 ease-out"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  const { scrollY } = useScroll();
  // Scroll Parallax mapping for background decorative orbs
  const y1 = useTransform(scrollY, [0, 3000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 3000], [0, 200]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -140]);
  const y4 = useTransform(scrollY, [0, 3000], [0, 140]);

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
    <div className="min-h-screen bg-bg-primary selection:bg-accent-teal/30 selection:text-white relative overflow-x-hidden">
      {/* React 19 Document Metadata & Preloads - automatically hoisted to <head> */}
      <title>Ryan Seaman | Biomedical Informatics</title>
      <meta name="description" content="Computational biologist and data scientist pursuing an MMSc in Biomedical Informatics at Harvard Medical School." />
      <link rel="preload" href="./images/profile.jpeg" as="image" />
      <link rel="preload" href="./images/ATK.jpg" as="image" />
      <link rel="preload" href="./images/AXO.jpeg" as="image" />
      <link rel="preload" href="./images/SEQ.jpg" as="image" />

      {/* Background ambient elements wrapper for theme-level opacity/contrast dimming */}
      <div className="spheres-wrapper">
        {/* Soft, large volumetric background blur glows to back-light the glassmorphic panels */}
        <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-accent-indigo/10 blur-[120px] pointer-events-none z-0" />
        <div className="fixed top-[20%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-accent-teal/8 blur-[130px] pointer-events-none z-0" />
        <div className="fixed bottom-[15%] left-[-15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-accent-violet/6 blur-[140px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-accent-teal/6 blur-[110px] pointer-events-none z-0" />
      </div>

      <div className="relative z-10">
        <Navbar />

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

        <Footer />
      </div>
    </div>
  );
};

export default App;
