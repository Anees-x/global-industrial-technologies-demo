import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { translations } from '../../data/translations';

export function TranslationBridge() {
  const [language, setLanguage] = useState(() => localStorage.getItem('git-language') || 'en');
  const [ready, setReady] = useState(false);
  const originalText = useRef(new WeakMap<Node, string>());
  const isTranslating = useRef(false);
  const location = useLocation();

  const emitTranslationState = useCallback((state: string) => {
    window.dispatchEvent(new CustomEvent('git-translation-state', { detail: { state } }));
  }, []);

  const applyTranslation = useCallback(() => {
    if (isTranslating.current) return;
    isTranslating.current = true;

    try {
      const dictionary = translations[language] || {};
      const lowerDict: Record<string, string> = {};
      Object.keys(dictionary).forEach((k) => {
        lowerDict[k.toLowerCase().trim()] = dictionary[k];
      });

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node: Node) {
          if (!node.parentElement) return NodeFilter.FILTER_REJECT;
          const tagName = node.parentElement.tagName.toLowerCase();
          if (tagName === 'script' || tagName === 'style' || tagName === 'noscript') {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.parentElement.closest('[data-no-translate]')) return NodeFilter.FILTER_REJECT;
          if (node.parentElement.closest('.site-entrance-minimal')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });

      const resolveTranslation = (raw: string): string | undefined => {
        const trimmed = raw.trim();
        if (!trimmed) return undefined;

        // 1. Direct dictionary match
        if (dictionary[trimmed]) return dictionary[trimmed];

        // 2. Normalized spaces match
        const normalized = trimmed.replace(/\s+/g, ' ');
        if (dictionary[normalized]) return dictionary[normalized];

        // 3. Punctuation / Quote wrapper resolution (e.g. “WE DO NOT BELIEVE IN or ISOLATED MACHINES.”)
        const quoteMatch = trimmed.match(/^([“"‘'«(—•\s]*)(.*?)([”"’'»):.,—•\s]*)$/);
        if (quoteMatch && quoteMatch[2] && (quoteMatch[1] || quoteMatch[3])) {
          const prefix = quoteMatch[1];
          const core = quoteMatch[2].trim();
          const suffix = quoteMatch[3];
          if (dictionary[core]) {
            return `${prefix}${dictionary[core]}${suffix}`;
          }
          if (lowerDict[core.toLowerCase()]) {
            return `${prefix}${lowerDict[core.toLowerCase()]}${suffix}`;
          }
        }

        // 4. Case-insensitive lookup
        const lower = trimmed.toLowerCase();
        if (lowerDict[lower]) return lowerDict[lower];

        // 5. Uppercase transform fallback
        if (
          trimmed === trimmed.toUpperCase() &&
          trimmed.length > 1 &&
          dictionary[trimmed.charAt(0) + trimmed.slice(1).toLowerCase()]
        ) {
          return dictionary[trimmed.charAt(0) + trimmed.slice(1).toLowerCase()].toUpperCase();
        }

        // 6. Leading / Trailing Slash Fallbacks
        if (trimmed.startsWith('/ ') && dictionary[trimmed.slice(2).trim()]) {
          return `/ ${dictionary[trimmed.slice(2).trim()]}`;
        }
        if (trimmed.endsWith(' /') && dictionary[trimmed.slice(0, -2).trim()]) {
          return `${dictionary[trimmed.slice(0, -2).trim()]} /`;
        }

        // 7. Dynamic Pattern Matches
        // STEP 01 -> ETAPA 01 / ÉTAPE 01
        const stepMatch = trimmed.match(/^STEP\s+(\d+)$/i);
        if (stepMatch) {
          return language === 'pt' ? `ETAPA ${stepMatch[1]}` : `ÉTAPE ${stepMatch[1]}`;
        }

        // ITEM 01 -> ITEM 01 / ARTICLE 01
        const itemMatch = trimmed.match(/^ITEM\s+(\d+)$/i);
        if (itemMatch) {
          return language === 'pt' ? `ITEM ${itemMatch[1]}` : `ARTICLE ${itemMatch[1]}`;
        }

        // SHEET 01 OF 05 -> FICHA 01 DE 05 / FICHE 01 SUR 05
        const sheetMatch = trimmed.match(/^SHEET\s+(\d+)\s+OF\s+(\d+)$/i);
        if (sheetMatch) {
          return language === 'pt'
            ? `FICHA ${sheetMatch[1]} DE ${sheetMatch[2]}`
            : `FICHE ${sheetMatch[1]} SUR ${sheetMatch[2]}`;
        }

        return undefined;
      };

      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (!originalText.current.has(node)) {
          originalText.current.set(node, node.nodeValue || '');
        }
        const source = originalText.current.get(node) || '';
        const trimmed = source.trim();
        if (!trimmed) continue;

        if (language === 'en') {
          if (node.nodeValue !== source) {
            node.nodeValue = source;
          }
        } else {
          const translated = resolveTranslation(trimmed);

          if (translated) {
            const target = source.replace(trimmed, translated);
            if (node.nodeValue !== target) {
              node.nodeValue = target;
            }
          } else if (node.nodeValue !== source) {
            node.nodeValue = source;
          }
        }
      }

      // Attributes translation
      document.querySelectorAll('[aria-label],[placeholder],[title]').forEach((element) => {
        if (element.closest('[data-no-translate]')) return;
        ['aria-label', 'placeholder', 'title'].forEach((attribute) => {
          const originalAttribute = `data-git-original-${attribute}`;
          const source = element.getAttribute(originalAttribute) ?? element.getAttribute(attribute);
          if (source === null) return;
          if (!element.hasAttribute(originalAttribute)) {
            element.setAttribute(originalAttribute, source);
          }
          const trimmed = source.trim();
          const translated =
            language === 'en'
              ? source
              : dictionary[trimmed] || dictionary[source] || source;
          if (element.getAttribute(attribute) !== translated) {
            element.setAttribute(attribute, translated);
          }
        });
      });

      document.documentElement.lang = language;
    } finally {
      isTranslating.current = false;
    }
  }, [language]);

  // Mark ready on initial mount
  useEffect(() => {
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Listen to external/global language changes
  useEffect(() => {
    const handleLocale = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail && customEvent.detail !== language) {
        setLanguage(customEvent.detail);
      }
    };
    window.addEventListener('git-locale', handleLocale);

    (window as unknown as { gitTranslateApply?: (lang: string) => void }).gitTranslateApply = (next: string) => {
      localStorage.setItem('git-language', next);
      setLanguage(next);
      window.dispatchEvent(new CustomEvent('git-locale', { detail: next }));
    };

    return () => {
      window.removeEventListener('git-locale', handleLocale);
      delete (window as unknown as { gitTranslateApply?: unknown }).gitTranslateApply;
    };
  }, [language]);

  // Re-run translation on language change or route navigation (pathname, search, hash)
  useEffect(() => {
    if (!ready) return;

    emitTranslationState('applying');
    applyTranslation();

    const f1 = requestAnimationFrame(() => {
      applyTranslation();
      emitTranslationState('idle');
    });
    const t1 = setTimeout(() => applyTranslation(), 60);
    const t2 = setTimeout(() => applyTranslation(), 200);
    const t3 = setTimeout(() => applyTranslation(), 500);

    return () => {
      cancelAnimationFrame(f1);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [language, ready, location.pathname, location.search, location.hash, applyTranslation, emitTranslationState]);

  // MutationObserver to watch for any dynamically added DOM nodes (modals, dropdowns, transitions)
  useEffect(() => {
    if (!ready || language === 'en') return;

    let timeoutId: number | undefined;

    const observer = new MutationObserver((mutations) => {
      if (isTranslating.current) return;
      let hasAdded = false;
      for (const m of mutations) {
        if (m.type === 'childList' && m.addedNodes.length > 0) {
          hasAdded = true;
          break;
        }
      }

      if (hasAdded) {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          applyTranslation();
        }, 25);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, [ready, language, applyTranslation]);

  // Immediately translate whenever a new page route mounts
  useEffect(() => {
    if (!ready || language === 'en') return;

    const onRouteMounted = () => {
      applyTranslation();
      requestAnimationFrame(() => applyTranslation());
    };

    window.addEventListener('git-route-mounted', onRouteMounted);
    return () => window.removeEventListener('git-route-mounted', onRouteMounted);
  }, [ready, language, applyTranslation]);

  return null;
}
