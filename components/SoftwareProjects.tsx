import { Link } from 'react-router-dom';
import { ProjectArtwork } from './ProjectArtwork';
export function SoftwareProjects() {
  return <section id="projects" className="section selected-work" aria-labelledby="work-title">
    <div className="section-top"><p className="meta">01 / Selected work</p><Link className="text-link" to="/projects">All projects <span aria-hidden="true">↗</span></Link></div>
    <div className="section-heading"><h2 id="work-title">Research &amp;<br />visualization projects</h2><p>Annotation tools and AI-assisted workflows for spatial and single-cell data.</p></div>
    <div className="work-grid">
      <article><Link className="art-link" to="/projects/vitessce-annotations" aria-label="Explore Vitessce Annotations"><ProjectArtwork /></Link><div className="work-caption"><span className="meta">Summer 2026 / Narrative visualization</span><h3><Link to="/projects/vitessce-annotations">Vitessce Annotations <span aria-hidden="true">↗</span></Link></h3><p>I built tools that connect written explanations, saved views, and visual annotations within Vitessce.</p><Link className="text-link" to="/projects/vitessce-annotations">View project <span aria-hidden="true">→</span></Link></div></article>
      <article><Link className="art-link" to="/projects/vitesscegen" aria-label="Explore VitessceGen"><ProjectArtwork kind="generation" /></Link><div className="work-caption"><span className="meta">MMSc thesis / In progress</span><h3><Link to="/projects/vitesscegen">VitessceGen <span aria-hidden="true">↗</span></Link></h3><p>My thesis explores AI-generated visualizations of biomedical data based on researchers’ questions.</p><Link className="text-link" to="/projects/vitesscegen">View research <span aria-hidden="true">→</span></Link></div></article>
    </div>
  </section>;
}
