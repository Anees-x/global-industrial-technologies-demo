import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { Words } from '../components/common/Words';
import { IMG } from '../data/assets';
import { industries } from '../data/industries';

export function Industries() {
  return (
    <>
      <PageHero
        label="INDUSTRIES / 03"
        title={
          <>
            ENGINEERED
            <br />
            <em>FOR YOUR OUTPUT.</em>
          </>
        }
        copy="Different products demand different processes. We start with the application, then build the machinery scope around it."
        img={IMG.food}
      />
      <section className="industry-panels">
        {industries.map((it, index) => (
          <Reveal key={it.id}>
            <article className={`industry-split ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="industry-split-media frame">
                <img src={it.img} alt={`${it.title} industrial machinery`} loading="lazy" />
                <div className="industry-media-tag">
                  <span>GIT // APPLICATION</span>
                  <b>
                    {it.id} / {it.title.toUpperCase()}
                  </b>
                </div>
              </div>
              <div className="industry-split-content">
                <div className="eyebrow">
                  {it.id} / {it.title}
                </div>
                <h2>{it.title}</h2>
                <p>{it.copy}</p>
                {it.scope && (
                  <div className="industry-scope">
                    <div className="scope-label">TYPICAL SCOPE:</div>
                    <ul>
                      {it.scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="industry-split-actions">
                  <Link
                    to={`/contact?industry=${encodeURIComponent(it.title)}&message=${encodeURIComponent(`We are interested in discussing machinery and turnkey solutions for the ${it.title} industry (${it.copy}).`)}`}
                    className="button dark"
                  >
                    Discuss this application <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="industry-cta dark-section">
        <div className="section">
          <div className="eyebrow light">APPLICATION / ENQUIRY</div>
          <Words>WHAT DOES YOUR PRODUCTION NEED?</Words>
          <p className="industry-cta-desc">
            Tell us your product, capacity, and facility constraints. We configure the machinery scope
            to match your exact output.
          </p>
          <Link
            className="button light"
            to={`/contact?subject=${encodeURIComponent('Industry Application Consultation')}&message=${encodeURIComponent('We would like to consult on an industrial production line for our facility.')}`}
          >
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
