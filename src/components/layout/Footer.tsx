import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="eyebrow light">GIT / TURNKEY INDUSTRIAL SUPPORT</div>
          <h2>
            FROM FIRST
            <br />
            <em>BRIEF TO HANDOVER.</em>
          </h2>
        </div>
        <Link className="round" to="/contact" aria-label="Start a project">
          <ArrowUpRight />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Global Industrial Technologies</span>
        <div>
          <Link to="/catalog">E-Catalog</Link>
          <Link to="/products">Products</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <span>Machinery / Engineering / Turnkey</span>
      </div>
    </footer>
  );
}
