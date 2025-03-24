'use client';

import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const CartCounter = () => {
  const { getCartCount } = useContext(CartContext);
  const count = getCartCount();

  return (
    <div className="cart-link" role="status" aria-live="polite">
      <span role="img" aria-label="Icono de carrito">🛒</span>
      <span>Carrito</span>
      {count > 0 && (
        <span className="cart-count" aria-label={`${count} productos en el carrito`}>
          ({count})
        </span>
      )}
    </div>
  );
};

export default CartCounter;
