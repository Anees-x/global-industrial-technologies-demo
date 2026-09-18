import React, { useLayoutEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  key?: React.Key;
}

export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts: { immediate: boolean }) => void } }).__lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      try {
        lenis.scrollTo(0, { immediate: true });
      } catch {
        // fallback to standard scroll
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Dispatch event so translations and scroll integrations sync immediately upon page mount
    window.dispatchEvent(new CustomEvent('git-route-mounted'));
  }, []);

  if (shouldReduceMotion) {
    return <div className="page-transition-wrapper">{children}</div>;
  }

  return (
    <motion.div
      className="page-transition-wrapper"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.26,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
