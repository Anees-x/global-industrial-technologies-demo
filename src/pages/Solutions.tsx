import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { IMG } from '../data/assets';
import { solutionTypes } from '../data/solutions';

export function Solutions() {
  return (
    <>
      <PageHero
        label="SOLUTIONS / 01"
        title={
          <>
            MACHINERY
            <br />
            <em>THAT CONNECTS.</em>
          </>
        }
        copy="Equipment categories selected and integrated around your process, product and production requirements."
        img={IMG.packaging}
      />
      <section className="solution-rows section section-rule">
        {solutionTypes.map(([n, t, c], i) => (
          <Reveal key={n} delay={i * 0.04}>
            <div className="solution-item">
              <span>{n}</span>
              <div>
                <h2>{t}</h2>
                <p>{c}</p>
              </div>
              <ArrowUpRight />
            </div>
          </Reveal>
        ))}
      </section>
      <section className="solution-image-band">
        <img src={IMG.hero} alt="Industrial filling and packaging machinery" loading="lazy" />
        <div>
          <div className="eyebrow light">PROCESS / FILL / PACK / MOVE</div>
          <h2>
            INDIVIDUAL MACHINES.
            <br />
            <em>INTEGRATED THINKING.</em>
          </h2>
        </div>
      </section>
    </>
  );
}
