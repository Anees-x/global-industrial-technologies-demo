import React from 'react';

interface GitLogoMarkProps {
  className?: string;
  dark?: boolean;
}

export function GitLogoMark({ className = '', dark = false }: GitLogoMarkProps) {
  const platGradId = dark ? 'gitDarkPlat' : 'gitLightPlat';
  const goldGradId = dark ? 'gitDarkGold' : 'gitLightGold';

  return (
    <svg
      viewBox="0 0 76 28"
      width="76"
      height="28"
      className={`git-logo-svg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Precision Steel / Platinum Gradient */}
        <linearGradient id="gitLightPlat" x1="0" y1="0" x2="0" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#EFF2EB" />
          <stop offset="100%" stopColor="#D5D9CE" />
        </linearGradient>

        <linearGradient id="gitDarkPlat" x1="0" y1="0" x2="0" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A1C19" />
          <stop offset="100%" stopColor="#0B0C0A" />
        </linearGradient>

        {/* Engineering Gold Gradient */}
        <linearGradient id="gitLightGold" x1="0" y1="0" x2="0" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE89E" />
          <stop offset="45%" stopColor="#FFBD35" />
          <stop offset="100%" stopColor="#D99411" />
        </linearGradient>

        <linearGradient id="gitDarkGold" x1="0" y1="0" x2="0" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E5A625" />
          <stop offset="100%" stopColor="#A66F0B" />
        </linearGradient>

        {/* Isometric Emblem Gradients */}
        <linearGradient id="isoTop" x1="0" y1="0" x2="16" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={dark ? '#333630' : '#FFFFFF'} />
          <stop offset="100%" stopColor={dark ? '#222520' : '#DDE1D6'} />
        </linearGradient>

        <linearGradient id="isoRight" x1="8" y1="8" x2="20" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFC857" />
          <stop offset="100%" stopColor="#D99411" />
        </linearGradient>

        <linearGradient id="isoLeft" x1="0" y1="8" x2="10" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={dark ? '#1F221D' : '#32362E'} />
          <stop offset="100%" stopColor={dark ? '#0F110E' : '#181A16'} />
        </linearGradient>
      </defs>

      {/* ── Precision Isometric Prism Emblem (Left) ── */}
      <g className="git-emblem-group">
        {/* Top Facet */}
        <path
          d="M 10 2 L 19 6.8 L 10 11.6 L 1 6.8 Z"
          fill="url(#isoTop)"
        />
        {/* Left Facet */}
        <path
          d="M 1 6.8 L 10 11.6 V 21.2 L 1 16.4 Z"
          fill="url(#isoLeft)"
        />
        {/* Right Facet (Gold Engineering Power Core) */}
        <path
          d="M 10 11.6 L 19 6.8 V 16.4 L 10 21.2 Z"
          fill="url(#isoRight)"
          className="git-logo-core"
        />
        {/* Central Precision Vertex Highlight */}
        <circle cx="10" cy="11.6" r="1" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* ── Monogram G (Precision Chamfered Vector) ── */}
      <path
        d="M 39 4 H 27 C 24.2 4 22 6.2 22 9 V 17 C 22 19.8 24.2 22 27 22 H 39 V 12.5 H 31.5 V 15.5 H 35.5 V 18.5 H 27 C 26.1 18.5 25.5 17.8 25.5 17 V 9 C 25.5 8.2 26.1 7.5 27 7.5 H 39 V 4 Z"
        fill={`url(#${platGradId})`}
      />
      <rect x="37.5" y="3" width="2" height="2" fill="#FFBD35" rx="0.5" />

      {/* ── Monogram I (Gold Monolith Pillar) ── */}
      <rect
        x="45"
        y="4"
        width="6.5"
        height="18"
        rx="1"
        fill={`url(#${goldGradId})`}
        className="git-logo-core"
      />
      <line
        x1="48.25"
        y1="6.5"
        x2="48.25"
        y2="19.5"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeOpacity="0.75"
        strokeLinecap="round"
      />

      {/* ── Monogram T (Precision Architectural Crossbar) ── */}
      <path
        d="M 57 4 H 75 V 7.5 H 68 V 22 H 64 V 7.5 H 57 V 4 Z"
        fill={`url(#${platGradId})`}
      />
      <rect x="56.5" y="3" width="2" height="2" fill="#FFBD35" rx="0.5" />
    </svg>
  );
}
