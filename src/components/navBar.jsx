import React from "react";
import { Link } from "react-router-dom";
import Products from "../pages/products";

const NavBar =() => {
    return(
        <nav className="navbar">
            <h2>Clothing Store</h2>
            <ul>
                <li><Link to="/">Incio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>

            </ul>
        </nav>
    );
};
export default NavBar;