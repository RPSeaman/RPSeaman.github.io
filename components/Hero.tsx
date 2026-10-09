import { Link } from 'react-router-dom';
import { BIO } from '../constants';
export function Hero() {
  return <><section className="hero" aria-labelledby="intro-title">
    <div><p className="eyebrow meta">Biomedical informatics · Boston, MA</p>
      <h1 id="intro-title">Biomedical research.<br /><span>Health technology.</span></h1>
      <p className="lede">{BIO}</p><Link className="button" to="/#projects">Explore my work <span aria-hidden="true">↓</span></Link>
    </div>
    <figure className="portrait"><img src="./images/profile-color.jpg" width="2493" height="2770" fetchPriority="high" alt="Ryan Seaman outdoors by the water" /><figcaption className="meta"><span>Ryan Seaman</span></figcaption></figure>
  </section><div className="credentials"><span>MMSc candidate · Harvard Medical School</span><span>Computational biology &amp; data visualization</span></div></>;
}
