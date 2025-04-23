'use client';

import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import "../styles/productCard.css";

const ProductCard = ({ id, nombre, precio, imagen, categoria }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, nombre, precio, imagen, categoria });
  };

  const formattedPrice = precio ? precio.toLocaleString() : "0";

  return (
    <article className="product-card" aria-labelledby={`product-${id}-title`}>
      <img src={imagen} alt={nombre} className="product-image" />
      <div className="product-info">
        <h3 id={`product-${id}-title`}>{nombre}</h3>
        <p className="price" aria-label={`Precio: ${formattedPrice} pesos`}>
          <span className="visually-hidden">Precio:</span>
          ${formattedPrice} COP
        </p>
        <button 
          onClick={handleAddToCart}
          className="add-to-cart-button"
          aria-label={`Agregar ${nombre} al carrito`}
        >
          Agregar al Carrito
        </button>
      </div>
    </article>
  );
};

export default ProductCard;