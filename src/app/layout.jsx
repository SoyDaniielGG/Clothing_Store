'use client';

import React from "react";
import { CartProvider } from "../context/cartContext";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import AccesibilityWidget from "../components/accesibilityWidget";
import "../styles/globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <title>Clothing Store</title>
                <meta name="description" content="Tienda de ropa online con las últimas tendencias en moda" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <CartProvider>
                    <div id="content-wrapper" role="document">
                        <header role="banner">
                            <NavBar />
                        </header>
                        <main role="main" id="main-content">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <aside role="complementary">
                        <AccesibilityWidget />
                    </aside>
                </CartProvider>
            </body>
        </html>
    );
}