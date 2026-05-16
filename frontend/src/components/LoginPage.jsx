import { useState } from 'react';
import { Disc3, Eye, EyeOff } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const LoginPage = ({ onLogin, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (activeTab === 'signup' && !formData.name) {
      setError('Please enter your full name.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const endpoint = activeTab === 'signup' ? '/api/auth/signup' : '/api/auth/login';
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Store token (in local storage for persistence)
      localStorage.setItem('token', data.token);

      // Call onLogin with the returned user data
      onLogin(data.user);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <Disc3 size={28} style={{ color: 'var(--primary)' }} />
          <span className="text-gradient" style={{ fontSize: '1.6rem', fontWeight: 800 }}>Whiplash</span>
        </div>
        <h1 className="auth-title">
          {activeTab === 'login' ? 'Welcome Back' : 'Join Whiplash'}
        </h1>
        <p className="auth-subtitle">
          {activeTab === 'login'
            ? 'Sign in to your account to continue.'
            : 'Create an account to start shopping.'}
        </p>

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => { setActiveTab('login'); setError(''); }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => { setActiveTab('signup'); setError(''); }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === 'signup' && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                id="auth-name"
                className="form-input"
                type="text"
                name="name"
                placeholder="e.g. Alex Riff"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              id="auth-email"
              className="form-input"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                id="auth-password"
                className="form-input"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                style={{ paddingRight: '3rem' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                style={{
                  position: 'absolute', right: '1rem', top: '50%',
                  transform: 'translateY(-50%)', background: 'none',
                  border: 'none', color: 'var(--text-muted)', cursor: 'pointer'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <p style={{ color: '#e63600', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 'bold' }}>
              {error}
            </p>
          )}

          <button id="auth-submit" type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading ? 'Processing...' : (activeTab === 'login' ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          {activeTab === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
            style={{ color: 'var(--primary-dark)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.875rem' }}
          >
            {activeTab === 'login' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="btn btn-outline"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
          >
            ← Back to Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
