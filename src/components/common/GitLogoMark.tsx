import React from 'react';

interface GitLogoMarkProps {
  className?: string;
  dark?: boolean;
}

export function GitLogoMark({ className = '', dark = false }: GitLogoMarkProps) {
  const platGrad = dark ? 'gitDarkSteel' : 'gitLightSteel';
  const goldGrad = dark ? 'gitDarkAmber' : 'gitLightAmber';

  return (
    <svg
      viewBox="0 0 84 28"
      width="84"
      height="28"
      className={`git-logo-svg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Luxury Platinum / Titanium Gradient */}
        <linearGradient id="gitLightSteel" x1="0" y1="0" x2="84" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#EFF2EB" />
          <stop offset="100%" stopColor="#CBD0C4" />
        </linearGradient>

        <linearGradient id="gitDarkSteel" x1="0" y1="0" x2="84" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#222520" />
          <stop offset="100%" stopColor="#0E100D" />
        </linearGradient>

        {/* Precision Engineering Gold Gradient */}
        <linearGradient id="gitLightAmber" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF0B8" />
          <stop offset="40%" stopColor="#FFBD35" />
          <stop offset="100%" stopColor="#D48E08" />
        </linearGradient>

        <linearGradient id="gitDarkAmber" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E5A625" />
          <stop offset="100%" stopColor="#966304" />
        </linearGradient>

        {/* Facet Sheen for Hexagonal Emblem */}
        <linearGradient id="hexFacetTop" x1="0" y1="0" x2="24" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={dark ? '#3A3E36' : '#FFFFFF'} />
          <stop offset="100%" stopColor={dark ? '#222520' : '#E2E6DC'} />
        </linearGradient>
        <linearGradient id="hexFacetLeft" x1="0" y1="12" x2="12" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={dark ? '#222620' : '#3B4037'} />
          <stop offset="100%" stopColor={dark ? '#111310' : '#1D201A'} />
        </linearGradient>
      </defs>

      {/* ── Luxury Precision Hexagonal Vault Emblem ── */}
      <g className="git-emblem-group" transform="translate(1, 1)">
        {/* Outer Hexagon Shield Ring */}
        <path
          d="M 12 1 L 22.5 7 V 19 L 12 25 L 1.5 19 V 7 Z"
          stroke={dark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)'}
          strokeWidth="1"
          fill="none"
        />

        {/* Top Facet (Platinum Mirror) */}
        <path
          d="M 12 2.5 L 21 7.5 L 12 12.5 L 3 7.5 Z"
          fill="url(#hexFacetTop)"
        />

        {/* Left Facet (Industrial Obsidian Steel) */}
        <path
          d="M 3 7.5 L 12 12.5 V 23.5 L 3 18.5 Z"
          fill="url(#hexFacetLeft)"
        />

        {/* Right Facet (Engineering Gold Power Core) */}
        <path
          d="M 12 12.5 L 21 7.5 V 18.5 L 12 23.5 Z"
          fill={`url(#${goldGrad})`}
          className="git-logo-core"
        />

        {/* Core Intersection Vertex */}
        <circle cx="12" cy="12.5" r="1.2" fill="#FFFFFF" opacity="0.95" />
      </g>

      {/* ── Monogram G (Precision Aerospace Chamfer) ── */}
      <path
        d="M 44 4 H 32 C 29.2 4 27 6.2 27 9 V 17 C 27 19.8 29.2 22 32 22 H 44 V 12.5 H 36.5 V 15.5 H 40.5 V 18.5 H 32 C 31.1 18.5 30.5 17.8 30.5 17 V 9 C 30.5 8.2 31.1 7.5 32 7.5 H 44 V 4 Z"
        fill={`url(#${platGrad})`}
      />
      <rect x="42.5" y="3" width="2" height="2" fill="#FFBD35" rx="0.5" />

      {/* ── Monogram I (Gold Monolith Pillar) ── */}
      <rect
        x="51"
        y="4"
        width="6.5"
        height="18"
        rx="1.2"
        fill={`url(#${goldGrad})`}
        className="git-logo-core"
      />
      <line
        x1="54.25"
        y1="6.5"
        x2="54.25"
        y2="19.5"
        stroke="#FFFFFF"
        strokeWidth="0.9"
        strokeOpacity="0.8"
        strokeLinecap="round"
      />

      {/* ── Monogram T (Architectural Precision Crossbar) ── */}
      <path
        d="M 64 4 H 82 V 7.5 H 75 V 22 H 71 V 7.5 H 64 V 4 Z"
        fill={`url(#${platGrad})`}
      />
      <rect x="63.5" y="3" width="2" height="2" fill="#FFBD35" rx="0.5" />
    </svg>
  );
}
