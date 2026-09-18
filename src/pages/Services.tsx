import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { Words } from '../components/common/Words';
import { IMG } from '../data/assets';
import { services } from '../data/services';

export function Services() {
  return (
    <>
      <PageHero
        label="OUR SERVICE CYCLE"
        title={
          <>
            FROM UNDERSTANDING NEEDS
            <br />
            <em>TO RUNNING PRODUCTION.</em>
          </>
        }
        copy="A structured, transparent 10-step service cycle covering every stage — from understanding your production goals and finding the right machinery to testing, delivery, installation, training, and ongoing lifecycle support."
        img={IMG.commissioning}
      />
      <section className="service-archive section section-rule">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.03}>
            <article className="service-archive-row frame">
              <div className="archive-number">{s.id}</div>
              <div className="archive-image">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="archive-copy">
                <div className="eyebrow">STEP {s.id} / SERVICE CYCLE</div>
                <h2>{s.title}</h2>
                <p>{s.short}</p>
                <Link
                  to={`/contact?service=${encodeURIComponent(`${s.id}. ${s.title}`)}&message=${encodeURIComponent(`I would like to discuss Step ${s.id}: ${s.title} (${s.short}) for our production facility.`)}`}
                  className="button sm white"
                >
                  <span>Discuss this step</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="dark-statement">
        <div className="section">
          <div className="eyebrow light">COMPLETE SERVICE CYCLE</div>
          <Words>
            ONE CONNECTED PARTNER FROM INITIAL CONSULTATION TO RUNNING PRODUCTION.
          </Words>
        </div>
      </section>
    </>
  );
}
