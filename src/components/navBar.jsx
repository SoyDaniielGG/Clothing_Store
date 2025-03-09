import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const NavBar = () => {
    const { getCartItemCount } = useContext(CartContext);
    return (
        <header className="site-header">
            <nav className="navbar" aria-label="Navegación principal">
                <div className="logo">
                    <Link to="/">
                        <h1>Clothing Store</h1>
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/" aria-current="page">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/carrito">🛒 Carrito {getCartItemCount() > 0 && <span className="cart-count">({getCartItemCount()})</span>}</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;