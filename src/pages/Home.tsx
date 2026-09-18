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

      {/* =========================================================
          AWARD-WINNING COMPANY PHILOSOPHY SHOWCASE (SECTION 02.5)
          ========================================================= */}
      <CompanyPhilosophyShowcase />

      {/* 03 / INDUSTRIES */}
      <section className="industries-dark dark-section">
        <div className="section">
          <div className="eyebrow light">03 / INDUSTRIES</div>
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
            <Link to="/contact">
              Discuss custom industry application <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 / THE 10-STEP JOURNEY */}
      <section className="process section">
        <div className="process-head">
          <div className="eyebrow">04 / THE 10-STEP JOURNEY</div>
          <div>
            <Words>FROM FIRST NEED TO RUNNING PRODUCTION.</Words>
            <p>
              Our transparent 10-step service cycle covers every phase of your project — ensuring
              quality machinery, flawless setup, and long-term reliability.
            </p>
          </div>
        </div>
        <div className="process-visual frame">
          <img
            src={IMG.engineer}
            alt="Technical engineer working on industrial packaging machinery"
            loading="lazy"
          />
          <div className="process-steps">
            {services.map((s) => (
              <Reveal key={s.id}>
                <div className="step">
                  <span>{s.id}</span>
                  <strong>{s.title}</strong>
                  <ArrowRight />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 / MACHINERY SOLUTIONS */}
      <section className="solutions-band">
        <div className="section">
          <div className="section-head">
            <div className="eyebrow light">05 / MACHINERY SOLUTIONS</div>
            <Link to="/solutions">
              View solutions <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="solution-feature">
            <div>
              <Words>THE RIGHT MACHINE IS ONLY THE START.</Words>
              <p>
                We connect processing, filling, packaging, conveying and automation into a
                production flow that makes sense.
              </p>
              <Link className="button light" to="/solutions">
                See machinery solutions <ArrowRight size={16} />
              </Link>
            </div>
            <div className="solution-image frame">
              <img src={IMG.cosmetics} alt="Cosmetics filling and capping machinery" loading="lazy" />
              <span>FILL / CAP / PACK</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE TECHNICAL SPECIFICATION & DOSSIER GATEWAY (SECTION 05.5)
          ========================================================= */}
      <InteractiveSpecificationDossier />

      {/* 06 / CLEANROOMS */}
      <section className="cleanroom section">
        <div className="clean-copy">
          <div className="eyebrow">06 / CLEANROOMS</div>
          <Words>CONTROLLED ENVIRONMENTS. ENGINEERED AS PART OF THE SYSTEM.</Words>
          <p>
            For projects requiring controlled environments, cleanroom scope can be coordinated
            alongside machinery and production requirements.
          </p>
          <Link className="button dark" to="/services">
            Explore cleanroom solutions <ArrowRight size={16} />
          </Link>
        </div>
        <div className="clean-image frame">
          <img src={IMG.cleanroom} alt="Modern cleanroom production environment" loading="lazy" />
          <span>CONTROLLED ENVIRONMENT / 06</span>
        </div>
      </section>

      {/* 07 / ONGOING SUPPORT */}
      <section className="support section">
        <div className="support-grid">
          <div>
            <div className="eyebrow">07 / ONGOING SUPPORT</div>
            <Words>THE PROJECT DOESN'T END AT START-UP.</Words>
          </div>
          <div className="support-copy">
            <div className="support-image frame">
              <img
                src={IMG.commissioning}
                alt="Technical support around automated machinery"
                loading="lazy"
              />
            </div>
            <p>
              After installation, we continue to support you with maintenance, troubleshooting,
              repairs, spare parts, and technical assistance.
            </p>
            <Link to="/contact" className="text-dark">
              Talk to our team <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 08 / FINAL CTA */}
      <section className="final-cta">
        <div className="eyebrow">08 / START A PROJECT</div>
        <Words>READY TO START YOUR NEXT PROJECT?</Words>
        <p>Tell us your product, capacity, and timeline. We'll build the scope around it.</p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="button light btn-catalog" to="/catalog">
            <FileText size={15} /> View E-Catalog
          </Link>
          <Link className="button dark" to="/contact">
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
              <span>GIT // ENGINEERING MANIFESTO</span>
            </div>
            <div className="phil-datum-stamps">
              <span>REF: 2026-SYS</span>
              <span className="sep">•</span>
              <span>TOLERANCE: ±0.01MM</span>
              <span className="sep">•</span>
              <span className="phil-gold-stamp">100% FAT VERIFIED</span>
            </div>
          </div>

          {/* Powerful Quote & Editorial Body */}
          <div className="phil-monolith-content">
            <div className="phil-kicker-tag">THE INTEGRATION PHILOSOPHY</div>

            <h2 className="phil-monolith-quote">
              “WE DO NOT BELIEVE IN
              <br />
              <span className="quote-gold">ISOLATED MACHINES.</span>”
            </h2>

            <p className="phil-monolith-subquote">
              A single machine is only as capable as the line ecosystem connecting it. We engineer complete,
              synchronized production architectures — processing, dosing, capping, conveying, and cleanrooms
              operating under single-source engineering accountability.
            </p>

            {/* 3 Hallmark Architectural Pillars */}
            <div className="phil-hallmarks-row">
              <div className="phil-hallmark-card">
                <div className="hallmark-idx">01</div>
                <div className="hallmark-body">
                  <strong>Single-Source Ownership</strong>
                  <span>Zero multi-vendor interface friction</span>
                </div>
              </div>

              <div className="phil-hallmark-card">
                <div className="hallmark-idx">02</div>
                <div className="hallmark-body">
                  <strong>100% Pre-Shipment FAT</strong>
                  <span>Tested with your actual product & containers</span>
                </div>
              </div>

              <div className="phil-hallmark-card">
                <div className="hallmark-idx">03</div>
                <div className="hallmark-body">
                  <strong>20-Year Duty Architecture</strong>
                  <span>AISI 316L metallurgy & open Siemens S7 PLC</span>
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
                <span>Our Engineering DNA</span>
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
      title: 'Primary Packaging Systems',
      subtitle: 'Volumetric liquid, oil, cream, and powder dosing with servo magnetic torque capping and automated CIP/SIP flush integration.',
      meta: '5 ml – 5,000 ml Range • Up to 6,000 BPH • AISI 316L Metallurgy • Siemens S7-1500 PLC'
    },
    {
      num: '02',
      title: 'Secondary Line Integration',
      subtitle: 'Synchronized continuous self-adhesive labelling, optical OCR/barcode vision inspection, automated cartoners, and speed-matched conveyor handoffs.',
      meta: '±0.5 mm Registration • Up to 12,000 BPH • Rejection Telemetry • End-of-Line Sync'
    },
    {
      num: '03',
      title: 'Modular Cleanroom Environments',
      subtitle: 'Turnkey ISO Class 5 to 8 modular sandwich panel enclosures with H14 HEPA terminal filtration (99.995%) and positive pressure cascades.',
      meta: 'ISO 14644-1 Compliant • +15 Pa Airlock Cascade • Temperature & Humidity Control'
    },
    {
      num: '04',
      title: '100% Pre-Shipment FAT Qualification',
      subtitle: 'Rigorous 72-hour burn-in trial runs using actual client containers and products, backed by complete IQ/OQ/PQ validation dossiers.',
      meta: '100% Wet-Tested • Dimensional Inspection • Calibrated Protocol Clearance'
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
              <span>DIGITAL TECHNICAL DOSSIER // 2026 ARCHIVE</span>
            </div>
            <div className="dossier-top-badge">
              <ShieldCheck size={13} />
              <span>VALIDATED cGMP & ISO 9001</span>
            </div>
          </div>

          {/* Main Layout (Clean, Expansive, Full-Width Architecture) */}
          <div className="dossier-expanded-layout">
            <div className="dossier-header-block">
              <h2 className="dossier-spec-heading">
                COMPLETE TECHNICAL MACHINERY & <br />
                <span className="heading-highlight">DIGITAL SPECIFICATION DOSSIER.</span>
              </h2>

              <p className="dossier-spec-summary">
                Access complete engineering dimensions, multi-axis line schematics, cleanroom HVAC cascade
                blueprints, and pre-shipment FAT validation protocols in our continuous digital catalog.
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
                <span>Open Interactive E-Catalog & PDF</span>
                <ArrowRight size={15} />
              </Link>
              <Link className="button glass" to="/catalog">
                <span>Preview 5 Technical Sheets</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link className="button dark" to="/products">
                <span>Machinery Matrix</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


