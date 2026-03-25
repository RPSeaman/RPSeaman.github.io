import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Publications', href: '#projects' },
  ];

  const sectionIds = ['about', 'education', 'experience', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const getLinkClass = (href: string) => {
    const id = href.replace('#', '');
    const isActive = activeSection === id;
    return `text-sm transition-colors ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`;
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
                  className={getLinkClass(link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className={`hidden md:block text-sm font-medium transition-colors border px-4 py-2 rounded ${
                activeSection === 'contact'
                  ? 'text-white border-white bg-white/10'
                  : 'text-text-primary border-border-color hover:text-white hover:bg-white/5'
              }`}
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
      <div
        ref={menuRef}
        className={`md:hidden border-t border-border-color bg-bg-primary overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`block py-2 ${getLinkClass(link.href)}`}
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
    </nav>
  );
};
