import { Package, Heart, Settings, LogOut, Star } from 'lucide-react';
import { products } from '../data/products';

const UserProfile = ({ user, onLogout, onNavigate }) => {
  // No mock orders yet; orders would come from a real API in future.
  const orders = [];

  return (
    <div className="profile-page">
      <div className="container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">{user.initials}</div>
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <span className="profile-badge">🎵 Member</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('home')} className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}>
              ← Back to Shop
            </button>
            <button id="logout-btn" onClick={onLogout} className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}>
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="profile-stat-grid" style={{ marginBottom: '2rem' }}>
          <div className="profile-stat">
            <div className="profile-stat-value">{orders.length}</div>
            <div className="profile-stat-label">Orders Placed</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">0</div>
            <div className="profile-stat-label">Delivered</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">$0</div>
            <div className="profile-stat-label">Total Spent</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-value">0</div>
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
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.875rem 1rem', borderRadius: '4px', cursor: 'pointer',
                  color: 'var(--text-muted)', transition: 'all 0.15s ease', marginBottom: '0.25rem',
                  border: '2px solid transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--bg-section)';
                  e.currentTarget.style.color = 'var(--ink)';
                  e.currentTarget.style.border = '2px solid var(--ink)';
                  e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.border = '2px solid transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {item.icon}
                <span style={{ fontWeight: 700, fontFamily: "'Bangers', cursive", letterSpacing: '1px', fontSize: '1.05rem' }}>{item.label}</span>
              </div>
            ))}
          </aside>

          {/* Main */}
          <main className="profile-main">
            <h3 className="profile-section-title">Recent Orders</h3>

            {orders.length === 0 ? (
              <div className="orders-empty">
                <div className="orders-empty-icon">📦</div>
                <h4>No Orders Yet!</h4>
                <p>Head to the shop and find your next instrument</p>
                <button
                  className="btn btn-primary"
                  onClick={() => onNavigate('home')}
                  style={{ marginTop: '1.25rem' }}
                >
                  🎸 Shop Now
                </button>
              </div>
            ) : (
              orders.map(order => (
                <div key={order.id} className="order-item">
                  <img src={order.image} alt={order.name} className="order-thumb" />
                  <div className="order-details">
                    <p className="order-name">{order.name}</p>
                    <p className="order-date">{order.date} · {order.id}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: 700, marginBottom: '0.4rem', fontFamily: "'Bangers', cursive", fontSize: '1.2rem', color: 'var(--accent)' }}>
                      ${order.price.toFixed(2)}
                    </p>
                    <span className={`order-status ${order.status}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))
            )}

            {/* Recommended Products */}
            <h3 className="profile-section-title" style={{ marginTop: '2.5rem' }}>You Might Dig These</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
              {products.slice(0, 3).map(p => (
                <div
                  key={p.id}
                  style={{
                    background: 'var(--bg-section)', border: '3px solid var(--ink)',
                    borderRadius: '4px', padding: '1rem', cursor: 'pointer',
                    transition: 'all 0.15s ease', boxShadow: '4px 4px 0 var(--ink)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--ink)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; e.currentTarget.style.boxShadow = '4px 4px 0 var(--ink)'; }}
                >
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '90px', objectFit: 'contain', marginBottom: '0.75rem' }} />
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--ink)' }}>{p.name}</p>
                  <p style={{ fontFamily: "'Bangers', cursive", fontSize: '1.1rem', color: 'var(--accent)', letterSpacing: '0.5px' }}>₹${p.price.toLocaleString('en-IN')}</p>
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
