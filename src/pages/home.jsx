import React from "react";


const Home = () => {
    return (
        <div>
            <navBar/>
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

                </div>

            </section>
            <footer>
                &copy
            </footer>

        </div>
    )
}
export default Home;