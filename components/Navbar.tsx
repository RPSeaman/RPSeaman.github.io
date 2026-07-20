import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education & Skills', id: 'education' },
    { name: 'Publications', id: 'publications' },
    { name: 'Projects', id: 'projects' },
  ];

  const sectionIds = ['hero', 'about', 'experience', 'education', 'publications', 'projects'];
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Ignore scroll triggers when scrolling programmatically from menu clicks
        if (isScrolling.current) return;

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

    return () => {
      observer.disconnect();
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Instantly set active section state for instant user feedback
    setActiveSection(id);
    
    // Lock the IntersectionObserver during scroll animation
    isScrolling.current = true;
    if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    scrollTimeout.current = window.setTimeout(() => {
      isScrolling.current = false;
    }, 850); // Easing animation transition buffer

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    setActiveSection('hero');
    
    isScrolling.current = true;
    if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    scrollTimeout.current = window.setTimeout(() => {
      isScrolling.current = false;
    }, 850);

    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getLinkClass = (id: string) => {
    const isActive = activeSection === id;
    return `text-sm font-medium transition-colors ${isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`;
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 navbar-glass rounded-full px-6 shadow-md">
      <div className="w-full">
        <div className="flex items-center justify-between h-12">
          <button onClick={scrollToTop} className="font-bold text-sm sm:text-base tracking-tight text-text-primary cursor-pointer">
            Ryan Seaman
          </button>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`${getLinkClass(link.id)} cursor-pointer`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className={`hidden md:block text-sm font-medium px-4 py-1 rounded-full transition-all duration-300 border cursor-pointer ${
                activeSection === 'contact'
                  ? 'bg-accent-teal/15 text-accent-teal border-accent-teal/25 shadow-sm shadow-accent-teal/10'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20 text-text-secondary hover:text-text-primary hover:bg-white/[0.06]'
              }`}
            >
              Contact
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-primary p-2 cursor-pointer flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (floating tray detached below the navbar capsule) */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-14 left-0 w-full border border-border-color bg-slate-950/85 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0 border-transparent pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left py-2 ${getLinkClass(link.id)} cursor-pointer`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className={`w-full text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 border text-center cursor-pointer ${
              activeSection === 'contact'
                ? 'bg-accent-teal/15 text-accent-teal border-accent-teal/25'
                : 'bg-white/[0.02] border-white/10 text-text-secondary hover:text-text-primary hover:bg-white/[0.06]'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
