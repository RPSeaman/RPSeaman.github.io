import { SOCIALS, RESUME_URL } from '../constants';
export function Footer() {
  return <footer className="wrap site-footer">
    <p>© {new Date().getFullYear()} Ryan Seaman</p>
    <nav aria-label="Social profiles">{SOCIALS.map(social => <a key={social.platform} href={social.url}>{social.platform} <span aria-hidden="true">↗</span></a>)}</nav>
    <a href={RESUME_URL} target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, opens in new tab)</span></a>
  </footer>;
}
