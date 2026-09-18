import React from 'react';

interface GitLogoMarkProps {
  className?: string;
  dark?: boolean;
}

export function GitLogoMark({ className = '', dark = false }: GitLogoMarkProps) {
  const primaryFill = dark ? 'url(#gitDarkGrad)' : 'url(#gitPlatGrad)';

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
        <linearGradient id="gitPlatGrad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#EFF2EB" />
          <stop offset="100%" stopColor="#CCD1C6" />
        </linearGradient>

        {/* Engineering gold gradient for core I */}
        <linearGradient id="gitGoldGrad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE89E" />
          <stop offset="50%" stopColor="#FFBD35" />
          <stop offset="100%" stopColor="#D99411" />
        </linearGradient>

        {/* Dark charcoal gradient for dark mode fallback */}
        <linearGradient id="gitDarkGrad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E201C" />
          <stop offset="100%" stopColor="#0B0C0A" />
        </linearGradient>
      </defs>

      {/* Letter G (Solid Precision Engineering Path) */}
      <path
        d="M 22 3 H 7 C 4.2 3 2 5.2 2 8 V 16 C 2 18.8 4.2 21 7 21 H 22 V 11.5 H 12 V 14.5 H 18 V 17.5 H 7 C 6.2 17.5 5.5 16.8 5.5 16 V 8 C 5.5 7.2 6.2 6.5 7 6.5 H 22 V 3 Z"
        fill={primaryFill}
      />
      <rect x="20.5" y="2" width="2" height="2" fill="#FFBD35" rx="0.5" />

      {/* Letter I (Gold Core Monolith) */}
      <rect
        x="29.5"
        y="3"
        width="7"
        height="18"
        rx="1.5"
        fill="url(#gitGoldGrad)"
        className="git-logo-core"
      />
      <line
        x1="33"
        y1="5.5"
        x2="33"
        y2="18.5"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeOpacity="0.6"
        strokeLinecap="round"
      />

      {/* Letter T (Solid Precision Engineering Path) */}
      <path
        d="M 44 3 H 66 V 6.5 H 57.5 V 21 H 52.5 V 6.5 H 44 V 3 Z"
        fill={primaryFill}
      />
      <rect x="43.5" y="2" width="2" height="2" fill="#FFBD35" rx="0.5" />
    </svg>
  );
}
