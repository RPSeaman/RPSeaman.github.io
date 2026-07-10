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

  useEffect(() => {
    if (location.pathname !== '/') return;

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
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
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
    <nav className="fixed top-0 w-full z-50 navbar-glass">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={scrollToTop} className="font-bold text-lg tracking-tight text-text-primary cursor-pointer">
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
              className={`hidden md:block text-sm font-medium transition-colors border px-4 py-2 rounded cursor-pointer ${
                activeSection === 'contact'
                  ? 'bg-text-primary text-bg-primary border-transparent'
                  : 'text-text-primary border-border-color hover:bg-text-primary/10'
              }`}
            >
              Contact
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-primary p-2 cursor-pointer"
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
        className={`md:hidden border-t border-white/[0.06] bg-slate-950/80 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
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
              className="w-full text-sm font-medium text-text-primary transition-colors border border-border-color px-4 py-2 rounded hover:bg-text-primary hover:text-bg-primary text-center cursor-pointer"
            >
              Contact
            </button>
        </div>
      </div>
    </nav>
  );
};
