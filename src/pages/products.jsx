import React, { useContext } from "react";
import { useState } from "react";
import ProductCard from "../components/productCard";
import "../styles/products.css";
import "../styles/productCard.css";
import { CartContext } from "../context/cartContext";
import NavBar from "../components/navBar";

const Products = () => {
   
        //BD staica
const productsData = [
    {id:1, nombre: 'Camiseta Negra', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaNegra.jpg'},
    {id:2, nombre: 'Camiseta Blanca', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaBlanca.jpg'},
    {id:3, nombre: 'Camiseta Azul', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaAzul.jpg'},
    {id:4, nombre: 'Camiseta Roja', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaRoja.jpg'},
    {id:5, nombre: 'Camiseta Beige', categoria:'Niños',precio:35000, imagen:'/public/images/camisetaBeige.jpg'},
    {id:6, nombre: 'Camiseta Negra', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaNegra.jpg'},
    {id:7, nombre: 'Camiseta Blanca', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaBlanca.jpg'},
    {id:8, nombre: 'Camiseta Azul', categoria:'Caballero',precio:35000, imagen:'/public/images/pantalonAzul.jpg'},
    {id:9, nombre: 'Camiseta Roja', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaRoja.jpg'},
    {id:10, nombre: 'Camiseta Beige', categoria:'Niños',precio:35000, imagen:'/public/images/camisetaBeige.jpg'},
    {id:11, nombre: 'Camiseta Negra', categoria:'Caballero',precio:35000, imagen:'/public/images/pantalonNegro.jpg'},
    {id:12, nombre: 'Camiseta Blanca', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaBlanca.jpg'},
    {id:13, nombre: 'Camiseta Azul', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaAzul.jpg'},
    {id:14, nombre: 'Camiseta Roja', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaRoja.jpg'},
    {id:15, nombre: 'Camiseta Beige', categoria:'Niños',precio:35000, imagen:'/public/images/camisetaBeige.jpg'},
    {id:16, nombre: 'Camiseta Negra', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaNegra.jpg'},
    {id:17, nombre: 'Camiseta Blanca', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaBlanca.jpg'},
    {id:18, nombre: 'Camiseta Azul', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaAzul.jpg'},
    {id:19, nombre: 'Camiseta Roja', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaRoja.jpg'},
    {id:20, nombre: 'Camiseta Beige', categoria:'Niños',precio:35000, imagen:'/public/images/camisetaBeige.jpg'},
    {id:21, nombre: 'Camiseta Negra', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaNegra.jpg'},
    {id:22, nombre: 'Camiseta Blanca', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaBlanca.jpg'},
    {id:23, nombre: 'Camiseta Azul', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaAzul.jpg'},
    {id:24, nombre: 'Camiseta Roja', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaRoja.jpg'},

];
const {addToCart} = useContext(CartContext)
        
const [selectCategory, setSelectCategory] = useState("todos");

// Filtra productos según la categoría seleccionada
const filteredProducts = selectCategory === "todos"
    ? productsData
    : productsData.filter(product => product.categoria === selectCategory);

return (
    <main className="page-container">
        <NavBar />
        <section className="categorias" aria-labelledby="categorias">
            <nav className="listaCategorias">
                <ul>
                    <li><button onClick={() =>setSelectCategory("todos")}>Todo</button></li>
                    <li><button onClick={() =>setSelectCategory("Caballero")}>Caballero</button></li>
                    <li><button onClick={() =>setSelectCategory("Dama")}>Dama</button></li>
                    <li><button onClick={() =>setSelectCategory("Niños")}>Niños</button></li>
                </ul>
            </nav>
        </section>

        <section className="destacados" aria-labelledby="destacados">
            <div className="products-grid">
                {filteredProducts.length > 0 ?
                 (filteredProducts.map(product=>(
                    <ProductCard key={product.id}{...product} addToCart={addToCart}/>
                ))
            ):(
                <p>No hya productos disponibles en esta categoría</p>
            )}
            </div>
        </section>
        
    </main>
)

};
export default Products;