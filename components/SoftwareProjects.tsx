import { Link } from 'react-router-dom';
import { ProjectArtwork } from './ProjectArtwork';
export function SoftwareProjects() {
  return <section id="projects" className="section selected-work" aria-labelledby="work-title">
    <div className="section-top"><p className="meta">01 / Selected work</p><Link className="text-link" to="/projects">All projects <span aria-hidden="true">↗</span></Link></div>
    <div className="section-heading"><h2 id="work-title">Making research<br />easier to explore.</h2><p>Tools and ideas for understanding complex data—and sharing what we find.</p></div>
    <div className="work-grid">
      <article><Link className="art-link" to="/projects/vitessce-annotations" aria-label="Explore Vitessce Annotations"><ProjectArtwork /></Link><div className="work-caption"><span className="meta">Summer 2026 / Narrative visualization</span><h3><Link to="/projects/vitessce-annotations">Vitessce Annotations <span aria-hidden="true">↗</span></Link></h3><p>I built a way to tell a scientific story inside Vitessce, connecting written explanations to views readers can explore.</p><Link className="text-link" to="/projects/vitessce-annotations">Explore the project <span aria-hidden="true">→</span></Link></div></article>
      <article><Link className="art-link" to="/projects/vitesscegen" aria-label="Explore VitessceGen"><ProjectArtwork kind="generation" /></Link><div className="work-caption"><span className="meta">MMSc thesis / In progress</span><h3><Link to="/projects/vitesscegen">VitessceGen <span aria-hidden="true">↗</span></Link></h3><p>Developing workflows that turn researchers’ natural-language questions and biomedical data into coordinated interactive views.</p><Link className="text-link" to="/projects/vitesscegen">Explore the research <span aria-hidden="true">→</span></Link></div></article>
    </div>
  </section>;
}
