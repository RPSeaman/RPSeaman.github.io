import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import { PORTFOLIO_OWNER, OWNER_ROLE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-12 items-center w-full">
      <div className="space-y-8 md:col-span-2">
        <div className="inline-block border-b border-text-secondary pb-1">
           <span className="text-text-secondary text-sm font-mono">Based in Boston</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-text-primary leading-[1.1]">
          {PORTFOLIO_OWNER}
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary font-light">
          {OWNER_ROLE}. Translating complex biological data into actionable insights.
        </p>

        <div className="flex flex-wrap gap-6 pt-4">
          <a
            href="/files/RyanSeamanResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary border-b border-white hover:opacity-70 transition-opacity flex items-center gap-2 pb-1"
          >
            View Resume <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex gap-6 pt-12">
          <a href="https://github.com/RPSeaman" className="text-text-secondary hover:text-text-primary transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/ryanpseaman" className="text-text-secondary hover:text-text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="https://orcid.org/0009-0006-1204-4176" className="text-text-secondary hover:text-text-primary transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
            </svg>
          </a>
          <a href="https://instagram.com/ryanpseaman" className="text-text-secondary hover:text-text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>

      <div className="justify-self-end md:justify-self-end">
        <img 
          src="/images/profile.jpeg" 
          alt="Profile picture" 
          className="mt-8 w-48 md:w-full mx-auto md:mx-0 object-cover aspect-square"
        />
      </div>
    </div>
  );
};