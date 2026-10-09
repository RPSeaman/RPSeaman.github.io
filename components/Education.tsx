import { EDUCATION } from '../constants';
export function Education() {
  return <section id="education" aria-labelledby="education-title"><h3 className="small-heading" id="education-title">Education</h3><div className="timeline">{EDUCATION.map(school=><article key={school.school}><p className="meta muted">{school.graduationDate}</p><h4>{school.school}</h4><p>{school.degree}</p><p className="muted">{school.location}</p></article>)}</div></section>;
}
