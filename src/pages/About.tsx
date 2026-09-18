import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Layers,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Words } from '../components/common/Words';
import { Reveal } from '../components/common/Reveal';
import { IMG } from '../data/assets';

export function About() {
  return (
    <>
      <PageHero
        label="ABOUT / 05"
        title={
          <>
            A TECHNICAL
            <br />
            <em>PARTNER, NOT JUST A SUPPLIER.</em>
          </>
        }
        copy="Global Industrial Technologies unifies machinery sourcing, site engineering, cleanroom integration, and lifecycle technical support around the manufacturer's real production targets."
        img={IMG.engineer}
      />

      {/* Main Approach Section */}
      <section className="about-grid section section-rule">
        <div>
          <div className="eyebrow">01 / OUR APPROACH</div>
          <Words>
            UNDERSTAND THE PROCESS. SOURCE THE RIGHT EQUIPMENT. MAKE IT WORK ON SITE.
          </Words>
        </div>
        <div className="about-copy">
          <p>
            We work across the complete 10-step service cycle — helping clients define operational
            requirements, source high-performance machinery, conduct stringent Factory Acceptance
            Testing (FAT), coordinate international shipping, install and erect equipment, commission
            active lines, train operators, manage validation, and deliver ongoing lifetime support.
          </p>
          <p>
            For sterile or sensitive packaging, our scope integrates turnkey modular cleanrooms and
            HVAC systems, creating a unified engineering pathway without multiple fragmented
            contractors.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link
              className="button dark"
              to={`/contact?subject=${encodeURIComponent('Engineering Consultation')}&message=${encodeURIComponent('We would like to consult with Global Industrial Technologies on a full-lifecycle machinery and facility integration project.')}`}
            >
              Discuss your requirement <ArrowRight size={16} />
            </Link>
            <Link className="button btn-catalog" to="/catalog">
              <FileText size={15} /> View E-Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          REDESIGNED INDUSTRIAL PHILOSOPHY BANNER
          ========================================================= */}
      <section className="philosophy-banner-section section">
        <div className="philosophy-banner frame">
          <div className="philosophy-banner-grid-overlay" aria-hidden="true" />
          <div className="philosophy-banner-header">
            <div className="philosophy-banner-tag">
              <span className="p-dot" />
              <span>GIT // ENGINEERING PHILOSOPHY</span>
            </div>
            <div className="philosophy-banner-meta">
              <span>DATUM: 2026-SPEC</span>
              <span>TOLERANCE: ±0.01MM</span>
              <span>FAT: 100% VERIFIED</span>
            </div>
          </div>

          <div className="philosophy-banner-body">
            <div className="eyebrow light">SYSTEM-LEVEL INTEGRATION</div>
            <h2 className="philosophy-banner-title">
              WE DO NOT BELIEVE IN
              <br />
              <em>ISOLATED MACHINES.</em>
            </h2>
            <p className="philosophy-banner-copy">
              A standalone machine is only as good as the conveying, capping, dosing, and utility
              infrastructure feeding it. We engineer cohesive production lines where speed,
              automation, and hygienic integrity are synchronized from raw material to finished
              case.
            </p>

            <div className="philosophy-stats-row">
              <div className="philosophy-stat">
                <strong>10-STEP</strong>
                <span>Lifecycle Execution Protocol</span>
              </div>
              <div className="philosophy-stat">
                <strong>100%</strong>
                <span>Pre-Shipment FAT Validation</span>
              </div>
              <div className="philosophy-stat">
                <strong>SINGLE</strong>
                <span>Accountable Technical Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REDESIGNED PHILOSOPHY & TECHNICAL DOCUMENTATION CARDS
          ========================================================= */}
      <section className="philosophy-cards-section section">
        <div className="section-head">
          <div>
            <div className="eyebrow">ENGINEERING CAPABILITIES</div>
            <Words>RIGOROUS EXECUTION STANDARDS</Words>
          </div>
          <Link to="/catalog">
            Explore full dossier <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="philosophy-cards-grid">
          {/* CARD 1: PHILOSOPHY */}
          <Reveal delay={0.05}>
            <div className="philosophy-card frame">
              <div className="card-sheen" aria-hidden="true" />
              <div className="card-corner-accent" aria-hidden="true" />
              <div className="philosophy-card-top">
                <div className="philosophy-card-icon-wrap">
                  <Workflow size={22} />
                </div>
                <div className="philosophy-card-badge">PHILOSOPHY // 01</div>
              </div>

              <div className="philosophy-card-content">
                <span className="card-eyebrow">INTEGRATED ECOSYSTEM</span>
                <h3>Ecosystem Over Isolation</h3>
                <p>
                  Individual machine purchases create costly interface gaps on factory floors. We
                  take single-source ownership of mechanical handoffs, PLC synchronization, line
                  speeds, and utility routing to guarantee steady commercial output.
                </p>

                <div className="philosophy-card-tags">
                  <span className="card-tag">
                    <CheckCircle2 size={12} /> Synchronized Speeds
                  </span>
                  <span className="card-tag">
                    <CheckCircle2 size={12} /> Single Contract
                  </span>
                  <span className="card-tag">
                    <CheckCircle2 size={12} /> Turnkey Handover
                  </span>
                </div>

                <div className="philosophy-card-foot">
                  <Link to="/services" className="button white full">
                    <span>Explore Service Cycle</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 2: TECHNICAL DOCUMENTATION */}
          <Reveal delay={0.12}>
            <div className="philosophy-card tech-doc-card frame">
              <div className="card-sheen" aria-hidden="true" />
              <div className="card-corner-accent" aria-hidden="true" />
              <div className="philosophy-card-top">
                <div className="philosophy-card-icon-wrap">
                  <FileSpreadsheet size={22} />
                </div>
                <div className="philosophy-card-badge">DOCUMENTATION // 02</div>
              </div>

              <div className="philosophy-card-content">
                <span className="card-eyebrow">AUDIT-READY DOSSIERS</span>
                <h3>Validation & Technical Documentation</h3>
                <p>
                  Every line delivery includes full engineering schematics, P&IDs, cGMP/CE
                  declarations of conformity, IQ/OQ/PQ validation test protocols, and comprehensive
                  multilingual maintenance manuals.
                </p>

                <div className="philosophy-card-tags">
                  <span className="card-tag">
                    <FileCheck size={12} /> FAT Inspection Reports
                  </span>
                  <span className="card-tag">
                    <ShieldCheck size={12} /> IQ / OQ / PQ Protocols
                  </span>
                  <span className="card-tag">
                    <FileText size={12} /> CE & cGMP Certified
                  </span>
                </div>

                <div className="philosophy-card-foot">
                  <Link to="/catalog" className="button btn-catalog full">
                    <FileText size={15} />
                    <span>Open E-Catalog & PDF</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engineering Image Section */}
      <section className="about-image">
        <img src={IMG.commissioning} alt="Engineers working on an industrial production line" />
        <div className="image-caption">GIT // ENGINEERING + SITE EXECUTION</div>
      </section>
    </>
  );
}
