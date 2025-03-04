import React, { useContext } from "react";
import { useState } from "react";
import "../styles/products.css";
import { CartContext } from "../context/cartContext";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Products = () => {
   
        //BD staica
const productsData = [
    {id:1, nombre: 'Camiseta Negra', categoria:'Caballero',precio:35.000, imagen:'/public/images/camisetaBlanca.jpg'},
    {id:2, nombre: 'Camiseta Blaca', categoria:'Dama',precio:35.000, imagen:''},
    {id:3, nombre: 'Camiseta Azul', categoria:'Caballero',precio:35.000, imagen:''},
    {id:4, nombre: 'Camiseta Roja', categoria:'Dama',precio:35.000, imagen:''},
    {id:5, nombre: 'Camiseta Beige', categoria:'Niños',precio:35.000, imagen:''},

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
            <h2>Productos Disponibles</h2>
            <div className="filter-products">
                <button onClick={()=>filterProducts('Todos')}>Todos</button>
                <button onClick={()=>filterProducts('Dama')}>Dama</button>
                <button onClick={()=>filterProducts('Caballero')}>Caballero</button>
                <button onClick={()=>filterProducts('Niños')}>Niños</button>

            </div>
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
            <Footer/>
        </div>

    );

};
export default Products;