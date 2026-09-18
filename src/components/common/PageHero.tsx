import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { IMG } from '../../data/assets';

interface PageHeroProps {
  label: string;
  title: ReactNode;
  copy?: string;
  img?: string;
  accent?: string;
}

export function PageHero({ label, title, copy, img, accent = 'amber' }: PageHeroProps) {
  const signalNumber = label.match(/\d+/)?.[0] || '0';

  return (
    <section className={`page-hero page-hero-${accent}`}>
      <div className="page-hero-copy">
        <motion.div
          className="page-hero-top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow">{label}</div>
          <span className="hero-signal">GIT / 00{signalNumber}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 34, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ delay: 0.12, duration: 0.92, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {copy && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {copy}
          </motion.p>
        )}
        <motion.div
          className="page-hero-bottom"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>TURNKEY INDUSTRIAL SYSTEMS</span>
          <span>SCROLL / EXPLORE</span>
        </motion.div>
      </div>
      <div className="page-hero-visual">
        <img
          src={img || IMG.hero}
          alt="Industrial machinery and production equipment"
          loading="eager"
        />
        <div className="visual-shade" />
        <div className="visual-label">
          <span>GLOBAL INDUSTRIAL TECHNOLOGIES</span>
          <b>ENGINEERED / DELIVERED</b>
        </div>
        <div className="visual-index">01</div>
      </div>
    </section>
  );
}
