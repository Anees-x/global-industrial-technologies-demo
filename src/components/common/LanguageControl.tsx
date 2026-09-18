import React, { ChangeEvent, useEffect, useState } from 'react';
import { ChevronDown, Globe2 } from 'lucide-react';

interface LanguageControlProps {
  mobile?: boolean;
  header?: boolean;
}

export function LanguageControl({ mobile = false, header = false }: LanguageControlProps) {
  const [language, setLanguage] = useState(() => localStorage.getItem('git-language') || 'en');
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    const sync = (event: Event) => {
      const customEvent = event as CustomEvent<{ state?: string }>;
      setApplying(customEvent.detail?.state === 'applying');
    };
    window.addEventListener('git-translation-state', sync);
    return () => window.removeEventListener('git-translation-state', sync);
  }, []);

  useEffect(() => {
    const sync = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setLanguage(customEvent.detail);
      }
      setApplying(false);
    };
    window.addEventListener('git-locale', sync);
    return () => window.removeEventListener('git-locale', sync);
  }, []);

  const change = (event: ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value;
    setLanguage(next);
    (window as unknown as { gitTranslateApply?: (lang: string) => void }).gitTranslateApply?.(next);
  };

  const langCode = (language || 'en').toUpperCase();
  const prefixText = mobile
    ? language === 'pt'
      ? 'IDM'
      : language === 'fr'
      ? 'LNG'
      : 'LANG'
    : language === 'pt'
    ? 'IDIOMA'
    : language === 'fr'
    ? 'LANGUE'
    : 'LANGUAGE';

  return (
    <label
      data-no-translate
      className={`language-control ${mobile ? 'language-control-mobile' : ''} ${
        header ? 'nav-language-control' : ''
      } ${applying ? 'is-applying' : ''}`}
      aria-label="Choose website language"
    >
      <Globe2 aria-hidden="true" size={13} />
      <span className="language-prefix">{prefixText}</span>
      <span className="language-value" aria-hidden="true">
        {langCode}
      </span>
      <ChevronDown size={10} className="language-chevron" aria-hidden="true" />
      <select
        className="language-select-hitarea"
        value={language}
        onChange={change}
        disabled={applying}
        aria-label="Website language"
      >
        <option value="en">English (EN)</option>
        <option value="pt">Português (PT)</option>
        <option value="fr">Français (FR)</option>
      </select>
      {applying && <i className="language-progress" aria-label="Applying translation" />}
    </label>
  );
}
