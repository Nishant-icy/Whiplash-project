import React from 'react';
import { Disc3, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <a href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <Disc3 className="logo-icon" size={32} />
              <span>Whiplash</span>
            </a>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Premium instruments and audio gear for the modern musician. Create without limits.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-muted)' }}><Mail size={20} /></a>
              <a href="#" style={{ color: 'var(--text-muted)' }}><Phone size={20} /></a>
              <a href="#" style={{ color: 'var(--text-muted)' }}><Globe size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Shop</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Electric Guitars</a></li>
              <li><a href="#" className="footer-link">Synthesizers</a></li>
              <li><a href="#" className="footer-link">Studio Monitors</a></li>
              <li><a href="#" className="footer-link">Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Shipping & Returns</a></li>
              <li><a href="#" className="footer-link">Warranty</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Subscribe to get special offers and updates.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="btn btn-primary" style={{ padding: '0.75rem 1.25rem' }}>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Whiplash Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
