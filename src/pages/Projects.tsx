import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { IMG } from '../data/assets';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <>
      <PageHero
        label="PROJECTS / 04"
        title={
          <>
            FROM MACHINE
            <br />
            <em>TO PRODUCTION.</em>
          </>
        }
        copy="A visual project archive structure ready for your real installations, case studies and client outcomes."
        img={IMG.cleanroom}
      />
      <section className="project-archive section section-rule">
        {projects.map(([n, t, tag, img]) => (
          <Reveal key={n}>
            <article className="project-item frame">
              <div className="project-img">
                <img src={img} alt={t} />
              </div>
              <div className="project-info">
                <span>
                  {n} / {tag}
                </span>
                <h2>{t}</h2>
                <p>
                  Project content can be replaced with the actual scope, machinery supplied,
                  installation and operational outcome.
                </p>
                <Link to="/contact" className="text-dark">
                  Request project details <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
