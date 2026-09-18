import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { IMG } from '../data/assets';
import { products } from '../data/products';

export function Products() {
  return (
    <>
      <PageHero
        label="PRODUCTS / CATALOGUE"
        title={
          <>
            MACHINERY,
            <br />
            <em>READY TO SPECIFY.</em>
          </>
        }
        copy="A focused selection of production equipment. Choose a starting point, then we configure it around your product, output and site requirements."
        img={IMG.hero}
      />
      <section className="products-intro section section-rule">
        <div>
          <div className="eyebrow">SELECTED MACHINERY / 06</div>
          <p>
            Indicative configurations shown below. Final capacity, formats and utility requirements
            are confirmed during technical review.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Link to="/catalog" className="button btn-catalog">
            <FileText size={15} /> View Full E-Catalog
          </Link>
        </div>
      </section>
      <section className="products-grid section">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={index * 0.035}>
            <article className="product-card frame">
              <div className="product-image">
                <img src={product.img} alt={product.name} loading="lazy" />
                <span>
                  {product.id} / {product.type}
                </span>
              </div>
              <div className="product-details">
                <div className="product-head-group">
                  <div className="eyebrow">GIT / EQUIPMENT</div>
                  <h2>{product.name}</h2>
                </div>
                <div className="product-specs-wrap">
                  <div className="product-spec-kicker">KEY SPECIFICATIONS</div>
                  <ul>
                    {product.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="product-card-actions">
                  <Link
                    to={`/contact?product=${encodeURIComponent(product.name)}&industry=${encodeURIComponent(product.type)}&message=${encodeURIComponent(`I would like to request technical specifications, custom configuration, and lead time for: ${product.name} (${product.type}).`)}`}
                    className="button sm white"
                  >
                    <span>Request configuration</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/catalog" className="button sm glass-gold">
                    <FileText size={13} />
                    <span>Specs</span>
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="product-enquiry">
        <div>
          <div className="eyebrow light">NOT SURE WHICH SYSTEM FITS?</div>
          <h2>
            START WITH YOUR
            <br />
            <em>PRODUCT + OUTPUT.</em>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link className="button btn-catalog" to="/catalog">
            <FileText size={15} /> E-Catalog & PDF
          </Link>
          <Link
            className="button light"
            to={`/contact?subject=${encodeURIComponent('Machinery Line Inquiry')}&message=${encodeURIComponent('We would like to discuss our product specifications, required output rate, and facility requirements to determine the right machinery solution.')}`}
          >
            Discuss a requirement <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
