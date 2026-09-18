import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div className="progress" style={{ scaleX, transformOrigin: '0%' }} />;
}
