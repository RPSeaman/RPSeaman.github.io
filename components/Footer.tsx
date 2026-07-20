import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-5xl mx-auto w-[calc(100%-2rem)] mt-16 mb-8 footer-glass rounded-2xl sm:rounded-full border border-border-color">
      <div className="px-6 sm:px-8 py-4 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm font-light order-2 sm:order-1">
          © {new Date().getFullYear()} Ryan Seaman.
        </p>
        <div className="flex gap-6 order-1 sm:order-2">
          <a 
            href="https://github.com/RPSeaman" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-secondary hover-github transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/ryanpseaman" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-secondary hover-linkedin transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://orcid.org/0009-0006-1204-4176" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-secondary hover-orcid transition-colors"
            aria-label="ORCID"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com/ryanpseaman" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-secondary hover-instagram transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
