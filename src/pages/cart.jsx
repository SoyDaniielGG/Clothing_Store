import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <NavBar/>
      <header>
      <h2>🛒 Carrito de Compras</h2>
      </header>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.imagen} alt={product.nombre} width="50" />
              <h4>{product.nombre}</h4>
              <p>Precio: ${product.precio} x {product.cantidad}</p>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
          ))}
          <h3>Total: ${getTotalPrice()}</h3>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Cart;
