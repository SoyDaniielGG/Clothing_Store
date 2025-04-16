'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { productsData } from '../../data/products';
import { useCart } from '../../context/cartContext';
import './products.css';

const ProductsPage = () => {
    const searchParams = useSearchParams();
    const generoParam = searchParams.get('categoria');
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const { addToCart } = useCart();
    
    useEffect(() => {
        if (generoParam) {
            setSelectedCategory(generoParam);
        }
    }, [generoParam]);

    const categories = ['Todos', ...new Set(productsData.map(product => 
        product.categoria.charAt(0).toUpperCase() + product.categoria.slice(1)
    ))];
    
    const filteredProducts = selectedCategory === 'Todos' 
        ? productsData 
        : productsData.filter(product => {
            if (selectedCategory === 'Caballero' || selectedCategory === 'Dama' || selectedCategory === 'Niños') {
                return product.genero === selectedCategory;
            }
            return product.categoria.toLowerCase() === selectedCategory.toLowerCase();
        });

    return (
        <main className="products-container" role="main">
            <h1>Nuestros Productos</h1>
            
            <nav className="category-filter" aria-label="Filtro de categorías">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                        aria-pressed={selectedCategory === category}
                        aria-label={`Filtrar por ${category}`}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <section className="products-grid" aria-label="Lista de productos">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <article key={product.id} className="product-card">
                            <div className="product-image">
                                <Image
                                    src={product.imagen}
                                    alt={`Imagen de ${product.nombre}`}
                                    width={300}
                                    height={300}
                                    className="product-img"
                                />
                            </div>
                            <div className="product-info">
                                <h2>{product.nombre}</h2>
                                <p className="product-price" aria-label={`Precio: ${product.precio.toLocaleString('es-CO')} pesos`}>
                                    ${product.precio.toLocaleString('es-CO')}
                                </p>
                                <button 
                                    className="add-to-cart"
                                    onClick={() => addToCart(product)}
                                    aria-label={`Agregar ${product.nombre} al carrito`}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </article>
                    ))
                ) : (
                    <p role="alert">No hay productos disponibles</p>
                )}
            </section>
        </main>
    );
};

export default ProductsPage;
