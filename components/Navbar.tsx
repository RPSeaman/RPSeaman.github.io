import { RESUME_URL } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { Brand } from './Brand';

const sections = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
];

export function Navbar() {
  const { pathname, hash } = useLocation();
  return (
    <header className="wrap site-header">
      <Brand />
      <nav className="nav-links" aria-label="Main navigation">
        {sections.map(({ id, label }) => (
          <Link
            key={id}
            to={`/#${id}`}
            aria-current={pathname === '/' && hash === `#${id}` ? 'location' : undefined}
            onClick={() => {
              // Re-selecting the current section should return to it after manual scrolling.
              if (pathname === '/' && hash === `#${id}`) {
                document.getElementById(id)?.scrollIntoView();
              }
            }}
          >
            {label}
          </Link>
        ))}
        <a href={RESUME_URL} target="_blank" rel="noreferrer">
          Résumé <span aria-hidden="true">↗</span>
          <span className="sr-only"> (PDF, opens in new tab)</span>
        </a>
      </nav>
    </header>
  );
}
