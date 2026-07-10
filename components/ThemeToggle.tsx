import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const currentTheme = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-full glass-panel-nested glass-panel-nested-hover border border-white/10 hover:border-accent-teal/30 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === 'dark' ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Sun className="w-5 h-5 text-accent-modalities group-hover:animate-pulse" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Moon className="w-5 h-5 text-accent-languages group-hover:animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};
