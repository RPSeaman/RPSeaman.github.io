import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
export function NotFoundPage() {
  return <PageLayout><title>Page not found — Ryan Seaman</title><div className="wrap page-intro not-found"><p className="meta">404 / A small detour</p><h1>Let’s find<br />our way back.</h1><p className="page-lede">This page doesn’t exist. You can head home or explore the project collection.</p><div className="project-actions"><Link className="button" to="/">Back to home →</Link><Link className="text-link" to="/projects">Explore projects →</Link></div></div></PageLayout>;
}
