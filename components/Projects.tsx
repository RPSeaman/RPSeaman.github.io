import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
export function Projects() {
  return <section id="publications" className="section" aria-labelledby="publications-title"><div className="section-top"><p className="meta">04 / Research contributions</p><Link className="text-link" to="/publications">All publications <span aria-hidden="true">↗</span></Link></div><h2 id="publications-title">Selected publications</h2><div className="publication-preview">{PROJECTS.filter(p=>p.featured).map(p=><article key={p.id}><span className="meta muted">{p.year} / {p.journal}</span><h3><a href={p.link}>{p.title} <span aria-hidden="true">↗</span></a></h3></article>)}</div></section>;
}
