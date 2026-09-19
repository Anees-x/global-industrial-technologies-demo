import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FileText,
  Layers,
  ShieldCheck,
  Workflow,
  Sparkles
} from 'lucide-react';
import { Words, ScrollTextHighlight } from '../components/common/Words';
import { Reveal } from '../components/common/Reveal';
import { IMG } from '../data/assets';
import { services } from '../data/services';
import { industries } from '../data/industries';

/* ==========================================================================
   21ST.DEV INSPIRED LUXURY HERO (ENTERPRISE TURNKEY MACHINERY)
   ========================================================================== */
const HERO_SYSTEMS = [
  {
    id: '01',
    label: 'Liquid Filling Lines',
    short: 'Liquid Filling',
    sub: 'Rotary & linear dosing up to 6,000 bph for liquids, oils, and creams',
    img: IMG.productFilling,
    status: 'SYSTEM // cGMP READY',
    badgeTopHead: 'PRE-SHIPMENT QUALITY',
    badgeTopVal: '100% FACTORY TESTED',
    badgeTopSub: 'Validated with your real bottles & product',
    speedMetric: 'Up to 6,000 BPH',
    accuracyMetric: '±0.2% Precision',
    standardMetric: 'cGMP / AISI 316L'
  },
  {
    id: '02',
    label: 'Rotary Capping',
    short: 'Rotary Capping',
    sub: 'Multi-head servo torque closure with zero container breakage',
    img: IMG.productCapping,
    status: 'SYSTEM // SERVO SYNC',
    badgeTopHead: 'TORQUE PRECISION',
    badgeTopVal: 'SERVO TORQUE CONTROL',
    badgeTopSub: 'Screw, snap, ROPP & pump caps',
    speedMetric: '120 Bottles/Min',
    accuracyMetric: '0.1 Nm Torque',
    standardMetric: 'ISO 9001 Certified'
  },
  {
    id: '03',
    label: 'Labeling & Packaging',
    short: 'Vision & Packing',
    sub: 'High-speed camera inspection, carton packing, and conveyor synchronization',
    img: IMG.productLabelling,
    status: 'SYSTEM // VISION VERIFIED',
    badgeTopHead: 'DEFECT DETECTION',
    badgeTopVal: '100% CAMERA INSPECTED',
    badgeTopSub: 'Barcode, label alignment & seal check',
    speedMetric: '12,000 BPH',
    accuracyMetric: '99.9% Yield',
    standardMetric: 'CE Compliant'
  },
  {
    id: '04',
    label: 'Modular Cleanrooms',
    short: 'Modular Cleanrooms',
    sub: 'Sterile air environments with HEPA H14 filtration and positive pressure cascades',
    img: IMG.cleanroom,
    status: 'SYSTEM // STERILE AIR',
    badgeTopHead: 'AIR FILTRATION',
    badgeTopVal: 'HEPA H14 FILTERS',
    badgeTopSub: 'Positive pressure sterile cascades',
    speedMetric: '0.45 m/s Airflow',
    accuracyMetric: '99.995% Retention',
    standardMetric: 'ISO Class 5–8'
  }
];

