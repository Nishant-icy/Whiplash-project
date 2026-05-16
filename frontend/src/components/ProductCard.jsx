import React from 'react';
import { Plus, Star } from 'lucide-react';

const fmt = (n) => '₹' + n.toLocaleString('en-IN');

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {product.badge && (
        <div className={`product-badge product-badge--${product.badge.toLowerCase().replace(' ', '-')}`}>
          {product.badge}
        </div>
      )}

      <div className="product-image-container">
        <div className="product-image-bg"></div>
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating">
          <span className="product-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13}
                fill={i < Math.round(product.rating) ? '#f5c518' : 'none'}
                stroke="#c49000" strokeWidth={1.5}
              />
            ))}
          </span>
          <span className="product-rating-score">{product.rating}</span>
          <span className="product-reviews">({product.reviews})</span>
        </div>

        <div className="product-footer">
          <span className="product-price">{fmt(product.price)}</span>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)} aria-label="Add to cart">
            <Plus size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
