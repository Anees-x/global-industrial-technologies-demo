import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Download,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Layers,
  Radio,
  RotateCw,
  ScanLine,
  ShieldCheck,
  Sliders,
  Sparkles,
  Workflow
} from 'lucide-react';
import { Words } from '../components/common/Words';
import { Reveal } from '../components/common/Reveal';
import { IMG } from '../data/assets';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { DossierBackgroundCanvas } from '../components/common/DossierBackgroundCanvas';

function Hero() {
  return (
    <section className="hero hero-editorial">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span>GIT / 001</span>
          <b>TURNKEY INDUSTRIAL SYSTEMS</b>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          WE BUILD THE
          <br />
          <em>SYSTEM AROUND</em>
          <br />
          THE MACHINE.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Machinery indenting, procurement, installation, commissioning, cleanroom solutions and
          technical support for food, beverage, cosmetics and packaging production.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link className="button dark hero-primary" to="/services">
            Explore capabilities <ArrowRight size={16} />
          </Link>
          <Link className="button btn-catalog hero-catalog-btn" to="/catalog">
            <FileText size={15} /> View Catalog
          </Link>
        </motion.div>
        <div className="hero-micro">
          <span>01 / CONSULT</span>
          <span>02 / SOURCE</span>
          <span>03 / INSTALL</span>
          <span>04 / COMMISSION</span>
        </div>
      </div>
      <div className="hero-visual">
        <img src={IMG.hero} alt="Automated industrial filling and packaging production line" />
        <div className="hero-visual-shade" />
        <div className="hero-visual-top">
          <span>LIVE SYSTEM VIEW</span>
          <span>FOOD / BEVERAGE / PACKAGING</span>
        </div>
        <div className="hero-visual-caption">
          <b>PRECISION IN MOTION.</b>
          <span>Production-line machinery / integration / handover</span>
        </div>
        <div className="hero-visual-index">01</div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />

      {/* 01 / WHAT WE DO */}
      <section className="intro section section-rule">
        <div className="eyebrow">01 / WHAT WE DO</div>
        <div>
          <Words>ONE PARTNER. THE MACHINERY, SUPPORT AND ENGINEERING AROUND IT.</Words>
          <Reveal>
            <p className="lede">
              Global Industrial Technologies helps manufacturers source, install and operate
              machinery as a complete project — not as a collection of disconnected purchases.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 / SERVICE CYCLE */}
      <section className="service-feature section">
        <div className="section-head">
          <div className="eyebrow">02 / OUR SERVICE CYCLE</div>
          <Link to="/services">
            All 10 steps <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="service-layout">
          <div className="service-image frame">
            <img src={IMG.commissioning} alt="Engineers commissioning an automated production line" />
            <div className="image-tag">
              GIT / SERVICE CYCLE
              <br />
              END-TO-END EXECUTION
            </div>
          </div>
          <div className="service-list">
            {services.map((s, i) => (
              <Reveal delay={i * 0.03} key={s.id}>
                <Link className="service-row" to="/services">
                  <span>{s.id}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                  </div>
                  <ArrowUpRight />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / OUR CORE PHILOSOPHY */}
      <CompanyPhilosophyShowcase />

      {/* 04 / INDUSTRIES */}
      <section className="industries-dark dark-section">
        <div className="section">
          <div className="eyebrow light">04 / INDUSTRIES</div>
          <Words>BUILT AROUND THE PRODUCT, THE PROCESS AND THE OUTPUT.</Words>
          <div className="industry-grid">
            {industries.map((it, i) => (
              <Reveal
                delay={i * 0.05}
                className={`industry-card frame ${i === 0 || i === 3 ? 'large' : ''}`}
                key={it.id}
              >
                <Link to="/industries">
                  <img src={it.img} alt={`${it.title} industrial machinery`} loading="lazy" />
                  <div className="card-shade" />
                  <div className="industry-card-tag">
                    {it.id} / {it.title.toUpperCase()}
                  </div>
                  <div className="industry-info">
                    <span>SECTOR {it.id}</span>
                    <h3>{it.title}</h3>
                    <p>{it.copy}</p>
                    <div className="industry-card-arrow">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="industry-strip">
            <span>Don't see your sector?</span>
            <Link to={`/contact?subject=${encodeURIComponent('Custom Industry Application')}&message=${encodeURIComponent('We would like to discuss custom machinery and process requirements for our specialized industry application.')}`}>
              Discuss custom industry application <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 / MACHINERY & DIGITAL CATALOG */}
      <InteractiveSpecificationDossier />

      {/* 06 / FINAL CTA */}
      <section className="final-cta">
        <div className="eyebrow">06 / START A PROJECT</div>
        <Words>READY TO START YOUR NEXT PROJECT?</Words>
        <p>Tell us your product, capacity, and timeline. We'll build the scope around it.</p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="button light btn-catalog" to="/catalog">
            <FileText size={15} /> View E-Catalog
          </Link>
          <Link
            className="button dark"
            to={`/contact?subject=${encodeURIComponent('New Project Consultation')}&message=${encodeURIComponent('We are preparing a new industrial production facility and would like to start project discussions.')}`}
          >
            Start the conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

/* ==========================================================================
   ICONIC COMPANY PHILOSOPHY MONOLITH (SECTION 02.5)
   ========================================================================== */
function CompanyPhilosophyShowcase() {
  return (
    <section className="home-philosophy-section">
      <div className="section">
        <div className="eyebrow">03 / OUR CORE PHILOSOPHY</div>
        <div className="home-phil-monolith frame">
          {/* Ambient Lighting & CAD Grid Effects */}
          <div className="phil-glow-mesh" aria-hidden="true" />
          <div className="phil-cad-grid" aria-hidden="true" />
          <div className="phil-laser-beam" aria-hidden="true" />

          {/* Corner Precision Crosshairs */}
          <div className="phil-crosshair tl" aria-hidden="true" />
          <div className="phil-crosshair tr" aria-hidden="true" />
          <div className="phil-crosshair bl" aria-hidden="true" />
          <div className="phil-crosshair br" aria-hidden="true" />

          {/* Top Precision HUD Meta */}
          <div className="phil-meta-header">
            <div className="phil-status-pill">
              <span className="phil-status-ping" />
              <span className="phil-status-dot" />
              <span>GIT // OUR CORE PHILOSOPHY</span>
            </div>
            <div className="phil-datum-stamps">
              <span>ONE COMPLETE SYSTEM</span>
              <span className="sep">•</span>
              <span>100% FACTORY TESTED</span>
              <span className="sep">•</span>
              <span className="phil-gold-stamp">LIFECYCLE SUPPORT</span>
            </div>
          </div>

          {/* Powerful Quote & Editorial Body */}
          <div className="phil-monolith-content">
            <div className="phil-kicker-tag">HOW WE WORK</div>

            <h2 className="phil-monolith-quote">
              “WE DO NOT BELIEVE IN
              <br />
              <span className="quote-gold">ISOLATED MACHINES.</span>”
            </h2>

            <p className="phil-monolith-subquote">
              A single machine cannot succeed on its own. We design complete, connected production lines —
              bringing filling, capping, packaging, and cleanrooms together with one dedicated team responsible from start to finish.
            </p>

            {/* 3 Hallmark Architectural Pillars */}
            <div className="phil-hallmarks-row">
              <div className="phil-hallmark-card">
                <div className="hallmark-idx">01</div>
                <div className="hallmark-body">
                  <strong>One Responsible Partner</strong>
                  <span>We manage your entire project from start to finish so you never deal with multiple competing vendors.</span>
                </div>
              </div>

              <div className="phil-hallmark-card">
                <div className="hallmark-idx">02</div>
                <div className="hallmark-body">
                  <strong>100% Tested Before Delivery</strong>
                  <span>Every machine is thoroughly tested with your actual products and bottles before shipping to your site.</span>
                </div>
              </div>

              <div className="phil-hallmark-card">
                <div className="hallmark-idx">03</div>
                <div className="hallmark-body">
                  <strong>Built for Long-Term Reliability</strong>
                  <span>High-grade stainless steel construction with globally standard parts that are easy to operate and maintain.</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="phil-monolith-actions">
              <Link className="button btn-catalog" to="/services">
                <span>Explore 10-Step Service Cycle</span>
                <ArrowRight size={15} />
              </Link>
              <Link className="button dark" to="/about">
                <span>About Our Approach</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   INTERACTIVE TECHNICAL CATALOGUE GATEWAY (SECTION 05.5)
   ========================================================================== */
function InteractiveSpecificationDossier() {
  const [activePill, setActivePill] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scopeHighlights = [
    {
      num: '01',
      title: 'Filling & Packaging Machines',
      subtitle: 'Accurate filling and capping systems for liquids, oils, creams, and powders with easy automated cleaning.',
      meta: '5 ml to 5 Liters • Up to 6,000 Bottles/Hour • Stainless Steel • Touchscreen Controls'
    },
    {
      num: '02',
      title: 'Labeling & Box Packaging',
      subtitle: 'Automatic bottle labeling, camera inspection for barcodes, box packing, and smooth conveyor movement.',
      meta: 'High-Precision Labeling • Up to 12,000 Bottles/Hour • Automatic Defect Check • Conveyor Sync'
    },
    {
      num: '03',
      title: 'Cleanrooms & Controlled Rooms',
      subtitle: 'Pre-built modular cleanrooms with high-efficiency air filters, temperature control, and dust-free environments.',
      meta: 'ISO Certified Standards • Air-Lock Doors • Full Temperature & Humidity Control'
    },
    {
      num: '04',
      title: '100% Factory Testing Before Delivery',
      subtitle: 'Every machine is fully tested with your actual containers and products before delivery to guarantee zero surprises.',
      meta: 'Tested with Real Products • Full Quality Inspection • Complete Test Reports Included'
    }
  ];

  const handlePillClick = (idx: number) => {
    if (isMobile) {
      setActivePill(activePill === idx ? null : idx);
    }
  };

  return (
    <section className="interactive-dossier-section">
      <div className="section">
        <div className="eyebrow">05 / MACHINERY &amp; DIGITAL CATALOG</div>
        <div className="interactive-dossier-card frame">
          {/* Interactive High-Tech CAD Telemetry Canvas */}
          <DossierBackgroundCanvas />

          {/* Corner Precision Crosshairs */}
          <div className="dossier-crosshair tl" aria-hidden="true" />
          <div className="dossier-crosshair tr" aria-hidden="true" />
          <div className="dossier-crosshair bl" aria-hidden="true" />
          <div className="dossier-crosshair br" aria-hidden="true" />

          {/* Top Console Bar */}
          <div className="dossier-console-head">
            <div className="dossier-kicker">
              <span className="dossier-kicker-dot" />
              <span>PRODUCT CATALOG // 2026 OVERVIEW</span>
            </div>
            <div className="dossier-top-badge">
              <ShieldCheck size={13} />
              <span>cGMP & ISO QUALITY CERTIFIED</span>
            </div>
          </div>

          {/* Main Layout (Clean, Expansive, Full-Width Architecture) */}
          <div className="dossier-expanded-layout">
            <div className="dossier-header-block">
              <h2 className="dossier-spec-heading">
                EXPLORE OUR COMPLETE <br />
                <span className="heading-highlight">MACHINERY & SYSTEM CATALOG.</span>
              </h2>

              <p className="dossier-spec-summary">
                Browse complete technical details, machine dimensions, cleanroom setups, and testing guidelines in our easy-to-read digital catalog.
              </p>
            </div>

            {/* Engineering Scope Highlights (Desktop Always Expanded / Mobile Smooth Accordion) */}
            <div className="gateway-scope-pills" role="tablist" aria-label="Catalog Sections">
              {scopeHighlights.map((item, idx) => {
                const isOpen = !isMobile || activePill === idx;
                return (
                  <div
                    key={idx}
                    className={`gateway-scope-pill ${isOpen ? 'active' : ''} ${!isMobile ? 'desktop-expanded' : 'mobile-interactive'}`}
                    onClick={() => handlePillClick(idx)}
                    role={isMobile ? 'tab' : 'region'}
                    aria-selected={isOpen}
                    tabIndex={isMobile ? 0 : undefined}
                  >
                    <div className="pill-head">
                      <span className="pill-num">{item.num}</span>
                      <strong className="pill-title">{item.title}</strong>
                      {isMobile && (
                        <ChevronRight
                          size={14}
                          className="pill-arrow"
                          style={{
                            transform: activePill === idx ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                      )}
                    </div>

                    {!isMobile ? (
                      /* Desktop: Always fully rendered with crisp formatting */
                      <div className="pill-details permanent">
                        <p>{item.subtitle}</p>
                        <span className="pill-meta-tag">{item.meta}</span>
                      </div>
                    ) : (
                      /* Mobile: Silky Smooth Spring-Animated Accordion */
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            className="pill-details"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p>{item.subtitle}</p>
                            <span className="pill-meta-tag">{item.meta}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Actions Row */}
            <div className="dossier-action-row">
              <Link className="button btn-catalog" to="/catalog">
                <FileText size={15} />
                <span>Open E-Catalog & PDF</span>
                <ArrowRight size={15} />
              </Link>
              <Link className="button glass" to="/catalog">
                <span>Preview 5 Technical Sheets</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link className="button dark" to="/products">
                <span>Browse All Machines</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


