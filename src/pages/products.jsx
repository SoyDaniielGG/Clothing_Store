import React, { useContext } from "react";
import { useState } from "react";
import "../styles/products.css";
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
    {id:8, nombre: 'Camiseta Azul', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaAzul.jpg'},
    {id:9, nombre: 'Camiseta Roja', categoria:'Dama',precio:35000, imagen:'/public/images/camisetaRoja.jpg'},
    {id:10, nombre: 'Camiseta Beige', categoria:'Niños',precio:35000, imagen:'/public/images/camisetaBeige.jpg'},
    {id:11, nombre: 'Camiseta Negra', categoria:'Caballero',precio:35000, imagen:'/public/images/camisetaNegra.jpg'},
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
    const {addToCart} = useContext(CartContext);//importar funcion de agreagar un producto al carrito
    //alamacenar productos filtrados
    const [products, setProducts] = useState(productsData);
    //funcion filtro por categoria
    const filterProducts = (categoria)=>{
        if(categoria === 'Todos'){
            setProducts(productsData);//muestra todos los productos
        }else{
            const productsFiltered = productsData.filter((product) =>product.categoria ===categoria);
            setProducts(productsFiltered);//muestra los productos de una categoria

        }
    };

    return(
        <div>
            <NavBar/>
            <section className="filter-btn" aria-label="Sección de botones de filtrado">
            <div className="filter-products">
                <button onClick={()=>filterProducts('Todos')}>Todo</button>
                <button onClick={()=>filterProducts('Dama')}>Dama</button>
                <button onClick={()=>filterProducts('Caballero')}>Caballero</button>
                <button onClick={()=>filterProducts('Niños')}>Niños</button>
            </div>
            </section>

            <div className="products-list">
                {products.map((product)=>(
                    <div className="product-target" key={product.id}>
                        <img src={product.imagen} alt={product.nombre} />
                        <h3> {product.nombre} </h3>
                        <p>Precio: ${product.precio} </p>
                        <button onClick={()=>addToCart(product)}>Añadir al carrito</button>

                    </div>
                ))}

            </div>
           
        </div>

    );

};
export default Products;