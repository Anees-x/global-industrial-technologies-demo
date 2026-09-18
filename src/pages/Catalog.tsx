import React, { useRef, useState } from 'react';
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

export function Catalog() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSheet, setActiveSheet] = useState('sheet-cover');
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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadPdf = () => {
    const lang = localStorage.getItem('git-language') || 'en';
    const element = document.createElement('a');
    let catalogData = '';
    let fileName = 'GIT_Industrial_Machinery_Catalog_2026.txt';

    if (lang === 'pt') {
      fileName = 'GIT_Catalogo_Maquinas_Industriais_2026.txt';
      catalogData = `
================================================================================
GLOBAL INDUSTRIAL TECHNOLOGIES (GIT)
CATÁLOGO DE SISTEMAS TÉCNICOS E MÁQUINAS — EDIÇÃO 2026
REF. DO DOCUMENTO: GIT-SPEC-CAT-2026-REV3
VALIDAÇÃO: cGMP / ISO 9001:2015 / CERTIFICADO CE
================================================================================

1. VISÃO GERAL EXECUTIVA E ARQUITETURA DE INTEGRAÇÃO
A Global Industrial Technologies fornece linhas completas de embalagem industrial,
processamento e produção em salas limpas de fonte única. Eliminamos o atrito
de interface multifornecedor assumindo total responsabilidade 'chave na mão',
desde o projeto inicial da linha em CAD até a aprovação final no local.

2. O CICLO COMPLETO DE SERVIÇO EM 10 ETAPAS
- Etapa 01: Avaliação de Necessidades e Consulta de Layout da Fábrica
- Etapa 02: Seleção de Máquinas e Matriz de Aquisição
- Etapa 03: Testes de Aceitação de Fábrica (FAT) 100% Pré-Envio
- Etapa 04: Frete Seguro, Desembaraço Aduaneiro e Entrega no Local
- Etapa 05: Configuração de Instalação Mecânica e Elétrica
- Etapa 06: Comissionamento de Linha a Seco e a Úmido
- Etapa 07: Treinamento Técnico da Equipe e Certificação de Operadores
- Etapa 08: Liberação de Protocolos de Validação IQ / OQ / PQ
- Etapa 09: Kits de Peças de Reposição para 2 Anos e Suporte 24/7
- Etapa 10: Otimização Completa do Ciclo de Vida Turnkey

3. ESPECIFICAÇÕES DOS EQUIPAMENTOS PRINCIPAIS DE PRODUÇÃO
${products
  .map(
    (p) => `
[ITEM ${p.id}] ${p.name.toUpperCase()} (${p.type})
--------------------------------------------------------------------------------
Especificações Principais:
${p.specs.map((s) => `  * ${s}`).join('\n')}
Automação e Controle: PLC Siemens S7-1500 + Ecrã Tátil IHM Simatic Comfort
Metalurgia de Contato: Aço Inoxidável AISI 316L (Polimento espelhado Ra < 0.4 µm)
Estrutura e Gabinete: Aço Inoxidável AISI 304 / Vidro de Segurança Temperado
Conformidade: Marcação CE, Padrões cGMP, ISO 9001:2015
`
  )
  .join('')}

4. ARQUITETURA DE SALAS LIMPAS MODULARES E HVAC
- Estrutura: Painéis Sanduíche de Parede Dupla de 50mm (PIR / Lã de Rocha Não Combustível)
- Acabamento Superficial: PVDF Antiestático / Poliuretano de Grau Alimentar
- Filtragem: Filtros HEPA H14 (Eficiência 99,995% @ 0.3 µm MPPS)
- Trocas de Ar: 20 a 60 ACH em ISO Classe 5 a ISO Classe 8 (cGMP Grau A–D)
- Diferencial de Cascata: Cascata de Pressão Positiva de +15 Pa entre Vestiários e Enchimento

5. GARANTIA DE QUALIDADE E PROTOCOLO DE VALIDAÇÃO FAT
Nenhuma máquina sai sem aprovação por escrito do protocolo FAT:
- Teste a úmido 100% com recipientes reais do cliente e fluidos de viscosidade correspondente
- Registro completo de telemetria dos sensores: Precisão de dosagem ±0,5%, Tolerância de torque ±0,05 Nm
- Dossiê completo de validação IQ/OQ e kit de peças de reposição para 2 anos

CONTATO E ARQUIVO TÉCNICO:
Global Industrial Technologies
Web: https://globalindustrialtechnologies.com
================================================================================
      `.trim();
    } else if (lang === 'fr') {
      fileName = 'GIT_Catalogue_Machines_Industrielles_2026.txt';
      catalogData = `
================================================================================
GLOBAL INDUSTRIAL TECHNOLOGIES (GIT)
CATALOGUE DE SYSTÈMES TECHNIQUES ET MACHINES — ÉDITION 2026
RÉF. DU DOCUMENT: GIT-SPEC-CAT-2026-REV3
VALIDATION: cGMP / ISO 9001:2015 / CERTIFIÉ CE
================================================================================

1. APERÇU EXÉCUTIF ET ARCHITECTURE D'INTÉGRATION
Global Industrial Technologies fournit des lignes complètes de conditionnement
industriel, de traitement et de production en salle blanche à source unique.
Nous éliminons les frictions d'interface multifournisseurs en assumant l'entière
responsabilité clé en main, de la conception initiale CAO à la réception finale.

2. LE CYCLE COMPLET DE SERVICE EN 10 ÉTAPES
- Étape 01: Évaluation des Besoins et Consultation d'Implantation d'Usine
- Étape 02: Sélection des Machines et Matrice d'Approvisionnement
- Étape 03: Tests de Réception en Usine (FAT) à 100% Avant Expédition
- Étape 04: Fret Sécurisé, Dédouanement et Livraison sur Site
- Étape 05: Installation Mécanique et Électrique
- Étape 06: Mise en Service de Ligne à Sec et en Humide
- Étape 07: Formation du Personnel Technique et Certification des Opérateurs
- Étape 08: Validation des Protocoles IQ / OQ / PQ
- Étape 09: Kits de Pièces Détachées pour 2 Ans et Support Technique 24/7
- Étape 10: Optimisation Complète du Cycle de Vie Clé en Main

3. SPÉCIFICATIONS DES ÉQUIPEMENTS DE PRODUCTION PRINCIPAUX
${products
  .map(
    (p) => `
[ARTICLE ${p.id}] ${p.name.toUpperCase()} (${p.type})
--------------------------------------------------------------------------------
Spécifications Principales:
${p.specs.map((s) => `  * ${s}`).join('\n')}
Automatisation et Contrôle: Automate Siemens S7-1500 + Écran Tactile IHM Simatic Comfort
Métallurgie de Contact: Acier Inoxydable AISI 316L (Finition miroir Ra < 0.4 µm)
Châssis et Enceinte: Acier Inoxydable AISI 304 / Verre de Sécurité Trempé
Conformité: Marquage CE, Normes cGMP, ISO 9001:2015
`
  )
  .join('')}

4. ARCHITECTURE SALLES BLANCHES MODULAIRES ET CVC
- Enceinte: Panneaux Sandwich Double Peau de 50 mm (PIR / Laine de Roche Incombustible)
- Finition de Surface: PVDF Antistatique / Polyuréthane de Qualité Alimentaire
- Filtration: Filtres HEPA H14 (Efficacité 99,995 % @ 0.3 µm MPPS)
- Renouvellements d'Air: 20 à 60 ACH pour ISO Classe 5 à ISO Classe 8 (cGMP Grade A–D)
- Différentiel de Cascade: Cascade de Pression Positive de +15 Pa entre Vestiaires et Remplissage

5. ASSURANCE QUALITÉ ET GARANTIE DE VALIDATION FAT
Aucune machine ne part sans signature écrite du protocole FAT:
- Test en conditions réelles à 100% avec les contenants réels du client et fluides adaptés
- Enregistrement télémétrique complet des capteurs: Précision de dosage ±0,5%, Tolérance de couple ±0,05 Nm
- Dossier complet de validation IQ/OQ et kit de pièces détachées pour 2 ans

CONTACT ET ARCHIVE DU DOSSIER TECHNIQUE:
Global Industrial Technologies
Web: https://globalindustrialtechnologies.com
================================================================================
      `.trim();
    } else {
      fileName = 'GIT_Industrial_Machinery_Catalog_2026.txt';
      catalogData = `
================================================================================
GLOBAL INDUSTRIAL TECHNOLOGIES (GIT)
TECHNICAL SYSTEMS & MACHINERY CATALOGUE — 2026 EDITION
DOCUMENT REF: GIT-SPEC-CAT-2026-REV3
VALIDATION: cGMP / ISO 9001:2015 / CE CERTIFIED
================================================================================

1. EXECUTIVE OVERVIEW & INTEGRATION ARCHITECTURE
Global Industrial Technologies delivers complete single-source industrial packaging,
processing, and cleanroom production lines. We eliminate multi-vendor interface
friction by taking full turnkey accountability from initial CAD line design to 
final site sign-off.

2. THE COMPLETE 10-STEP SERVICE CYCLE
- Step 01: Needs Assessment & Plant Layout Consultation
- Step 02: Machinery Selection & Sourcing Matrix
- Step 03: 100% Pre-Shipment Factory Acceptance Testing (FAT)
- Step 04: Secure Freight, Customs Clearance & Site Delivery
- Step 05: Mechanical & Electrical Installation Setup
- Step 06: Dry & Wet Line Commissioning
- Step 07: Technical Staff Training & Operator Certification
- Step 08: IQ / OQ / PQ Validation Protocol Clearance
- Step 09: 2-Year Spare Parts Kits & 24/7 Engineering Support
- Step 10: Complete Turnkey Lifecycle Optimization

3. CORE PRODUCTION EQUIPMENT SPECIFICATIONS
${products
  .map(
    (p) => `
[ITEM ${p.id}] ${p.name.toUpperCase()} (${p.type})
--------------------------------------------------------------------------------
Key Specifications:
${p.specs.map((s) => `  * ${s}`).join('\n')}
Automation & Control: Siemens S7-1500 PLC + Simatic Comfort HMI Touchscreen
Contact Metallurgy: AISI 316L Stainless Steel (Ra < 0.4 µm mirror finish)
Frame & Enclosure: AISI 304 Stainless Steel / Toughened Safety Glass
Compliance: CE Marking, cGMP Standards, ISO 9001:2015
`
  )
  .join('')}

4. MODULAR CLEANROOM & HVAC ARCHITECTURE
- Enclosure: 50mm Double-Skin Sandwich Panels (PIR / Non-Combustible Rockwool Core)
- Surface Finish: Antistatic PVDF / Food-Grade Polyurethane (Chemical Resistant)
- Filtration: H14 HEPA Filters (99.995% Efficiency @ 0.3 µm MPPS)
- Air Changes: 20 to 60 ACH across ISO Class 5 to ISO Class 8 (cGMP Grade A–D)
- Cascade Differential: +15 Pa Positive Pressure Cascade across Gowning & Filling

5. QUALITY ASSURANCE & FAT VALIDATION GUARANTEE
No machinery departs without written FAT protocol sign-off:
- 100% Wet-tested run using actual client containers & viscosity-matched fluids
- Full sensor telemetry recording: Dosing accuracy ±0.5%, Torque tolerance ±0.05 Nm
- Complete IQ/OQ validation dossier & 2-year consumable spare parts kit

CONTACT & TECHNICAL DOSSIER ARCHIVE:
Global Industrial Technologies
Web: https://globalindustrialtechnologies.com
================================================================================
      `.trim();
    }

    const blob = new Blob([catalogData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    element.href = url;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHero
        label="E-CATALOG // 2026 SPECIFICATION"
        title={
          <>
            TECHNICAL MACHINERY
            <br />
            <em>CATALOGUE & DOSSIER.</em>
          </>
        }
        copy="Comprehensive technical specifications, multi-axis line schematics, cleanroom HVAC cascade blueprints, and turnkey service parameters formatted to international engineering standards."
        img={IMG.hero}
      />

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
          <div className="catalog-meta-actions">
            <button
              onClick={handleDownloadPdf}
              className="button btn-download-pdf"
              title="Download full technical catalog document"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>
            <Link to="/contact" className="button glass">
              <span>Request Quote</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main E-Catalog CAD Inspection Console */}
      <section className="catalog-viewer-section section">
        <div className="catalog-header-wrap">
          <div>
            <div className="eyebrow">DIGITAL TECHNICAL DOSSIER</div>
            <Words>TECHNICAL MACHINERY SPECIFICATIONS</Words>
          </div>
          <p className="catalog-intro-copy">
            Complete continuous technical portfolio formatted to Swiss/German engineering standards. Use
            the interactive CAD toolbar below to scale sheets, navigate sections, or export the validated
            document.
          </p>
        </div>

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
              <button onClick={handleDownloadPdf} className="button btn-download-pdf">
                <Download size={14} />
                <span>Download Full Technical PDF</span>
              </button>
              <Link to="/contact" className="button glass">
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
                  to="/contact"
                  className="button sm white full"
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
          <button onClick={handleDownloadPdf} className="button primary">
            <Download size={15} />
            <span>Download PDF Catalog</span>
          </button>
          <Link className="button glass-dark" to="/contact">
            <span>Start the conversation</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

