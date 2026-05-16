import React, { useState, useEffect } from 'react';
import { ShoppingCart, Disc3, User } from 'lucide-react';

const Navbar = ({ cartCount, user, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={scrolled ? { padding: '0.85rem 0' } : {}}>
      <div className="container nav-container">
        {/* Logo */}
        <button className="logo" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none' }}>
          <Disc3 className="logo-icon" size={32} />
          <span className="text-gradient">Whiplash</span>
        </button>

        {/* Nav Links */}
        <ul className="nav-links">
          <li><button className="nav-link" onClick={() => onNavigate('home')}>Home</button></li>
          <li><a href="#products" className="nav-link">Instruments</a></li>
          <li><a href="#products" className="nav-link">Audio Pro</a></li>
          <li><a href="#" className="nav-link">About</a></li>
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button id="cart-btn" className="cart-btn" aria-label="Shopping cart">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {user ? (
            <button
              id="user-avatar-btn"
              className="user-avatar-btn"
              onClick={() => onNavigate('profile')}
              aria-label="User profile"
              title={user.name}
            >
              {user.initials}
            </button>
          ) : (
            <button
              id="login-btn"
              className="btn btn-primary"
              onClick={() => onNavigate('login')}
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}
            >
              <User size={16} />
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
