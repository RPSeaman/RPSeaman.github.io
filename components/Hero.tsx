import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_OWNER, OWNER_ROLE } from '../constants';

export const Hero: React.FC = () => {
  // Stagger configurations for Hero component elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        damping: 16
      }
    }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.94, rotate: -1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 55,
        damping: 15,
        delay: 0.45
      }
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-12 items-center w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8 md:col-span-2"
      >
        <motion.div variants={itemVariants} className="inline-block border-b border-accent-teal/30 pb-1">
          <span className="text-text-secondary text-sm font-mono">Based in Boston</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter text-metallic leading-[1.1]">
          {PORTFOLIO_OWNER}
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
          <span className="text-metallic-teal font-medium">{OWNER_ROLE}</span>. Translating complex biological data into actionable insights.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
          <a
            href="/files/RyanSeamanResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full glass-panel-nested glass-panel-nested-hover border border-white/10 hover:border-accent-teal/30 text-text-primary text-sm flex items-center gap-2 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_2px_10px_rgba(0,0,0,0.15)] group"
          >
            View Resume <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 pt-12">
          <a href="https://github.com/RPSeaman" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover-github transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/ryanpseaman" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover-linkedin transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://orcid.org/0009-0006-1204-4176" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover-orcid transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
            </svg>
          </a>
          <a href="https://instagram.com/ryanpseaman" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover-instagram transition-colors"><Instagram className="w-5 h-5" /></a>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={avatarVariants}
        initial="hidden"
        animate="visible"
        className="justify-self-end md:justify-self-end"
      >
        <div className="relative group/avatar mt-8 w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent-teal to-accent-indigo opacity-15 blur-xl group-hover/avatar:opacity-35 transition-opacity duration-500 pointer-events-none" />
          <img
            src="/images/profile.jpeg"
            alt="Profile picture"
            className="w-full h-full object-cover rounded-2xl border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] relative z-10 transition-all duration-500 group-hover/avatar:scale-[1.02] group-hover/avatar:border-accent-teal/30"
          />
        </div>
      </motion.div>
    </div>
  );
};
