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
        copy="Explore our turnkey project deliveries — from high-speed filling lines and automated packaging to modular cleanroom installations."
        img={IMG.cleanroom}
      />
      <section className="project-archive section section-rule">
        {projects.map(([n, t, tag, img, desc]) => (
          <Reveal key={n}>
            <article className="project-item frame">
              <div className="project-img">
                <img src={img} alt={t} loading="lazy" />
              </div>
              <div className="project-info">
                <span>
                  {n} / {tag}
                </span>
                <h2>{t}</h2>
                <p>
                  {desc || 'Complete turnkey production line engineered and validated to strict cGMP, CE, and ISO standards.'}
                </p>
                <Link
                  to={`/contact?project=${encodeURIComponent(t)}&industry=${encodeURIComponent(tag)}&message=${encodeURIComponent(`I would like to request technical details, scope of work, and case study parameters for: ${t} (${tag}).`)}`}
                  className="button sm dark"
                >
                  <span>Request Project Details</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
