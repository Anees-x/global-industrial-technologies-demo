import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, X } from 'lucide-react';
import { Logo } from '../common/Logo';
import { LanguageControl } from '../common/LanguageControl';
import {
  activeIndicatorTransition,
  desktopLinks,
  mobileFooterVariants,
  mobileHeaderVariants,
  mobileLinkItemVariants,
  mobileLinks,
  mobileLinksContainerVariants,
  mobileMenuVariants,
} from '../../data/navigation';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [capOpen, setCapOpen] = useState(false);
  const desktopNavRef = useRef<HTMLElement | null>(null);
  const loc = useLocation();

  useEffect(() => setOpen(false), [loc.pathname]);

  // Escape key handler to close mobile menu
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (document.body.classList.contains('nav-settled')) return;
    if (!document.body.classList.contains('preloader-active')) {
      document.body.classList.add('nav-settled');
      return;
    }
    const mark = () => {
      if (!document.body.classList.contains('preloader-active')) {
        document.body.classList.add('nav-settled');
      }
    };
    const watch = new MutationObserver(mark);
    watch.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => watch.disconnect();
  }, []);

  // Navbar stays pinned on scroll — only toggles .nav-scrolled for glass/depth styling
  useEffect(() => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      nav.classList.toggle('nav-scrolled', y > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const active = (path: string) =>
    loc.pathname === path || (path !== '/' && loc.pathname.startsWith(path + '/'));
  const isMoreActive = active('/contact');

  return (
    <>
      <header className="nav">
        <div className="nav-brand">
          <Logo />
        </div>

        <LayoutGroup id="desktop-nav-group">
          <nav className="desktop-nav" ref={desktopNavRef} aria-label="Primary navigation">
            {desktopLinks.map(([n, p]) => {
              const isActive = active(p);
              return (
                <Link key={p} className={`nav-link ${isActive ? 'active' : ''}`} to={p}>
                  {isActive && (
                    <motion.span
                      layoutId="desktop-active-indicator"
                      className="nav-active-indicator"
                      transition={activeIndicatorTransition}
                      aria-hidden="true"
                    >
                      <span className="nav-active-indicator-glow" />
                      <span className="nav-active-indicator-bar" />
                    </motion.span>
                  )}
                  <span className="nav-link-label">{n}</span>
                </Link>
              );
            })}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setCapOpen(true)}
              onMouseLeave={() => setCapOpen(false)}
            >
              <button
                className={`nav-link ${isMoreActive ? 'active' : ''}`}
                onClick={() => setCapOpen((v) => !v)}
                aria-expanded={capOpen}
              >
                {isMoreActive && (
                  <motion.span
                    layoutId="desktop-active-indicator"
                    className="nav-active-indicator"
                    transition={activeIndicatorTransition}
                    aria-hidden="true"
                  >
                    <span className="nav-active-indicator-glow" />
                    <span className="nav-active-indicator-bar" />
                  </motion.span>
                )}
                <span className="nav-link-label">More</span>{' '}
                <ChevronDown size={11} className="nav-dropdown-chevron" />
              </button>
              <AnimatePresence>
                {capOpen && (
                  <motion.div
                    className="cap-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Link to="/catalog">
                      <span>01</span>
                      <div>
                        <b>E-Catalog</b>
                        <small>Continuous technical specification & PDF dossier</small>
                      </div>
                      <ArrowUpRight />
                    </Link>
                    <Link to="/solutions">
                      <span>02</span>
                      <div>
                        <b>Solutions</b>
                        <small>Processing, filling, packaging & automation</small>
                      </div>
                      <ArrowUpRight />
                    </Link>
                    <Link to="/services">
                      <span>03</span>
                      <div>
                        <b>Services</b>
                        <small>Complete 10-step service cycle & execution</small>
                      </div>
                      <ArrowUpRight />
                    </Link>
                    <Link to="/contact">
                      <span>04</span>
                      <div>
                        <b>Contact</b>
                        <small>Start a machinery or turnkey project enquiry</small>
                      </div>
                      <ArrowUpRight />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </LayoutGroup>

        <div className="nav-actions">
          <LanguageControl header />
          <Link className="nav-quote" to="/contact">
            <span>Start a project</span>
            <ArrowUpRight size={13} />
          </Link>
          <button
            className={`mobile-menu-trigger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="git-mobile-navigation"
          >
            <span className="mobile-menu-trigger-label">{open ? 'CLOSE' : 'MENU'}</span>
            <span className="hamburger-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="git-mobile-navigation"
              className="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mobile-menu-glow" aria-hidden="true" />
              <motion.div className="mobile-menu-top" variants={mobileHeaderVariants}>
                <div className="mobile-menu-meta">
                  <span>GIT // NAVIGATION</span>
                  <span>01—07</span>
                </div>
                <div className="mobile-menu-tools">
                  <LanguageControl mobile />
                  <button
                    className="mobile-close"
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation"
                  >
                    <span>ESC</span>
                    <X />
                  </button>
                </div>
              </motion.div>
              <motion.div className="mobile-links" variants={mobileLinksContainerVariants}>
                {mobileLinks.map(([num, label, path]) => {
                  const isItemActive = active(path);
                  return (
                    <motion.div key={path} variants={mobileLinkItemVariants}>
                      <Link
                        className={`mobile-link-item ${isItemActive ? 'active' : ''}`}
                        to={path}
                        onClick={() => setOpen(false)}
                      >
                        <span className="mobile-link-num">{num}</span>
                        <span className="mobile-link-name">{label}</span>
                        <span className="mobile-link-state">
                          {isItemActive ? (
                            <span className="mobile-active-pill">
                              <span className="mobile-active-pulse" />
                              ACTIVE
                            </span>
                          ) : (
                            <>
                              GO <ArrowUpRight />
                            </>
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div variants={mobileLinkItemVariants} className="mobile-menu-cta-wrap">
                  <Link className="mobile-contact" to="/contact" onClick={() => setOpen(false)}>
                    <div className="mobile-contact-content">
                      <span className="mobile-contact-eyebrow">PROJECT ENQUIRY</span>
                      <span className="mobile-contact-title">Start a Project</span>
                    </div>
                    <span className="mobile-contact-icon">
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div className="mobile-menu-foot" variants={mobileFooterVariants}>
                <span>GLOBAL INDUSTRIAL TECHNOLOGIES</span>
                <span>MACHINERY / ENGINEERING / TURNKEY</span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
