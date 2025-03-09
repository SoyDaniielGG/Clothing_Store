import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import NavBar from "../components/navBar";
import "../styles/cart.css"

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div>
      <NavBar/>
      <header className="cart-container">
      <h2>🛒 Carrito de Compras</h2>
      </header>
      <section>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.imagen} alt={product.nombre} className="cart-item-image" />
              <h4>{product.nombre}</h4>
              <div className="cart-item-details">
                <p>Precio: ${product.precio}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(product.id)}>-</button>
                  <span>{product.cantidad}</span>
                  <button onClick={() => incrementQuantity(product.id)}>+</button>
                </div>
                <p className="item-total">Total: ${product.precio * product.cantidad}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-summary">
            <h3 className="cart-total">Total: ${getTotalPrice()}</h3>
            <div className="cart-actions">
              <button onClick={clearCart} className="clear-cart-btn">Vaciar Carrito</button>
              <button className="checkout-btn">Proceder al Pago</button>
            </div>
          </div>
        </div>
      )}

      </section>
      
    </div>
  );
};

export default Cart;