'use client';

import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import "../styles/productCard.css";

const ProductCard = ({ id, nombre, precio, imagen }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, nombre, precio, imagen });
  };

  return (
    <article className="product-card" role="article">
      <img src={imagen} alt={nombre} className="product-image" />
      <div className="product-info">
        <h3>{nombre}</h3>
        <p className="price" aria-label={`Precio: ${precio.toLocaleString()} pesos`}>
          <span className="visually-hidden">Precio:</span>
          ${precio.toLocaleString()} COP
        </p>
        <button 
          className="add-to-cart" 
          onClick={handleAddToCart}
          aria-label={`Añadir ${nombre} al carrito`}
        >
          Añadir al Carrito
        </button>
      </div>
    </article>
  );
};

export default ProductCard;