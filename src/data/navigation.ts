export const desktopLinks: [string, string][] = [
  ['Home', '/'],
  ['Products', '/products'],
  ['E-Catalog', '/catalog'],
  ['Solutions', '/solutions'],
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Projects', '/projects'],
  ['About', '/about']
];

export const mobileLinks: [string, string, string][] = [
  ['01', 'Home', '/'],
  ['02', 'Products', '/products'],
  ['03', 'E-Catalog', '/catalog'],
  ['04', 'Solutions', '/solutions'],
  ['05', 'Services', '/services'],
  ['06', 'Industries', '/industries'],
  ['07', 'Projects', '/projects'],
  ['08', 'About', '/about']
];

export const activeIndicatorTransition = {
  type: 'spring' as const,
  stiffness: 280,
  damping: 28,
  mass: 0.6,
};

export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      when: 'beforeChildren' as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      when: 'afterChildren' as const,
    },
  },
};

export const mobileLinksContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

export const mobileLinkItemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    x: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.42,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.16,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export const mobileHeaderVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

export const mobileFooterVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, delay: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: { opacity: 0, y: 8, transition: { duration: 0.15 } },
};
