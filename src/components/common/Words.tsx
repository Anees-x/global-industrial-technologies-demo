import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls, useInView, useScroll, useTransform } from 'framer-motion';
import { translations } from '../../data/translations';

interface WordsProps {
  children: ReactNode;
  className?: string;
}

export function Words({ children, className = '' }: WordsProps) {
  const [language, setLanguage] = useState(() => localStorage.getItem('git-language') || 'en');
  const wordsRef = useRef<HTMLHeadingElement | null>(null);
  const isVisible = useInView(wordsRef, { amount: 0.22, margin: '-10% 0px -10% 0px' });
  const controls = useAnimationControls();

  useEffect(() => {
    const sync = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) setLanguage(customEvent.detail);
    };
    window.addEventListener('git-locale', sync);
    return () => window.removeEventListener('git-locale', sync);
  }, []);

  useEffect(() => {
    const current = localStorage.getItem('git-language') || 'en';
    if (current !== language) {
      setLanguage(current);
    }
  }, [language]);

  const rawText = typeof children === 'string' ? children : String(children ?? '');
  const source = rawText.trim();
  const copy = (translations[language] || {})[source] || source;

  useEffect(() => {
    if (!isVisible) {
      controls.set('hidden');
      return;
    }
    controls.set('hidden');
    const frame = requestAnimationFrame(() => controls.start('show'));
    return () => cancelAnimationFrame(frame);
  }, [controls, isVisible, language]);

  return (
    <motion.h2
      ref={wordsRef}
      data-no-translate
      className={`words ${className}`}
      initial="hidden"
      animate={controls}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
    >
      {copy.split(' ').map((word, i) => (
        <span className="word" key={`${language}-${i}`}>
          <motion.span
            variants={{ hidden: { y: '110%', opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

/* ==========================================================================
   SCROLL TEXT HIGHLIGHT / ILLUMINATION EFFECT
   Progressively colors words from muted tone to brilliant white on scroll
   ========================================================================== */
interface ScrollWordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
}

function ScrollWord({ children, progress, range }: ScrollWordProps) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(
    progress,
    range,
    ['rgba(255, 255, 255, 0.22)', 'rgba(255, 255, 255, 1)']
  );
  const textShadow = useTransform(progress, range, [
    '0 0 0px rgba(255, 255, 255, 0)',
    '0 0 24px rgba(255, 189, 53, 0.3)'
  ]);

  return (
    <span className="scroll-word-wrap" style={{ position: 'relative', display: 'inline-block', marginRight: '0.28em' }}>
      <motion.span
        style={{
          color,
          opacity,
          textShadow,
          display: 'inline-block',
          transition: 'color 0.12s ease'
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function ScrollTextHighlight({ children, className = '' }: WordsProps) {
  const [language, setLanguage] = useState(() => localStorage.getItem('git-language') || 'en');
  const containerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const sync = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) setLanguage(customEvent.detail);
    };
    window.addEventListener('git-locale', sync);
    return () => window.removeEventListener('git-locale', sync);
  }, []);

  useEffect(() => {
    const current = localStorage.getItem('git-language') || 'en';
    if (current !== language) {
      setLanguage(current);
    }
  }, [language]);

  const rawText = typeof children === 'string' ? children : String(children ?? '');
  const source = rawText.trim();
  const copy = (translations[language] || {})[source] || source;
  const words = copy.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'start 35%']
  });

  return (
    <h2
      ref={containerRef}
      data-no-translate
      className={`scroll-text-highlight ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(start + (1 / words.length) * 1.5, 1);
        return (
          <ScrollWord key={`${language}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </ScrollWord>
        );
      })}
    </h2>
  );
}
