import { RESUME_URL } from './constants';
import { PageLayout } from './components/PageLayout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SoftwareProjects } from './components/SoftwareProjects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
export default function App() {
  return <PageLayout><title>Ryan Seaman — Research, ideas &amp; collaboration</title><div className="wrap"><Hero /><SoftwareProjects /><About /><section className="section background" aria-labelledby="background-title"><div className="section-top"><p className="meta">03 / Background</p><a className="text-link" href={RESUME_URL} target="_blank" rel="noreferrer">View résumé <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, opens in new tab)</span></a></div><h2 id="background-title">Experience &amp; education</h2><div className="background-grid"><Experience /><Education /></div><Skills /></section><Projects /></div><Contact /></PageLayout>;
}
