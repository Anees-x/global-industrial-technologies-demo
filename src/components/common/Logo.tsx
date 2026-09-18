import React from 'react';
import { Link } from 'react-router-dom';
import { GitLogoMark } from './GitLogoMark';

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={`logo ${dark ? 'logo-dark' : ''}`}
      aria-label="Global Industrial Technologies home"
      data-no-translate
    >
      <GitLogoMark dark={dark} className="logo-git-mark" />
      <span className="logo-divider" aria-hidden="true" />
      <div className="logo-brand-wrap">
        <span className="logo-brand-title">GLOBAL INDUSTRIAL</span>
        <span className="logo-brand-sub">TECHNOLOGIES</span>
      </div>
    </Link>
  );
}
