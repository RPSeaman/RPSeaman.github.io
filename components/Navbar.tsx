import React from 'react';

export const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
  ];

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
              className="text-sm font-medium text-text-primary hover:text-white transition-colors border border-border-color px-4 py-2 rounded hover:bg-white/5"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};