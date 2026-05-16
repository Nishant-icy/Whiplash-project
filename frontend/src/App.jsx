import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import UserProfile from './components/UserProfile';

function App() {
  const [page, setPage] = useState('home');   // 'home' | 'login' | 'profile'
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('home');
  };

  const handleNavigate = (target) => {
    setPage(target);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  // Pages that don't show the main layout
  if (page === 'login') {
    return (
      <>
        <Navbar cartCount={cartCount} user={user} onNavigate={handleNavigate} />
        <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />
        <Footer />
      </>
    );
  }

  if (page === 'profile' && user) {
    return (
      <>
        <Navbar cartCount={cartCount} user={user} onNavigate={handleNavigate} />
        <UserProfile user={user} onLogout={handleLogout} onNavigate={handleNavigate} />
        <Footer />
      </>
    );
  }

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} user={user} onNavigate={handleNavigate} />
      <main>
        <Hero onShopNow={() => handleNavigate('home')} />
        <ProductList onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
