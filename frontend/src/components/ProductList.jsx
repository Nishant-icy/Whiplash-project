import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const ProductList = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="products-section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div>
            <span className="hero-tag" style={{ marginBottom: '0.75rem' }}>Featured</span>
            <h2 className="section-title">Our Gear</h2>
          </div>
          <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Category filter tabs */}
        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
