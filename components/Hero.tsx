import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import { PORTFOLIO_OWNER, OWNER_ROLE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-12 items-center w-full">
      <div className="space-y-8 md:col-span-2">
        <div className="inline-block border-b border-text-secondary pb-1">
           <span className="text-text-secondary text-sm font-mono">Based in Cambridge</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]">
          {PORTFOLIO_OWNER}
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary font-light">
          {OWNER_ROLE}. Translating complex biological data into actionable insights.
        </p>

        <div className="flex flex-wrap gap-6 pt-4">
          <a
            href="#projects"
            className="text-text-primary border-b border-white hover:opacity-70 transition-opacity flex items-center gap-2 pb-1"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex gap-6 pt-12">
          <a href="https://github.com/RPSeaman" className="text-text-secondary hover:text-text-primary transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/ryanpseaman" className="text-text-secondary hover:text-text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://instagram.com/ryanpseaman" className="text-text-secondary hover:text-text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>

      <div className="hidden md:block justify-self-end">
        <img 
          src="/images/profile.jpeg" 
          alt="Profile picture" 
          className="mt-8 w-full object-cover aspect-square"
        />
      </div>
    </div>
  );
};