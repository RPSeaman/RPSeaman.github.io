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
    <div className="min-h-screen bg-bg-primary selection:bg-accent-teal/30 selection:text-white relative bg-dot-grid">
      {/* React 19 Document Metadata & Preloads - automatically hoisted to <head> */}
      <title>Ryan Seaman | Biomedical Informatics</title>
      <meta name="description" content="Computational biologist and data scientist pursuing an MMSc in Biomedical Informatics at Harvard Medical School." />
      <link rel="preload" href="./images/profile.jpeg" as="image" />
      <link rel="preload" href="./images/ATK.jpg" as="image" />
      <link rel="preload" href="./images/AXO.jpeg" as="image" />
      <link rel="preload" href="./images/SEQ.jpg" as="image" />

      {/* Background ambient elements wrapper for theme-level opacity/contrast dimming */}
      <div className="spheres-wrapper">
        {/* Ambient background glows */}
        <div className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none -translate-x-1/3 -translate-y-1/3 animate-float-1 mix-blend-plus-lighter z-0" />
        <div className="fixed top-[35%] right-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.1),transparent_70%)] pointer-events-none translate-x-1/3 animate-float-2 mix-blend-plus-lighter z-0" />
        <div className="fixed bottom-0 left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none -translate-x-1/2 translate-y-1/4 animate-float-1 mix-blend-plus-lighter z-0" />

        {/* Decorative glass-revealing background spheres (highly vibrant, floating fixed spheres behind z-10 cards) */}
        <motion.div style={{ y: y1 }} className="fixed top-[12%] left-[18%] w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/40 to-teal-600/20 border border-cyan-400/35 shadow-[0_0_25px_rgba(34,211,238,0.15)] pointer-events-none animate-float-1 mix-blend-plus-lighter z-0" />
        <motion.div style={{ y: y2 }} className="fixed top-[22%] left-[62%] w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-500/20 border border-emerald-400/35 shadow-[0_0_20px_rgba(52,211,153,0.15)] pointer-events-none animate-float-2 mix-blend-plus-lighter z-0" />
        <motion.div style={{ y: y3 }} className="fixed top-[32%] right-[22%] w-40 h-40 rounded-full bg-gradient-to-tr from-pink-500/40 to-purple-600/20 border border-pink-400/35 shadow-[0_0_30px_rgba(244,63,94,0.15)] pointer-events-none animate-float-2 mix-blend-plus-lighter z-0" />
        <motion.div style={{ y: y4 }} className="fixed top-[45%] left-[10%] w-28 h-28 rounded-full bg-gradient-to-tr from-lime-400/35 to-emerald-500/15 border border-lime-400/30 shadow-[0_0_20px_rgba(163,230,53,0.12)] pointer-events-none animate-float-1 mix-blend-plus-lighter z-0" />
        <motion.div style={{ y: y1 }} className="fixed top-[52%] left-[40%] w-28 h-28 rounded-full bg-gradient-to-br from-amber-400/45 to-orange-500/30 border border-amber-400/45 shadow-[0_0_20px_rgba(251,191,36,0.18)] pointer-events-none animate-float-1 mix-blend-plus-lighter z-0" />
        <motion.div style={{ y: y2 }} className="fixed top-[62%] right-[10%] w-36 h-36 rounded-full bg-gradient-to-br from-red-500/35 to-amber-500/15 border border-red-400/30 shadow-[0_0_25px_rgba(239,68,68,0.12)] pointer-events-none animate-float-2 mix-blend-plus-lighter z-0" />
        <motion.div style={{ y: y3 }} className="fixed top-[70%] left-[20%] w-36 h-36 rounded-full bg-gradient-to-tr from-violet-500/40 to-indigo-600/20 border border-violet-400/35 shadow-[0_0_25px_rgba(139,92,246,0.15)] pointer-events-none animate-float-2 mix-blend-plus-lighter z-0" />
        <motion.div style={{ y: y4 }} className="fixed top-[82%] right-[32%] w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500/40 to-indigo-600/20 border border-blue-400/35 shadow-[0_0_25px_rgba(59,130,246,0.15)] pointer-events-none animate-float-1 mix-blend-plus-lighter z-0" />
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
