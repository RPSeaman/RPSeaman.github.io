import { PROJECTS } from '../constants';
import { Archive, TopicLinks } from '../components/Archive';
import { AuthorList } from '../components/AuthorList';
export function PublicationsPage() {
  return <Archive title="Publications" label="Research / A shared effort" introduction="Research contributions across computational biology, regeneration, and biomedical data. Peer-reviewed papers and preprints are identified below." items={PROJECTS}
    renderItem={(paper, onTag, selectedTag)=><article key={paper.id} className="publication-row"><div className="publication-meta"><span className="year">{paper.year}</span><span className="meta">{paper.journal}</span>{paper.citation?.includes('[Preprint]') && <span className="meta preprint">Preprint</span>}</div><div><h2><a href={paper.link}>{paper.title} <span aria-hidden="true">↗</span></a></h2><p className="authors"><AuthorList description={paper.description} /></p><p className="citation">{paper.citation}</p><TopicLinks tags={paper.tags} onTag={onTag} selectedTag={selectedTag}/><a className="text-link paper-link" href={paper.link}>View publication <span aria-hidden="true">↗</span></a></div></article>} />;
}
