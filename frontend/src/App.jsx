import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import UserProfile from './components/UserProfile';
import CartDrawer from './components/CartDrawer';

function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('home');
  };

  const handleNavigate = (target) => setPage(target);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleQtyChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  const cartDrawer = (
    <CartDrawer
      open={cartOpen}
      onClose={() => setCartOpen(false)}
      items={cartItems}
      onQtyChange={handleQtyChange}
      onRemove={handleRemove}
    />
  );

  if (page === 'login') {
    return (
      <>
        <Navbar cartCount={cartCount} user={user} onNavigate={handleNavigate} onCartOpen={() => setCartOpen(true)} />
        <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />
        <Footer />
        {cartDrawer}
      </>
    );
  }

  if (page === 'profile' && user) {
    return (
      <>
        <Navbar cartCount={cartCount} user={user} onNavigate={handleNavigate} onCartOpen={() => setCartOpen(true)} />
        <UserProfile user={user} onLogout={handleLogout} onNavigate={handleNavigate} />
        <Footer />
        {cartDrawer}
      </>
    );
  }

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} user={user} onNavigate={handleNavigate} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero />
        <ProductList onAddToCart={handleAddToCart} />
      </main>
      <Footer />
      {cartDrawer}
    </div>
  );
}

export default App;
