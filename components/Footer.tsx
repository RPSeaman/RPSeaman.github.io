import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { SOCIALS } from '../constants';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'github': return <Github className="w-5 h-5" />;
    case 'instagram': return <Instagram className="w-5 h-5" />;
    case 'linkedin': return <Linkedin className="w-5 h-5" />;
    case 'orcid': return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
      </svg>
    );
    default: return null;
  }
};

export const Footer: React.FC = () => (
  <footer className="py-12 border-t border-border-color bg-bg-primary">
    <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-8">
      <div className="flex gap-6">
        {SOCIALS.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label={social.platform}
          >
            {getIcon(social.icon)}
          </a>
        ))}
      </div>
      <p className="text-text-secondary text-sm">© {new Date().getFullYear()} Ryan Seaman.</p>
    </div>
  </footer>
);
