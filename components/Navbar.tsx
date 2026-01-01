import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Publications', href: '#projects' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-primary/90 backdrop-blur-sm border-b border-border-color">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-bold text-lg tracking-tight text-text-primary">
            Ryan Seaman
          </a>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden md:block text-sm font-medium text-text-primary hover:text-white transition-colors border border-border-color px-4 py-2 rounded hover:bg-white/5"
            >
              Contact
            </a>
            
            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-primary p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border-color bg-bg-primary">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-sm text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block text-sm font-medium text-text-primary hover:text-white transition-colors border border-border-color px-4 py-2 rounded hover:bg-white/5 text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};