import React from 'react';

interface GitLogoMarkProps {
  className?: string;
  dark?: boolean;
}

export function GitLogoMark({ className = '', dark = false }: GitLogoMarkProps) {
  const primaryFill = dark ? 'url(#gitDarkCharcoal)' : 'url(#gitPlatinumGrad)';

  return (
    <svg
      viewBox="0 0 68 24"
      width="68"
      height="24"
      className={`git-logo-svg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Metallic platinum gradient for primary letters */}
        <linearGradient id="gitPlatinumGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f3f5f0" />
          <stop offset="100%" stopColor="#d5d9cf" />
        </linearGradient>

        {/* Engineering gold gradient for core I */}
        <linearGradient id="gitGoldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffea9f" />
          <stop offset="45%" stopColor="#ffbd35" />
          <stop offset="100%" stopColor="#d49310" />
        </linearGradient>

        {/* Dark charcoal gradient for dark mode fallback */}
        <linearGradient id="gitDarkCharcoal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#181a16" />
          <stop offset="100%" stopColor="#0a0b09" />
        </linearGradient>
      </defs>

      {/* Letter G (Solid Precision Engineering Path) */}
      <path
        d="M 21 3 H 6 C 3.2 3 1 5.2 1 8 V 16 C 1 18.8 3.2 21 6 21 H 21 V 12 H 11 V 15 H 17.5 V 18 H 6 C 4.9 18 4 17.1 4 16 V 8 C 4 6.9 4.9 6 6 6 H 21 V 3 Z"
        fill={primaryFill}
      />
      {/* Precision corner accent on G */}
      <circle cx="21" cy="3" r="0.75" fill="#ffbd35" />

      {/* Letter I (Gold Core Monolith) */}
      <rect
        x="29.5"
        y="3"
        width="7"
        height="18"
        fill="url(#gitGoldGrad)"
        rx="1"
        className="git-logo-core"
      />
      {/* Precision core center axis line */}
      <line
        x1="33"
        y1="5"
        x2="33"
        y2="19"
        stroke="#ffffff"
        strokeWidth="0.9"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />

      {/* Letter T (Solid Precision Engineering Path) */}
      <path
        d="M 45 3 H 67 V 6 H 58.5 V 21 H 53.5 V 6 H 45 V 3 Z"
        fill={primaryFill}
      />
      {/* Precision corner accent on T */}
      <circle cx="45" cy="3" r="0.75" fill="#ffbd35" />
    </svg>
  );
}
