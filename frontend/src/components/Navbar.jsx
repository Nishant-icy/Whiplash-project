import React, { useState, useEffect } from 'react';
import { ShoppingCart, Disc3, User } from 'lucide-react';

const Navbar = ({ cartCount, user, onNavigate, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={scrolled ? { padding: '0.6rem 0' } : {}}>
      <div className="container nav-container">
        <button className="logo" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none' }}>
          <Disc3 className="logo-icon" size={30} />
          <span>WHIPLASH</span>
        </button>

        <ul className="nav-links">
          <li><button className="nav-link" onClick={() => onNavigate('home')}>Home</button></li>
          <li><a href="#products" className="nav-link">Instruments</a></li>
          <li><a href="#products" className="nav-link">Accessories</a></li>
          <li><a href="#" className="nav-link">About</a></li>
        </ul>

        <div className="nav-actions">
          <button id="cart-btn" className="cart-btn" aria-label="Shopping cart" onClick={onCartOpen}>
            <ShoppingCart size={22} />
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
              className="btn btn-outline"
              onClick={() => onNavigate('login')}
              style={{ padding: '0.45rem 1rem', fontSize: '0.95rem', background: 'white' }}
            >
              <User size={15} />
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
