'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useCart } from '../context/cartContext';
import '../styles/navBar.css';

const NavBar = () => {
    const { data: session } = useSession();
    const { cartItems } = useCart();
    const cartItemsCount = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

    return (
        <nav className="navbar" role="navigation" aria-label="Navegación principal">
            <div className="navbar-container">
                <Link href="/" className="navbar-logo" aria-label="Ir a inicio">
                    Clothing Store
                </Link>
                <div className="navbar-links">
                    <Link href="/" className="navbar-link" aria-current="page" aria-label='Ir a inicio'>
                        Inicio
                    </Link>
                    <Link href="/productos" className="navbar-link" aria-label="Ir a productos">
                        Productos
                    </Link>
                    <Link href="/carrito" className="navbar-link" aria-label={`Carrito de compras, ${cartItemsCount} artículos`}>
                        Carrito ({cartItemsCount})
                    </Link>
                    <Link href="/contacto" className="navbar-link" aria-label='Ir a contacto'>
                        Contacto
                    </Link>
                </div>
                <div className="navbar-actions">
                    {session ? (
                        <>
                            <Link href="/perfil" className="navbar-link" aria-label='Ir a perfil'>
                                Mi Perfil
                            </Link>
                            <button 
                                onClick={() => signOut()} 
                                className="navbar-button"
                                aria-label='Cerrar sesión'
                            >
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link href="/login" className="navbar-link" aria-label='Iniciar sesión'>
                            Iniciar Sesión
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;