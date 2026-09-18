import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';
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
