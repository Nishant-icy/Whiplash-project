import React from 'react';
import { X, Trash2 } from 'lucide-react';

const fmt = (n) => '₹' + n.toLocaleString('en-IN');

const CartDrawer = ({ open, onClose, items, onQtyChange, onRemove }) => {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <div className={`cart-overlay${open ? ' open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer${open ? ' open' : ''}`}>
        <div className="cart-header">
          <h2>🛒 Your Haul</h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🎸</div>
            <p>Nothing Here Yet!</p>
            <span>Add some gear and rock out</span>
          </div>
        ) : (
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{fmt(item.price * item.qty)}</div>
                </div>
                <div className="cart-item-qty">
                  <button className="qty-btn" onClick={() => onQtyChange(item.id, -1)}>−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => onQtyChange(item.id, 1)}>+</button>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(item.id)} aria-label="Remove item">
                  <Trash2 size={15} />
                </button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-amount">{fmt(total)}</span>
            </div>
            <button className="btn btn-primary cart-checkout-btn">⚡ Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
