'use client';

import React from "react";
import Link from "next/link";
import { FaMale, FaFemale, FaChild } from "react-icons/fa";
import "../styles/home.css";

const HomePage = () => {
    return (
        <main className="home-container">
            <section className="hero-banner">
                <div className="hero-content">
                    <h1>Bienvenido a Clothing Store</h1>
                    <p>Descubre las últimas tendencias en moda para toda la familia</p>
                    <Link href="/productos" className="cta-button">
                        Ver Catálogo
                    </Link>
                </div>
            </section>

            <section className="featured-categories">
                <h2>Categorías Destacadas</h2>
                <div className="categories-grid">
                    <div className="category-card">
                        <div className="category-icon">
                            <FaMale size={60} />
                        </div>
                        <div className="category-info">
                            <h3>Caballero</h3>
                            <Link href="/productos?categoria=Caballero" className="category-link">
                                Ver más
                            </Link>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="category-icon">
                            <FaFemale size={60} />
                        </div>
                        <div className="category-info">
                            <h3>Dama</h3>
                            <Link href="/productos?categoria=Dama" className="category-link">
                                Ver más
                            </Link>
                        </div>
                    </div>
                    <div className="category-card">
                        <div className="category-icon">
                            <FaChild size={60} />
                        </div>
                        <div className="category-info">
                            <h3>Niños</h3>
                            <Link href="/productos?categoria=Niños" className="category-link">
                                Ver más
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us">
                <h2>Sobre Nosotros</h2>
                <p>
                    Somos una tienda de ropa comprometida con ofrecer productos de calidad
                    a precios accesibles. Nuestra misión es vestir a toda la familia con
                    estilo y comodidad.
                </p>
            </section>
        </main>
    );
};

export default HomePage;
