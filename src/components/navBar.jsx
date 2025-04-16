'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/cartContext';
import '../styles/navbar.css'

const NavBar = () => {
    const { cartItems } = useCart();
    const cartItemsCount = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

    return (
        <nav className="navbar" role="navigation" aria-label="Navegación principal">
            <div className="nav-brand">
                <Link href="/" aria-label="Ir a inicio">Clothing Store</Link>
            </div>
            <ul className="nav-links">
                <li><Link href="/" aria-current="page" aria-label='Ir a inicio' >Inicio</Link></li>
                <li><Link href="/productos" aria-label="Ir a productos">Productos</Link></li>
                <li>
                    <Link href="/carrito" className="cart-link" aria-label={`Carrito de compras, ${cartItemsCount} artículos`}>
                        Carrito ({cartItemsCount})
                    </Link>
                </li>
                <li><Link href="/contacto" aria-label='Ir a contacto' >Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;