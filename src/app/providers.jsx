'use client';

import { CartProvider } from '../context/cartContext';

export function Providers({ children }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
