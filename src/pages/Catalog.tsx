import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Download,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Maximize2,
  Minimize2,
  Printer,
  RotateCcw,
  Settings,
  ShieldCheck,
  Sliders,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Words } from '../components/common/Words';
import { GitLogoMark } from '../components/common/GitLogoMark';
import { IMG } from '../data/assets';
import { products } from '../data/products';
import { services } from '../data/services';
import { generateCatalogPdf } from '../utils/pdfGenerator';

export function Catalog() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSheet, setActiveSheet] = useState('sheet-cover');
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [pdfStatus, setPdfStatus] = useState('');
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 140));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 75));
  const handleResetZoom = () => setZoomLevel(100);

  const handlePrint = () => {
    window.print();
  };

  const scrollToSheet = (id: string) => {
    setActiveSheet(id);
    const el = document.getElementById(id);
    const vp = viewportRef.current;
    if (el && vp) {
      const elOffset = el.offsetTop - vp.offsetTop;
      vp.scrollTo({ top: Math.max(0, elOffset - 12), behavior: 'smooth' });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const sheetIds = ['sheet-cover', 'sheet-cycle', 'sheet-machinery', 'sheet-cleanroom', 'sheet-quality'];

    const handleScroll = () => {
      const vpScroll = vp.scrollTop + 100;
      for (const id of sheetIds) {
        const el = document.getElementById(id);
        if (el) {
          const elTop = el.offsetTop - vp.offsetTop;
          const elBottom = elTop + el.offsetHeight;
          if (vpScroll >= elTop && vpScroll < elBottom) {
            setActiveSheet(id);
            break;
          }
        }
      }
    };

    vp.addEventListener('scroll', handleScroll, { passive: true });
    return () => vp.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadPdf = async () => {
    if (isDownloadingPdf) return;
    setIsDownloadingPdf(true);
    try {
      await generateCatalogPdf((status) => setPdfStatus(status));
    } catch (err) {
      console.error('Error generating PDF:', err);
      window.print();
    } finally {
      setIsDownloadingPdf(false);
      setPdfStatus('');
    }
  };

  return (
    <>
      {/* Top Streamlined Header — Catalog Front & Center */}
      <section className="catalog-top-header">
        <div className="section" style={{ paddingBottom: 0 }}>
          <div className="catalog-top-flex">
            <div className="catalog-top-title-group">
              <div className="eyebrow">E-CATALOG // 2026 SPECIFICATION</div>
              <h1>TECHNICAL MACHINERY CATALOGUE</h1>
              <p>
                Browse complete continuous specifications, machine dimensions, cleanroom designs, and pre-shipment testing standards.
              </p>
            </div>

            <div className="catalog-meta-actions" style={{ flexShrink: 0 }}>
              <button
                onClick={handleDownloadPdf}
                className="button btn-download-pdf"
                title="Download full technical catalog document"
                disabled={isDownloadingPdf}
              >
                <Download size={14} />
                <span>{isDownloadingPdf ? (pdfStatus || 'Generating PDF...') : 'Download PDF'}</span>
              </button>
              <Link
                to={`/contact?subject=${encodeURIComponent('Technical Catalog Quote Request')}&message=${encodeURIComponent('I would like to request an engineering quotation and technical review based on the 2026 Machinery Catalogue (Ref: GIT-SPEC-2026-REV3).')}`}
                className="button dark"
              >
                <span>Request Quote</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Telemetry Strip */}
      <section className="catalog-meta-strip section-rule">
        <div className="catalog-meta-inner">
          <div className="catalog-meta-item">
            <span className="catalog-meta-label">DOCUMENT REF</span>
            <strong className="catalog-meta-val">GIT-SPEC-2026-REV3</strong>
          </div>
          <div className="catalog-meta-item">
            <span className="catalog-meta-label">TOTAL SYSTEMS</span>
            <strong className="catalog-meta-val">06 Core Lines + Turnkey</strong>
          </div>
          <div className="catalog-meta-item">
            <span className="catalog-meta-label">VALIDATION</span>
            <strong className="catalog-meta-val">cGMP / CE / ISO Class 5–8</strong>
          </div>
        </div>
      </section>

      {/* Main E-Catalog Inspection Console */}
      <section className="catalog-viewer-section section" style={{ paddingTop: '24px' }}>

        {/* CAD Preview Workstation Shell */}
        <div
          className={`pdf-viewer-shell ${isFullscreen ? 'pdf-fullscreen' : ''}`}
          ref={pdfContainerRef}
        >
          {/* Top CAD Glassmorphic Toolbar */}
          <div className="pdf-toolbar" role="toolbar" aria-label="Catalog Viewer Toolbar">
            <div className="pdf-toolbar-left">
              <div className="pdf-doc-badge">
                <span className="pdf-doc-dot" />
                <FileText size={13} />
                <span>GIT-SPEC-2026-DOSSIER.PDF</span>
              </div>
              <span className="pdf-doc-pages-info">5 TECHNICAL SHEETS • REV 3.2</span>
            </div>

            {/* Sheet Navigator Pills */}
            <div className="pdf-toolbar-nav" role="tablist">
              <button
                onClick={() => scrollToSheet('sheet-cover')}
                className={`pdf-nav-btn ${activeSheet === 'sheet-cover' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeSheet === 'sheet-cover'}
              >
                01 Overview
              </button>
              <button
                onClick={() => scrollToSheet('sheet-cycle')}
                className={`pdf-nav-btn ${activeSheet === 'sheet-cycle' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeSheet === 'sheet-cycle'}
              >
                02 Service Cycle
              </button>
              <button
                onClick={() => scrollToSheet('sheet-machinery')}
                className={`pdf-nav-btn ${activeSheet === 'sheet-machinery' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeSheet === 'sheet-machinery'}
              >
                03 Machinery
              </button>
              <button
                onClick={() => scrollToSheet('sheet-cleanroom')}
                className={`pdf-nav-btn ${activeSheet === 'sheet-cleanroom' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeSheet === 'sheet-cleanroom'}
              >
                04 Cleanrooms
              </button>
              <button
                onClick={() => scrollToSheet('sheet-quality')}
                className={`pdf-nav-btn ${activeSheet === 'sheet-quality' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeSheet === 'sheet-quality'}
              >
                05 Quality & FAT
              </button>
            </div>

            {/* Right Workstation Controls */}
            <div className="pdf-toolbar-right">
              {/* Zoom Controls */}
              <div className="pdf-zoom-cluster">
                <button
                  onClick={handleZoomOut}
                  className="pdf-tool-btn"
                  title="Zoom Out (-15%)"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={13} />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="pdf-zoom-val-btn"
                  title="Reset Scale to 100%"
                >
                  <span>{zoomLevel}%</span>
                  <RotateCcw size={10} />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="pdf-tool-btn"
                  title="Zoom In (+15%)"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={13} />
                </button>
              </div>

              <button
                onClick={handlePrint}
                className="pdf-tool-btn"
                title="Print Technical Document"
                aria-label="Print catalog"
              >
                <Printer size={14} />
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="pdf-tool-btn"
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                aria-label="Toggle fullscreen"
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>

              <button
                onClick={handleDownloadPdf}
                className="button btn-download-pdf compact"
                title="Download full technical catalog"
              >
                <Download size={12} />
                <span>PDF</span>
              </button>
            </div>
          </div>

          {/* Continuous Scrollable Blueprint Canvas */}
          <div className="pdf-canvas-viewport" ref={viewportRef}>
            <div
              className="pdf-canvas-document"
              style={{
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: 'top center',
              }}
            >
              {/* ==================== SHEET 01: COVER & EXECUTIVE OVERVIEW ==================== */}
              <article className="pdf-sheet" id="sheet-cover">
                {/* Precision Sheet Corner Crop Marks */}
                <div className="pdf-crop-mark tl" aria-hidden="true" />
                <div className="pdf-crop-mark tr" aria-hidden="true" />
                <div className="pdf-crop-mark bl" aria-hidden="true" />
                <div className="pdf-crop-mark br" aria-hidden="true" />

                {/* Sheet Header */}
                <div className="pdf-sheet-header">
                  <div className="pdf-sheet-brand">
                    <GitLogoMark dark />
                    <span className="pdf-sheet-div" />
                    <div>
                      <strong className="pdf-brand-title">GLOBAL INDUSTRIAL TECHNOLOGIES</strong>
                      <span className="pdf-brand-sub">ENGINEERING SYSTEMS & TURNKEY DIVISION</span>
                    </div>
                  </div>
                  <div className="pdf-sheet-meta-block">
                    <div className="pdf-barcode-strip" aria-hidden="true">
                      ||| | |||| || | ||| |||| | ||
                    </div>
                    <div className="pdf-meta-pills">
                      <span>DOC ID: GIT-2026-ENG-V3.2</span>
                      <span className="pdf-meta-sep">•</span>
                      <span className="pdf-highlight-val">cGMP / CE-EN VALIDATED</span>
                    </div>
                  </div>
                </div>

                {/* Sheet Body */}
                <div className="pdf-sheet-body">
                  <div className="pdf-cover-hero">
                    <div className="pdf-datum-strip">
                      <span className="pdf-datum-tag">DATUM CLASSIFICATION</span>
                      <span>ISO-9001:2015 • DIN EN ISO 14644 • cGMP GRADE A–D</span>
                    </div>

                    <h1 className="pdf-doc-title">
                      INDUSTRIAL MACHINERY & TURNKEY SYSTEMS
                    </h1>
                    <p className="pdf-doc-subtitle">
                      Complete Technical Architecture, Sourcing Matrix, Cleanroom Environments &
                      Lifecycle Engineering Protocols // 2026 Specification Edition
                    </p>

                    <div className="pdf-meta-box-grid">
                      <div className="pdf-meta-box">
                        <small>PREPARED BY</small>
                        <b>GLOBAL INDUSTRIAL TECHNOLOGIES</b>
                        <span>Engineering & Turnkey Division</span>
                      </div>
                      <div className="pdf-meta-box">
                        <small>SCOPE OF WORK</small>
                        <b>TURNKEY & INDIVIDUAL LINES</b>
                        <span>Food / Beverage / Cosmetics / Packaging</span>
                      </div>
                      <div className="pdf-meta-box">
                        <small>QUALITY ASSURANCE</small>
                        <b>100% FACTORY ACCEPTANCE TEST (FAT)</b>
                        <span>Full Pre-Shipment Validation</span>
                      </div>
                    </div>
                  </div>

                  <div className="pdf-section-block">
                    <div className="pdf-section-title">
                      <span className="sec-num">01.0</span>
                      <span>EXECUTIVE ENGINEERING PHILOSOPHY</span>
                    </div>
                    <p className="pdf-text">
                      Global Industrial Technologies operates under the core engineering tenet that
                      industrial machinery cannot perform effectively as isolated purchases. Every
                      high-yield production facility relies on synchronized line speed matching, precision
                      tolerances, reliable utilities, and disciplined commissioning. We provide
                      end-to-end single-source responsibility from preliminary CAD layout to final commercial
                      sign-off.
                    </p>

                    <div className="pdf-feature-pillars">
                      <div className="pdf-pillar">
                        <div className="pdf-pillar-num">01</div>
                        <b>Single-Source Ownership</b>
                        <p>
                          Eliminates interface friction between disparate multi-vendor machinery suppliers.
                        </p>
                      </div>
                      <div className="pdf-pillar">
                        <div className="pdf-pillar-num">02</div>
                        <b>Pre-Shipment FAT Protocol</b>
                        <p>
                          Every line is rigorously wet-tested with actual customer materials before dispatch.
                        </p>
                      </div>
                      <div className="pdf-pillar">
                        <div className="pdf-pillar-num">03</div>
                        <b>20-Year Duty Architecture</b>
                        <p>
                          AISI 316L metallurgy and open Siemens S7-1500 PLC automation architectures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sheet Footer */}
                <div className="pdf-sheet-footer">
                  <span>GIT // TECHNICAL SPECIFICATION REPORT</span>
                  <span>SHEET 01 OF 05</span>
                  <span>CONFIDENTIAL & PROPRIETARY</span>
                </div>
              </article>

              {/* ==================== SHEET 02: 10-STEP SERVICE CYCLE ==================== */}
              <article className="pdf-sheet" id="sheet-cycle">
                <div className="pdf-crop-mark tl" aria-hidden="true" />
                <div className="pdf-crop-mark tr" aria-hidden="true" />
                <div className="pdf-crop-mark bl" aria-hidden="true" />
                <div className="pdf-crop-mark br" aria-hidden="true" />

                <div className="pdf-sheet-header">
                  <div className="pdf-sheet-brand">
                    <GitLogoMark dark />
                    <span className="pdf-sheet-div" />
                    <div>
                      <strong className="pdf-brand-title">SERVICE CYCLE PROTOCOL</strong>
                      <span className="pdf-brand-sub">SECTION 02.0 // EXECUTION WORKFLOW</span>
                    </div>
                  </div>
                  <div className="pdf-sheet-meta-block">
                    <div className="pdf-barcode-strip" aria-hidden="true">|||| | || |||| | |||</div>
                    <div className="pdf-meta-pills">
                      <span>DOC ID: GIT-2026-ENG-V3.2</span>
                      <span className="pdf-meta-sep">•</span>
                      <span>PHASE: 10-STEP LIFECYCLE</span>
                    </div>
                  </div>
                </div>

                <div className="pdf-sheet-body">
                  <div className="pdf-section-title">
                    <span className="sec-num">02.0</span>
                    <span>THE 10-STEP COMPLETE SERVICE CYCLE</span>
                  </div>
                  <p className="pdf-text">
                    Our rigorous 10-step service cycle governs every project milestone, eliminating risk and
                    ensuring uninterrupted commercial ramp-up.
                  </p>

                  <div className="pdf-cycle-table-wrap">
                    <table className="pdf-spec-table">
                      <thead>
                        <tr>
                          <th style={{ width: '70px' }}>STEP</th>
                          <th style={{ width: '220px' }}>PHASE & MILESTONE</th>
                          <th>TECHNICAL SCOPE & DELIVERABLES</th>
                          <th style={{ width: '130px' }}>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((s) => (
                          <tr key={s.id}>
                            <td className="pdf-table-code">STEP {s.id}</td>
                            <td>
                              <strong>{s.title}</strong>
                            </td>
                            <td>{s.short}</td>
                            <td>
                              <span className="pdf-status-tag">
                                <CheckCircle2 size={11} /> VERIFIED
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="pdf-callout-box">
                    <ShieldCheck size={22} />
                    <div>
                      <strong>FACTORY ACCEPTANCE TESTING (FAT) STANDARD:</strong>
                      <p>
                        No equipment departs manufacturing facilities without written FAT protocol
                        clearance. Clients receive high-definition video documentation, dimension
                        compliance reports, and calibrated test run telemetry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pdf-sheet-footer">
                  <span>GIT // TECHNICAL SPECIFICATION REPORT</span>
                  <span>SHEET 02 OF 05</span>
                  <span>CONFIDENTIAL & PROPRIETARY</span>
                </div>
              </article>

              {/* ==================== SHEET 03: MACHINERY SPECIFICATIONS ==================== */}
              <article className="pdf-sheet" id="sheet-machinery">
                <div className="pdf-crop-mark tl" aria-hidden="true" />
                <div className="pdf-crop-mark tr" aria-hidden="true" />
                <div className="pdf-crop-mark bl" aria-hidden="true" />
                <div className="pdf-crop-mark br" aria-hidden="true" />

                <div className="pdf-sheet-header">
                  <div className="pdf-sheet-brand">
                    <GitLogoMark dark />
                    <span className="pdf-sheet-div" />
                    <div>
                      <strong className="pdf-brand-title">MACHINERY SPECIFICATION MATRIX</strong>
                      <span className="pdf-brand-sub">SECTION 03.0 // PRIMARY & SECONDARY SYSTEMS</span>
                    </div>
                  </div>
                  <div className="pdf-sheet-meta-block">
                    <div className="pdf-barcode-strip" aria-hidden="true">||| || | |||| || | ||</div>
                    <div className="pdf-meta-pills">
                      <span>DOC ID: GIT-2026-ENG-V3.2</span>
                      <span className="pdf-meta-sep">•</span>
                      <span>SYSTEMS: 01 TO 06</span>
                    </div>
                  </div>
                </div>

                <div className="pdf-sheet-body">
                  <div className="pdf-section-title">
                    <span className="sec-num">03.0</span>
                    <span>PRODUCTION EQUIPMENT SPECIFICATION MATRIX</span>
                  </div>
                  <p className="pdf-text">
                    Engineered for high duty cycles, rapid container changeovers, and hygienic compliance.
                    Standard components utilize globally accessible industrial automation (Siemens, Festo,
                    Schneider Electric, SEW-Eurodrive).
                  </p>

                  <div className="pdf-machinery-grid">
                    {products.map((item) => (
                      <div className="pdf-machine-spec-card" key={item.id}>
                        <div className="pdf-machine-card-head">
                          <div>
                            <span className="pdf-machine-id">ITEM {item.id}</span>
                            <h3 className="pdf-machine-name">{item.name}</h3>
                          </div>
                          <span className="pdf-machine-type">{item.type}</span>
                        </div>
                        <div className="pdf-machine-card-body">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="pdf-machine-thumb"
                            loading="lazy"
                          />
                          <div className="pdf-machine-params">
                            <div className="pdf-param-label">KEY SPECIFICATIONS</div>
                            <ul>
                              {item.specs.map((sp) => (
                                <li key={sp}>{sp}</li>
                              ))}
                            </ul>
                            <div className="pdf-param-meta">
                              <span>Material: AISI 316L / 304</span>
                              <span>Control: Siemens PLC + HMI</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pdf-sheet-footer">
                  <span>GIT // TECHNICAL SPECIFICATION REPORT</span>
                  <span>SHEET 03 OF 05</span>
                  <span>CONFIDENTIAL & PROPRIETARY</span>
                </div>
              </article>

              {/* ==================== SHEET 04: CLEANROOM & CONTROLLED ENVIRONMENTS ==================== */}
              <article className="pdf-sheet" id="sheet-cleanroom">
                <div className="pdf-crop-mark tl" aria-hidden="true" />
                <div className="pdf-crop-mark tr" aria-hidden="true" />
                <div className="pdf-crop-mark bl" aria-hidden="true" />
                <div className="pdf-crop-mark br" aria-hidden="true" />

                <div className="pdf-sheet-header">
                  <div className="pdf-sheet-brand">
                    <GitLogoMark dark />
                    <span className="pdf-sheet-div" />
                    <div>
                      <strong className="pdf-brand-title">CLEANROOM & HVAC ARCHITECTURE</strong>
                      <span className="pdf-brand-sub">SECTION 04.0 // ENCLOSURES & AIRLOCK CASCADES</span>
                    </div>
                  </div>
                  <div className="pdf-sheet-meta-block">
                    <div className="pdf-barcode-strip" aria-hidden="true">|||| || | ||| || |||</div>
                    <div className="pdf-meta-pills">
                      <span>DOC ID: GIT-2026-ENG-V3.2</span>
                      <span className="pdf-meta-sep">•</span>
                      <span>ISO 14644-1 / cGMP</span>
                    </div>
                  </div>
                </div>

                <div className="pdf-sheet-body">
                  <div className="pdf-section-title">
                    <span className="sec-num">04.0</span>
                    <span>MODULAR CLEANROOM & HVAC ARCHITECTURE</span>
                  </div>
                  <p className="pdf-text">
                    Turnkey cleanroom infrastructure engineered in tandem with production machinery.
                    Integrated air handling units (AHU), differential pressure cascades, and modular
                    enclosures compliant with pharmaceutical and sterile food packaging standards.
                  </p>

                  <div className="pdf-cleanroom-layout">
                    <div className="pdf-clean-spec-col">
                      <div className="pdf-spec-subhead">STRUCTURAL & ENCLOSURE SPECIFICATIONS</div>
                      <table className="pdf-spec-table compact">
                        <tbody>
                          <tr>
                            <td>Wall / Ceiling Panels</td>
                            <td>50mm Modular Double-Skin Sandwich Panels with PIR / Rockwool core</td>
                          </tr>
                          <tr>
                            <td>Surface Coating</td>
                            <td>Antistatic PVDF / Food-grade Polyurethane (chemical-resistant)</td>
                          </tr>
                          <tr>
                            <td>Flooring System</td>
                            <td>Heavy-duty Seamless Self-Leveling Epoxy / Conductive Coved Vinyl</td>
                          </tr>
                          <tr>
                            <td>Doors & Interlocks</td>
                            <td>Airlock double-door interlock with automatic electronic drop seals</td>
                          </tr>
                          <tr>
                            <td>Pass-Through Boxes</td>
                            <td>Dynamic Pass-Boxes with UV Sterilization & HEPA flush purging</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="pdf-clean-spec-col">
                      <div className="pdf-spec-subhead">AIR FILTRATION & HVAC PARAMETERS</div>
                      <table className="pdf-spec-table compact">
                        <tbody>
                          <tr>
                            <td>Classification</td>
                            <td>ISO Class 5 (Grade A/B) through ISO Class 8 (Grade D)</td>
                          </tr>
                          <tr>
                            <td>Terminal Filtration</td>
                            <td>H14 HEPA Filters (99.995% efficiency @ 0.3μm MPPS)</td>
                          </tr>
                          <tr>
                            <td>Air Change Rate</td>
                            <td>20 to 60 Air Changes Per Hour (ACH) depending on room volume</td>
                          </tr>
                          <tr>
                            <td>Pressure Differential</td>
                            <td>+15 Pa positive cascade relative to adjacent ambient zones</td>
                          </tr>
                          <tr>
                            <td>Climate Control</td>
                            <td>Temperature 20°C ± 1°C | Relative Humidity 45% ± 5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="pdf-schematic-box">
                    <div className="pdf-schematic-header">
                      <span>INTEGRATED SYSTEM SCHEMATIC // AIRLOCK & CASCADE</span>
                      <span>DIAGRAM ID: SCH-CR-2026-04</span>
                    </div>
                    <div className="pdf-schematic-drawing">
                      <div className="pdf-schematic-zone zone-unclassified">
                        <span className="zone-tag">ZONE 0: UNCLASSIFIED (+0 Pa)</span>
                        <span className="zone-desc">General Raw Material Receiving</span>
                      </div>
                      <div className="pdf-schematic-arrow">➔</div>
                      <div className="pdf-schematic-zone zone-airlock">
                        <span className="zone-tag">ZONE 1: AIRLOCK (+10 Pa)</span>
                        <span className="zone-desc">Personnel Gowning & Air Shower</span>
                      </div>
                      <div className="pdf-schematic-arrow">➔</div>
                      <div className="pdf-schematic-zone zone-iso7">
                        <span className="zone-tag">ZONE 2: ISO 7 / GRADE C (+25 Pa)</span>
                        <span className="zone-desc">Secondary Packaging & Blending</span>
                      </div>
                      <div className="pdf-schematic-arrow">➔</div>
                      <div className="pdf-schematic-zone zone-iso5">
                        <span className="zone-tag">ZONE 3: ISO 5 / GRADE A (+40 Pa)</span>
                        <span className="zone-desc">Sterile Liquid Filling & Capping Core</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pdf-sheet-footer">
                  <span>GIT // TECHNICAL SPECIFICATION REPORT</span>
                  <span>SHEET 04 OF 05</span>
                  <span>CONFIDENTIAL & PROPRIETARY</span>
                </div>
              </article>

              {/* ==================== SHEET 05: QUALITY ASSURANCE & COMPLIANCE ==================== */}
              <article className="pdf-sheet" id="sheet-quality">
                <div className="pdf-crop-mark tl" aria-hidden="true" />
                <div className="pdf-crop-mark tr" aria-hidden="true" />
                <div className="pdf-crop-mark bl" aria-hidden="true" />
                <div className="pdf-crop-mark br" aria-hidden="true" />

                <div className="pdf-sheet-header">
                  <div className="pdf-sheet-brand">
                    <GitLogoMark dark />
                    <span className="pdf-sheet-div" />
                    <div>
                      <strong className="pdf-brand-title">QUALITY ASSURANCE & VALIDATION</strong>
                      <span className="pdf-brand-sub">SECTION 05.0 // IQ / OQ / PQ PROTOCOLS</span>
                    </div>
                  </div>
                  <div className="pdf-sheet-meta-block">
                    <div className="pdf-barcode-strip" aria-hidden="true">||| | |||| || | ||| ||</div>
                    <div className="pdf-meta-pills">
                      <span>DOC ID: GIT-2026-ENG-V3.2</span>
                      <span className="pdf-meta-sep">•</span>
                      <span>VALIDATION DOSSIER</span>
                    </div>
                  </div>
                </div>

                <div className="pdf-sheet-body">
                  <div className="pdf-section-title">
                    <span className="sec-num">05.0</span>
                    <span>COMPLIANCE, IQ/OQ/PQ & LIFECYCLE SUPPORT</span>
                  </div>
                  <p className="pdf-text">
                    All machinery projects include full engineering documentation packages to satisfy
                    international regulatory scrutiny and institutional audits.
                  </p>

                  <div className="pdf-compliance-grid">
                    <div className="pdf-comp-item">
                      <FileCheck size={22} />
                      <h4>Installation Qualification (IQ)</h4>
                      <p>
                        Verification that all components, piping, electrical systems, and safety circuits
                        match engineering P&IDs and design specs.
                      </p>
                    </div>
                    <div className="pdf-comp-item">
                      <Sliders size={22} />
                      <h4>Operational Qualification (OQ)</h4>
                      <p>
                        Dynamic testing of equipment across full speed ranges, interlock alarms,
                        temperature holds, and emergency stops.
                      </p>
                    </div>
                    <div className="pdf-comp-item">
                      <Settings size={22} />
                      <h4>Performance Qualification (PQ)</h4>
                      <p>
                        Rigorous trial runs with client production batches verifying yield, fill accuracy,
                        and packaging seal integrity.
                      </p>
                    </div>
                    <div className="pdf-comp-item">
                      <FileSpreadsheet size={22} />
                      <h4>Spare Parts & Maintenance</h4>
                      <p>
                        Standardized 2-year consumable spare parts kits, schematics, component
                        cross-references, and direct engineering hotline.
                      </p>
                    </div>
                  </div>

                  <div className="pdf-signoff-box">
                    <div className="pdf-signoff-item">
                      <small>TECHNICAL CLEARANCE</small>
                      <strong>ENGINEERING OPERATIONS</strong>
                      <span>Global Industrial Technologies</span>
                    </div>
                    <div className="pdf-signoff-item">
                      <small>AUTHORIZATION CODE</small>
                      <strong>GIT-AUTH-2026-ENG-OK</strong>
                      <span>Verified for Project Sourcing & Turnkey Execution</span>
                    </div>
                    <div className="pdf-signoff-seal">
                      <span>GIT</span>
                      <small>SEALED 2026</small>
                    </div>
                  </div>
                </div>

                <div className="pdf-sheet-footer">
                  <span>GIT // TECHNICAL SPECIFICATION REPORT</span>
                  <span>SHEET 05 OF 05</span>
                  <span>CONFIDENTIAL & PROPRIETARY</span>
                </div>
              </article>
            </div>
          </div>

          {/* Floating Workstation Bottom Bar */}
          <div className="pdf-bottom-bar">
            <div className="pdf-bottom-status">
              <span className="pdf-live-ping" />
              <span>TECHNICAL SPECIFICATION ARCHIVE • GIT-SPEC-2026-REV3</span>
            </div>
            <div className="pdf-bottom-actions">
              <button
                onClick={handleDownloadPdf}
                className="button btn-download-pdf"
                disabled={isDownloadingPdf}
              >
                <Download size={14} />
                <span>{isDownloadingPdf ? (pdfStatus || 'Generating PDF...') : 'Download Full Technical PDF'}</span>
              </button>
              <Link
                to={`/contact?subject=${encodeURIComponent('Technical Dossier Inquiry')}&message=${encodeURIComponent('I have reviewed the 2026 Technical Machinery Catalogue & Dossier and would like to discuss engineering specifications and requirements for our plant.')}`}
                className="button glass"
              >
                <span>Enquire About These Specs</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Machine Category Link Grid */}
      <section className="catalog-categories-section section section-rule">
        <div className="section-head">
          <div>
            <div className="eyebrow">QUICK CONFIGURATION</div>
            <Words>READY TO SPECIFY A SYSTEM?</Words>
          </div>
          <Link to="/products">
            All machinery <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="catalog-cat-grid">
          {products.map((item) => (
            <div className="catalog-cat-card frame" key={item.id}>
              <div className="catalog-cat-thumb">
                <img src={item.img} alt={item.name} loading="lazy" />
                <span className="catalog-cat-tag">
                  {item.id} / {item.type}
                </span>
              </div>
              <div className="catalog-cat-content">
                <h3>{item.name}</h3>
                <ul>
                  {item.specs.map((sp) => (
                    <li key={sp}>{sp}</li>
                  ))}
                </ul>
                <Link
                  to={`/contact?product=${encodeURIComponent(item.name)}&industry=${encodeURIComponent(item.type)}&message=${encodeURIComponent(`Requesting a tailored quotation, format parts compatibility, and production timeline for: ${item.name} (${item.type}).`)}`}
                  className="button sm dark full"
                  style={{ marginTop: 'auto', justifyContent: 'center' }}
                >
                  <span>Request Quote for this Line</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Catalog CTA */}
      <section className="final-cta">
        <div className="eyebrow">CUSTOM SPECIFICATIONS</div>
        <Words>NEED A CUSTOM MACHINE CONFIGURATION?</Words>
        <p>
          We adapt line speeds, filling nozzles, conveyor geometries, and cleanroom dimensions to
          your factory footprint.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={handleDownloadPdf}
            className="button primary"
            disabled={isDownloadingPdf}
          >
            <Download size={15} />
            <span>{isDownloadingPdf ? (pdfStatus || 'Generating PDF...') : 'Download PDF Catalog'}</span>
          </button>
          <Link
            className="button glass-dark"
            to={`/contact?subject=${encodeURIComponent('Custom Machine Configuration')}&message=${encodeURIComponent('We would like to discuss a custom industrial machinery configuration adapted to our factory footprint and line speed requirements.')}`}
          >
            <span>Start the conversation</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

