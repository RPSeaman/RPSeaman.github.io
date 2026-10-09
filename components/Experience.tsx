import { WORK_EXPERIENCE } from '../constants';
export function Experience() {
  return <section id="experience" aria-labelledby="experience-title"><h3 className="small-heading" id="experience-title">Experience</h3><div className="timeline">{WORK_EXPERIENCE.map(job=><article key={job.position}><p className="meta muted">{job.period}</p><h4>{job.position}</h4><p>{job.organization}</p><p className="muted">{job.location}</p></article>)}</div></section>;
}
