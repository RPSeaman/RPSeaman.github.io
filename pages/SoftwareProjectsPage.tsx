import { Link } from 'react-router-dom';
import { SOFTWARE_PROJECTS } from '../constants';
import { Archive, TopicLinks } from '../components/Archive';
import { ProjectArtwork } from '../components/ProjectArtwork';
import type { ProjectArtworkKind } from '../components/ProjectArtwork';

const artwork: Record<string, ProjectArtworkKind> = {
  annotations: 'annotations', sp4: 'generation', sp1: 'aperiovis',
  sp2: 'scscape', sp5: 'cadence', sp3: 'website',
};
export function SoftwareProjectsPage() {
  return <Archive title="Projects" label="Work / Tools, research & ideas" introduction="Ways to explore data, explain a finding, and ask a new question. A collection of research tools and ideas in progress." items={SOFTWARE_PROJECTS}
    renderItem={(project, onTag, selectedTag)=><article className={`project-row ${project.detailPath ? 'featured-row' : ''}`} key={project.id}>
      {project.detailPath ? <Link className="archive-art-link" to={project.detailPath} aria-label={`Explore ${project.title}`}><ProjectArtwork kind={artwork[project.id]} compact /></Link> : <ProjectArtwork kind={artwork[project.id]} compact />}
      <div className="project-row-copy"><p className="meta muted">{project.year}{project.note ? ` / ${project.note}` : project.status ? ` / ${project.status==='active' ? 'In progress' : project.status}` : ''}</p><h2>{project.detailPath ? <Link to={project.detailPath}>{project.title} <span aria-hidden="true">↗</span></Link> : project.title}</h2><p>{project.description}</p><TopicLinks tags={project.tags} onTag={onTag} selectedTag={selectedTag}/><div className="project-actions">{project.detailPath && <Link className="text-link" to={project.detailPath}>Explore the project <span aria-hidden="true">→</span></Link>}{project.github && <a className="text-link" href={project.github}>View on GitHub <span aria-hidden="true">↗</span></a>}{project.link && <a className="text-link" href={project.link}>{project.linkLabel ?? 'Visit project'} <span aria-hidden="true">↗</span></a>}</div></div>
    </article>} />;
}