function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const current = HERO_SYSTEMS[activeTab];

  return (
    <section className="hero-v2">
      <div className="hero-v2-glow" aria-hidden="true" />
      <div className="hero-ambient-spotlight" aria-hidden="true" />

      <div className="section" style={{ width: '100%' }}>
        <div className="hero-v2-grid">
          {/* Left Column: Authoritative Value Proposition & High Conversion Actions */}
          <div className="hero-v2-copy">
            <motion.div
              className="hero-status-pill"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hero-status-dot" />
              <span>GLOBAL INDUSTRIAL TECHNOLOGIES • WORLDWIDE TURNKEY SYSTEMS</span>
            </motion.div>

            <motion.h1
              className="hero-v2-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              HIGH-PERFORMANCE
              <br />
              INDUSTRIAL MACHINERY.
              <span className="accent">DELIVERED TURNKEY.</span>
            </motion.h1>

            <motion.p
              className="hero-v2-lede"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              We engineer, deliver, and commission complete automated packaging, filling, and processing
              lines — single-source accountability from custom machine selection and factory testing to
              on-site installation and full operator training.
            </motion.p>

            <motion.div
              className="hero-v2-actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                className="button hero-btn-primary"
                to={`/contact?subject=${encodeURIComponent('Custom Machinery Quote')}&message=${encodeURIComponent('We would like to request a quotation and technical review for a new machinery production line.')}`}
              >
                <span>Request a Custom Quote</span>
                <ArrowRight size={16} />
              </Link>
              <Link className="button hero-btn-catalog" to="/catalog">
                <FileText size={15} />
                <span>Explore 2026 E-Catalog</span>
              </Link>
            </motion.div>

            {/* Trust & Quality Verification Credentials */}
            <motion.div
              className="hero-trust-bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.75 }}
            >
              <div className="hero-trust-item">
                <CheckCircle2 size={15} />
                <span>100% Pre-Shipment FAT Tested</span>
              </div>
              <div className="hero-trust-item">
                <Workflow size={15} />
                <span>10-Step Turnkey Execution</span>
              </div>
              <div className="hero-trust-item">
                <ShieldCheck size={15} />
                <span>cGMP &amp; ISO 9001 Compliant</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 21st.dev Inspired Interactive Machinery Stage */}
          <motion.div
            className="hero-v2-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Interactive System Switcher Tabs */}
            <div className="hero-stage-tabs" role="tablist" aria-label="Machinery Showcase Systems">
              {HERO_SYSTEMS.map((sys, idx) => (
                <button
                  key={sys.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === idx}
                  className={`hero-stage-tab ${activeTab === idx ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="tab-num">{sys.id}</span>
                  <span className="tab-label">{sys.short}</span>
                </button>
              ))}
            </div>

            {/* High-Resolution Machinery Viewport Card */}
            <div className="hero-stage-card frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.img}
                  alt={`${current.label} industrial production line`}
                  className="hero-stage-img"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.38, ease: 'easeOut' }}
                />
              </AnimatePresence>

              <div className="hero-stage-overlay" />

              {/* Verified FAT Validation Status Badge */}
              <div className="hero-stage-badge">
                <span className="live-dot" />
                <span>{current.status}</span>
              </div>

              {/* Floating Verified Quality Tag */}
              <motion.div
                key={`badge-tr-${current.id}`}
                className="hero-float-card pos-tr"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="hero-float-head">
                  <CheckCircle2 size={12} />
                  <span>{current.badgeTopHead}</span>
                </div>
                <div className="hero-float-val">{current.badgeTopVal}</div>
                <div className="hero-float-sub">{current.badgeTopSub}</div>
              </motion.div>

              {/* Real-Time Telemetry Ribbon */}
              <div className="hero-stage-footer-hud">
                <div className="hud-metric">
                  <span className="hud-lbl">CAPACITY</span>
                  <span className="hud-val">{current.speedMetric}</span>
                </div>
                <div className="hud-metric">
                  <span className="hud-lbl">PRECISION</span>
                  <span className="hud-val">{current.accuracyMetric}</span>
                </div>
                <div className="hud-metric">
                  <span className="hud-lbl">STANDARD</span>
                  <span className="hud-val">{current.standardMetric}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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

      {/* 03 / WHY CHOOSE US (SCROLL TEXT HIGHLIGHT) */}
      <WhyChooseUs />

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
      <MachineryCatalogShowcase />

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
   SECTION 03: WHY CHOOSE US (CLEAN ENTERPRISE ARCHITECTURE + SCROLL HIGHLIGHT)
   ========================================================================== */
function WhyChooseUs() {
  const pillars = [
    {
      num: '01',
      icon: <Layers size={22} />,
      title: 'Single Responsible Partner',
      copy: 'You never have to manage 10 different equipment vendors. We take full responsibility from first blueprint to final handover.'
    },
    {
      num: '02',
      icon: <CheckCircle2 size={22} />,
      title: '100% Tested Before Shipment',
      copy: 'Every machine is tested with your real containers and products before delivery, so there are no surprises on your factory floor.'
    },
    {
      num: '03',
      icon: <Cpu size={22} />,
      title: 'Global Standard Components',
      copy: 'Built with trusted, globally standard parts (Siemens, Festo, Schneider Electric) that your technicians can easily maintain.'
    },
    {
      num: '04',
      icon: <ShieldCheck size={22} />,
      title: 'Full Training & Long-Term Support',
      copy: 'We provide on-site operator training, step-by-step user manuals, and lifetime technical support so your line runs smoothly for years.'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="section">
        <div className="eyebrow light">03 / WHY CHOOSE US</div>
        <ScrollTextHighlight>BUILT FOR MAXIMUM RELIABILITY AND COMPLETE PEACE OF MIND.</ScrollTextHighlight>

        <div className="why-choose-grid">
          {pillars.map((p, idx) => (
            <Reveal delay={idx * 0.06} key={p.num}>
              <div className="why-card frame">
                <div className="why-card-icon">{p.icon}</div>
                <div className="why-card-num">{p.num} / ADVANTAGE</div>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="why-choose-actions">
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
    </section>
  );
}

/* ==========================================================================
   SECTION 05: MACHINERY & DIGITAL CATALOG SHOWCASE
   ========================================================================== */
function MachineryCatalogShowcase() {
  const catalogLines = [
    {
      id: '01',
      tag: 'FILLING & DOSING',
      title: 'Liquid & Cream Filling Systems',
      copy: 'Accurate filling and capping systems for liquids, oils, creams, and powders with easy automated cleaning.',
      specs: ['5 ml to 5 Liters range', 'Up to 6,000 Bottles/Hour', 'AISI 316L Stainless Steel'],
      img: IMG.productFilling
    },
    {
      id: '02',
      tag: 'CAPPING & SEALING',
      title: 'Rotary Capping & Sealing Machines',
      copy: 'Continuous high-speed capping with servo torque control for screw caps, snap caps, and ROPP closures.',
      specs: ['6 to 18 Capping Heads', 'Servo Torque Control', 'Zero Bottle Damage'],
      img: IMG.productCapping
    },
    {
      id: '03',
      tag: 'LABELING & PACKAGING',
      title: 'Automatic Labeling & Box Packing',
      copy: 'Automatic bottle labeling, camera inspection for barcodes, box packing, and smooth conveyor movement.',
      specs: ['Wrap-Around & Front/Back', 'Automatic Defect Check', 'Up to 12,000 Bottles/Hour'],
      img: IMG.productLabelling
    },
    {
      id: '04',
      tag: 'CONTROLLED ENVIRONMENTS',
      title: 'Modular Cleanrooms & HVAC Systems',
      copy: 'Pre-built modular cleanrooms with high-efficiency air filters, temperature control, and dust-free environments.',
      specs: ['ISO Class 5 to 8 Standards', 'HEPA H14 Air Filtration', 'Positive Pressure Cascades'],
      img: IMG.cleanroom
    }
  ];

  return (
    <section className="machinery-catalog-showcase">
      <div className="section">
        <div className="eyebrow">05 / MACHINERY &amp; DIGITAL CATALOG</div>
        <Words>COMPLETE PRODUCTION SYSTEMS READY TO CONFIGURE.</Words>

        <div className="machinery-catalog-grid">
          {catalogLines.map((item, idx) => (
            <Reveal delay={idx * 0.06} key={item.id}>
              <div className="machinery-item-card">
                <img
                  src={item.img}
                  alt={`${item.title} machinery preview`}
                  className="machinery-item-img"
                  loading="lazy"
                />
                <div className="machinery-item-body">
                  <div className="machinery-item-tag">{item.id} / {item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>

                  <div className="machinery-item-specs">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx}>• {spec}</div>
                    ))}
                  </div>

                  <Link
                    to={`/contact?subject=${encodeURIComponent(`Enquiry: ${item.title}`)}&message=${encodeURIComponent(`We would like to request technical specifications and quote information for ${item.title}.`)}`}
                    className="button sm dark"
                    style={{ marginTop: 'auto', width: '100%' }}
                  >
                    <span>Request Configuration</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="machinery-catalog-banner frame">
          <div>
            <h3>DIGITAL TECHNICAL CATALOGUE (2026 ARCHIVE)</h3>
            <p>Download our complete technical dossier with full dimensional drawings, capacities, and compliance sheets.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/catalog" className="button btn-catalog">
              <FileText size={15} />
              <span>Explore E-Catalog &amp; PDF</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
