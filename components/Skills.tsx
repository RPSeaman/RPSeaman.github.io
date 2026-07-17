import React, { useState, useEffect, useRef } from 'react';
import { SKILLS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

// Design color mapping for unique skill category aesthetics
const categoryColors: Record<string, {
  text: string;
  bg: string;
  border: string;
  dot: string;
  activePill: string;
}> = {
  'Modalities': {
    text: 'text-accent-modalities',
    bg: 'bg-accent-modalities/5',
    border: 'border-accent-modalities/20',
    dot: 'bg-accent-modalities',
    activePill: 'bg-accent-modalities/15 text-accent-modalities border border-accent-modalities/25 shadow-sm'
  },
  'Languages': {
    text: 'text-accent-languages',
    bg: 'bg-accent-languages/5',
    border: 'border-accent-languages/20',
    dot: 'bg-accent-languages',
    activePill: 'bg-accent-languages/15 text-accent-languages border border-accent-languages/25 shadow-sm'
  },
  'Tools': {
    text: 'text-accent-tools',
    bg: 'bg-accent-tools/5',
    border: 'border-accent-tools/20',
    dot: 'bg-accent-tools',
    activePill: 'bg-accent-tools/15 text-accent-tools border border-accent-tools/25 shadow-sm'
  },
  'Platforms': {
    text: 'text-accent-platforms',
    bg: 'bg-accent-platforms/5',
    border: 'border-accent-platforms/20',
    dot: 'bg-accent-platforms',
    activePill: 'bg-accent-platforms/15 text-accent-platforms border border-accent-platforms/25 shadow-sm'
  }
};

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getTagStyle = (category: string) => {
    const config = categoryColors[category] || categoryColors['Modalities'];
    return `${config.text} ${config.bg} ${config.border}`;
  };

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === selectedCategory);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const isAtTop = el.scrollTop <= 2;
    const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

    setShowTopFade(!isAtTop);
    setShowBottomFade(!isAtBottom);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    handleScroll();

    el.addEventListener('scroll', handleScroll);

    // Watch height changes when filtering items
    const resizeObserver = new ResizeObserver(() => {
      handleScroll();
    });
    resizeObserver.observe(el);

    // Check after exit/entrance transitions complete
    const timer = setTimeout(handleScroll, 150);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, [selectedCategory, filteredSkills.length]);

  const getScrollFadeClass = () => {
    if (showTopFade && showBottomFade) return 'scroll-fade-both';
    if (showTopFade) return 'scroll-fade-top';
    if (showBottomFade) return 'scroll-fade-bottom';
    return '';
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.92 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 13
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.92,
      transition: { duration: 0.15 }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-mono text-accent-teal uppercase tracking-widest mb-2">Expertise</p>
        <h2 className="text-3xl font-light text-metallic leading-tight">Skills & Tech</h2>
      </div>
      
      {/* Pill Selector (Full width scrolling, no wrap) */}
      <div className="flex gap-1.5 p-1 bg-white/[0.02] border border-white/5 rounded-full overflow-x-auto w-fit max-w-full no-scrollbar whitespace-nowrap scrollbar-none">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-3 py-1.5 text-xs rounded-full transition-all duration-300 font-mono whitespace-nowrap ${
            selectedCategory === 'All'
              ? 'bg-white/10 text-text-primary border border-white/15 shadow-sm'
              : 'text-text-secondary hover:text-text-primary border border-transparent'
          }`}
        >
          All
        </button>
        {categories.map(cat => {
          const config = categoryColors[cat] || categoryColors['Modalities'];
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-full transition-all duration-300 font-mono whitespace-nowrap ${
                selectedCategory === cat
                  ? config.activePill
                  : 'text-text-secondary hover:text-text-primary border border-transparent'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      
      {/* Scrollable grid container for Skills */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className={`h-[250px] overflow-y-auto no-scrollbar pr-1 pt-1 ${getScrollFadeClass()}`}
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 pb-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map(skill => {
              const config = categoryColors[skill.category] || categoryColors['Modalities'];
              return (
                <motion.div
                  variants={itemVariants}
                  layout
                  key={skill.name}
                  className={`flex items-center gap-2 border px-3 py-2 rounded-xl text-sm font-mono transition-all duration-300 ${getTagStyle(skill.category)}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
                  {skill.name}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};