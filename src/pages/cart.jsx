import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import NavBar from "../components/navBar";
import "../styles/cart.css"

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className="cart-page">
      <NavBar/>
      <main>
        <header className="cart-container" role="banner">
          <h1>🛒 Carrito de Compras</h1>
        </header>
        <section aria-label="Contenido del carrito">
          {cart.length === 0 ? (
            <p role="status">El carrito está vacío.</p>
          ) : (
            <article className="cart-content">
              <div className="cart-items" role="list">
                {cart.map((product) => (
                  <article key={product.id} className="cart-item" role="listitem">
                    <img src={product.imagen} alt={product.nombre} className="cart-item-image" />
                    <h2>{product.nombre}</h2>
                    <div className="cart-item-details">
                      <p>Precio: ${product.precio}</p>
                      <div className="quantity-controls" role="group" aria-label="Control de cantidad">
                        <button onClick={() => decrementQuantity(product.id)} aria-label="Disminuir cantidad">-</button>
                        <span aria-label="Cantidad">{product.cantidad}</span>
                        <button onClick={() => incrementQuantity(product.id)} aria-label="Aumentar cantidad">+</button>
                      </div>
                      <p className="item-total">Total: ${product.precio * product.cantidad}</p>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(product.id)} aria-label={`Eliminar ${product.nombre} del carrito`}>Eliminar</button>
                  </article>
                ))}
              </div>
              <footer className="cart-summary">
                <h3 className="cart-total">Total: ${getTotalPrice()}</h3>
                <div className="cart-actions">
                  <button onClick={clearCart} className="clear-cart-btn" aria-label="Vaciar carrito">Vaciar Carrito</button>
                  <button className="checkout-btn" aria-label="Proceder al pago">Proceder al Pago</button>
                </div>
              </footer>
            </article>
          )}
        </section>
      </main>
    </div>
  );
};

export default Cart;