import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import ProductCard from "../components/productCard";

const Home = () => {
    return (
        <main className="page-container">
            <NavBar />
            <header className="banner">
                <h1>Bienvenido a Clothing Store</h1>
                <p>Moda para toda la familia al mejor precio</p>
            </header>

            <section className="categorias" aria-labelledby="categorias-titulo">
                <h2 id="categorias-titulo">Categorías</h2>
                <nav className="listaCategorias">
                    <ul>
                        <li><button>Ropa Caballero</button></li>
                        <li><button>Ropa Dama</button></li>
                        <li><button>Ropa Niños</button></li>
                    </ul>
                </nav>
            </section>

            <section className="destacados" aria-labelledby="destacados-titulo">
                <h2 id="destacados-titulo">Productos Destacados</h2>
                <div className="products-grid">
                    <ProductCard name="Camiseta Blanca" price="$35.000" img="/public/images/camisetaBlanca.jpg" />
                    <ProductCard name="Camiseta Negra" price="$35.000" img="" />
                    <ProductCard name="Pantalon Azul" price="$135.000" img="" />
                    <ProductCard name="Pantalon Negro" price="$135.000" img="" />
                    <ProductCard name="Camiseta Blanca" price="$35.000" img="/public/images/camisetaBlanca.jpg" />
                    <ProductCard name="Camiseta Negra" price="$35.000" img="" />
                    <ProductCard name="Pantalon Azul" price="$135.000" img="" />
                    <ProductCard name="Pantalon Negro" price="$135.000" img="" />
                </div>
            </section>
            
            <Footer />
        </main>
    )
}

export default Home;
