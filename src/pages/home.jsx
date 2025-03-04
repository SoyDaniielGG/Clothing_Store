import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import ProductCard from "../components/productCard";
const Home = () => {
    return (
        <div>
            <NavBar/>
            <header className="banner">
                <h1>Bienvenido a Clothing Store</h1>
                <p>Moda para toda la familia al mejor precio jsjsjs</p>
            </header>
            <section className="categorias">
                <h2>Categorías</h2>
                <div className="listaCategorias">
                    <button>Ropa Caballero</button>
                    <button>Ropa Dama</button>
                    <button>Ropa Niños</button>
                </div> 

            </section>
            <section className="destacados">
                <h2>Productos Destacados</h2>
                <div className="products-grid">
                    <ProductCard name="Camiseta Blanca" price="$35.000" img="/public/images/camisetaBlanca.jpg"/>
                    <ProductCard name="Camiseta Negra" price="$35.000" img=""/>
                    <ProductCard name="Pantalon Azul" price="$135.000" img=""/>
                    <ProductCard name="Pantalon Negro" price="$135.000" img=""/>
                    <ProductCard name="Camiseta Blanca" price="$35.000" img="/public/images/camisetaBlanca.jpg"/>
                    <ProductCard name="Camiseta Negra" price="$35.000" img=""/>
                    <ProductCard name="Pantalon Azul" price="$135.000" img=""/>
                    <ProductCard name="Pantalon Negro" price="$135.000" img=""/>


                </div>

            </section>             
        </div>
    )
}
export default Home;