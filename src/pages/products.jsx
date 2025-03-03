import React from "react";
import { useState } from "react";
import "../styles/products.css"

//BD staica
const productsData = [
    {id:1, nombre: 'Camiseta Negra', categoria:'Caballero',precio:35.000, imagen:'/public/images/camisetaBlanca.jpg'},
    {id:2, nombre: 'Camiseta Blaca', categoria:'Dama',precio:35.000, imagen:''},
    {id:3, nombre: 'Camiseta Azul', categoria:'Caballero',precio:35.000, imagen:''},
    {id:4, nombre: 'Camiseta Roja', categoria:'Dama',precio:35.000, imagen:''},
    {id:5, nombre: 'Camiseta Beige', categoria:'Niños',precio:35.000, imagen:''},

];
const Products = () => {
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
                        <button>Añadir al carrito</button>

                    </div>
                ))}

            </div>
        </div>

    );

};
export default Products;