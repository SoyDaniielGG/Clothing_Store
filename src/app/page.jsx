'use client';

import { useState } from "react";
import { productsData } from "../data/products";
import ProductCard from "../components/productCard";
import "../styles/productCard.css";

export default function Home() {
    const [selectCategory, setSelectCategory] = useState("todos");

    // Filtra productos según la categoría seleccionada
    const filteredProducts = selectCategory === "todos"
        ? productsData
        : productsData.filter(product => product.categoria === selectCategory);

    return (
        <div className="page-container">
            <header className="banner">
                <h1>Bienvenido a Clothing Store</h1>
                <p>¡Moda para toda la familia al mejor precio!</p>
            </header>
            
            <section className="categorias" aria-labelledby="categorias">
                <nav className="listaCategorias">
                    <ul>
                        <li><button onClick={() => setSelectCategory("todos")}>Todo</button></li>
                        <li><button onClick={() => setSelectCategory("Caballero")}>Caballero</button></li>
                        <li><button onClick={() => setSelectCategory("Dama")}>Dama</button></li>
                        <li><button onClick={() => setSelectCategory("Niños")}>Niños</button></li>
                    </ul>
                </nav>
            </section>

            <section className="destacados" aria-labelledby="destacados">
                <div className="products-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    ) : (
                        <p>No hay productos disponibles en esta categoría</p>
                    )}
                </div>
            </section>
        </div>
    );
}
