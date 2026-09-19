import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitLogoMark } from './GitLogoMark';

export function SitePreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only run the cinematic entrance if not already seen in this session,
    // or run a quick elegant version on fresh tab loads
    const hasSeenIntro = sessionStorage.getItem('git_intro_seen');
    if (hasSeenIntro) {
      setLoading(false);
      return;
    }

    const duration = 1500; // 1.5 seconds smooth luxury counter
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      const nextProgress = Math.min(100, Math.round((stepCount / steps) * 100));
      setProgress(nextProgress);

      if (stepCount >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem('git_intro_seen', 'true');
        }, 220);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="site-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          aria-hidden="true"
        >
          {/* Ambient Background Grid & Radial Lighting */}
          <div className="preloader-mesh" />

          {/* Central Reveal Console */}
          <div className="preloader-content">
            <motion.div
              className="preloader-logo-wrap"
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <GitLogoMark className="preloader-logo" />
            </motion.div>

            <motion.div
              className="preloader-meta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="preloader-brand-title">GLOBAL INDUSTRIAL TECHNOLOGIES</span>
              <span className="preloader-brand-sub">TURNKEY MACHINERY &amp; SYSTEMS</span>
            </motion.div>

            {/* Precision Progress Counter Bar */}
            <div className="preloader-bar-wrap">
              <div className="preloader-bar-track">
                <motion.div
                  className="preloader-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="preloader-counter-row">
                <span className="preloader-status-tag">SYSTEM INITIALIZATION // 2026</span>
                <span className="preloader-counter-num">{progress.toString().padStart(3, '0')}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
