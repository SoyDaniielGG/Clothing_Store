'use client';

import { createContext, useState, useEffect } from 'react';

//contexto del carrito:
export const CartContext = createContext();

export function CartProvider({ children }) {
  //arreglo de productos del carrito
  const [cart, setCart] = useState([]);

  // Cargar el carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //funcion añadir un producto al carrito:
  const addToCart = (product) => {
    setCart(currentCart => {
      const existingProduct = currentCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      
      return [...currentCart, { ...product, cantidad: 1 }];
    });
  };

  //funcion eliminar un product del carrito
  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  //funcion vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  //funcion para incrementar la cantidad de un producto
  const incrementQuantity = (productId) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  //funcion para decrementar la cantidad de un producto
  const decrementQuantity = (productId) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      ).filter(item => item.cantidad > 0)
    );
  };

  //funcion calcular total de compra
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  //funcion obtener cantidad total de items
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      incrementQuantity,
      decrementQuantity,
      getTotalPrice,
      getCartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}