'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '../../context/cartContext';
import './cart.css';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
    };

    return (
        <main className="cart-container" role="main">
            <h1>Carrito de Compras</h1>
            {cartItems.length === 0 ? (
                <p role="alert">Tu carrito está vacío</p>
            ) : (
                <section aria-label="Productos en el carrito">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <article key={item.id} className="cart-item">
                                <div className="cart-item-image">
                                    <Image
                                        src={item.imagen}
                                        alt={`Imagen de ${item.nombre}`}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="cart-item-details">
                                    <h2>{item.nombre}</h2>
                                    <p aria-label={`Precio: ${item.precio.toLocaleString('es-CO')} pesos`}>
                                        Precio: ${item.precio.toLocaleString('es-CO')}
                                    </p>
                                    <div className="quantity-controls" role="group" aria-label="Control de cantidad">
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            aria-label="Disminuir cantidad"
                                        >-</button>
                                        <span aria-label={`Cantidad: ${item.quantity}`}>{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            aria-label="Aumentar cantidad"
                                        >+</button>
                                    </div>
                                    <button 
                                        className="remove-button"
                                        onClick={() => removeFromCart(item.id)}
                                        aria-label={`Eliminar ${item.nombre} del carrito`}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="cart-total" role="contentinfo">
                        <h2>Total: ${calculateTotal().toLocaleString('es-CO')}</h2>
                    </div>
                </section>
            )}
        </main>
    );
};

export default CartPage;
