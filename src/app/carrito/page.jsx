'use client';

import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "../../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart, getTotalPrice, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className="cart-page">
      <section className="cart-container" aria-label="Carrito de compras">
        <h1>
          <span role="img" aria-label="Icono de carrito">🛒</span>
          Carrito de Compras
        </h1>
        {cart.length === 0 ? (
          <p role="status">El carrito está vacío.</p>
        ) : (
          <>
            <div className="cart-items" role="list">
              {cart.map((item) => (
                <article key={item.id} className="cart-item" role="listitem">
                  <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                  <h2>{item.nombre}</h2>
                  <p>
                    <span className="visually-hidden">Precio:</span>
                    ${item.precio.toLocaleString()}
                  </p>
                  <div className="quantity-controls" role="group" aria-label={`Controles de cantidad para ${item.nombre}`}>
                    <button 
                      onClick={() => decrementQuantity(item.id)}
                      aria-label={`Disminuir cantidad de ${item.nombre}`}
                    >
                      -
                    </button>
                    <span aria-live="polite" aria-label="Cantidad">{item.cantidad}</span>
                    <button 
                      onClick={() => incrementQuantity(item.id)}
                      aria-label={`Aumentar cantidad de ${item.nombre}`}
                    >
                      +
                    </button>
                  </div>
                  <p>
                    <span className="visually-hidden">Total del producto:</span>
                    ${(item.precio * item.cantidad).toLocaleString()}
                  </p>
                  <button 
                    className="remove-btn" 
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Eliminar ${item.nombre} del carrito`}
                  >
                    Eliminar
                  </button>
                </article>
              ))}
            </div>
            <footer className="cart-summary">
              <h3 className="cart-total" aria-live="polite">
                Total: ${getTotalPrice().toLocaleString()}
              </h3>
              <div className="cart-actions">
                <button 
                  className="clear-cart-btn" 
                  onClick={clearCart}
                  aria-label="Vaciar todo el carrito"
                >
                  Vaciar Carrito
                </button>
                <button 
                  className="checkout-btn"
                  aria-label="Proceder al pago"
                >
                  Proceder al Pago
                </button>
              </div>
            </footer>
          </>
        )}
      </section>
    </div>
  );
}
