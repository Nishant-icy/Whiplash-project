import React from 'react';
import { Disc3, Package, Heart, Settings, LogOut, Star } from 'lucide-react';
import { products } from '../data/products';

const mockOrders = [
  {
    id: 'ORD-001',
    name: 'Obsidian Vertex Electric Guitar',
    date: 'May 10, 2026',
    status: 'delivered',
    price: 1299.00,
    image: '/images/guitar.png',
  },
  {
    id: 'ORD-002',
    name: 'Aura Pro Studio Monitors',
    date: 'May 14, 2026',
    status: 'processing',
    price: 349.00,
    image: '/images/headphones.png',
  },
];

const UserProfile = ({ user, onLogout, onNavigate }) => {
  return (
    <div className="profile-page">
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">{user.initials}</div>
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <span className="profile-badge">⭐ Premium Member</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigate('home')}
              className="btn btn-outline"
              style={{ fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}
            >
              ← Back to Shop
            </button>
            <button
              id="logout-btn"
              onClick={onLogout}
              className="btn btn-primary"
              style={{ fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="profile-stat-grid" style={{ marginBottom: '2rem' }}>
          <div className="profile-stat">
            <div className="profile-stat-value">2</div>
            <div className="profile-stat-label">Orders Placed</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">1</div>
            <div className="profile-stat-label">Delivered</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">$1,648</div>
            <div className="profile-stat-label">Total Spent</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">4</div>
            <div className="profile-stat-label">Wishlist Items</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="profile-grid">
          {/* Sidebar */}
          <aside className="profile-sidebar">
            <h3 className="profile-section-title">My Account</h3>
            {[
              { icon: <Package size={18} />, label: 'Orders' },
              { icon: <Heart size={18} />, label: 'Wishlist' },
              { icon: <Star size={18} />, label: 'Reviews' },
              { icon: <Settings size={18} />, label: 'Settings' },
            ].map(item => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 1rem',
                  borderRadius: '0.75rem',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  marginBottom: '0.25rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--bg-section)';
                  e.currentTarget.style.color = 'var(--primary-dark)';
                  e.currentTarget.style.borderLeft = '3px solid var(--primary)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderLeft = '3px solid transparent';
                }}
              >
                {item.icon}
                <span style={{ fontWeight: 500 }}>{item.label}</span>
              </div>
            ))}
          </aside>

          {/* Main */}
          <main className="profile-main">
            <h3 className="profile-section-title">Recent Orders</h3>
            {mockOrders.map(order => (
              <div key={order.id} className="order-item">
                <img
                  src={order.image}
                  alt={order.name}
                  className="order-thumb"
                />
                <div className="order-details">
                  <p className="order-name">{order.name}</p>
                  <p className="order-date">{order.date} · {order.id}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary-dark)' }}>
                    ${order.price.toFixed(2)}
                  </p>
                  <span className={`order-status ${order.status}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}

            {/* Recommended Products */}
            <h3 className="profile-section-title" style={{ marginTop: '2rem' }}>Recommended for You</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
              {products.slice(0, 3).map(p => (
                <div
                  key={p.id}
                  style={{
                    background: 'var(--bg-section)',
                    border: '2.5px solid var(--border)',
                    borderRadius: '1rem',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '2px 2px 0 var(--border)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--primary-dark)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '3px 3px 0 var(--primary-dark)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '2px 2px 0 var(--border)';
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '0.75rem' }}
                  />
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-main)' }}>{p.name}</p>
                  <p style={{ color: 'var(--primary-dark)', fontWeight: 700, fontSize: '0.95rem' }}>${p.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
