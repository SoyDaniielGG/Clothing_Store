import React from "react";

const ProductCard = ({id,nombre, precio, imagen, addToCart}) => {

    return(
        <div className="product-card">
            <img src={imagen} alt={nombre} />{/*imagen del producto*/}
            <h3>{nombre}</h3>{/*nombre del producto*/}
            <h3>{precio} COP</h3> {/*precio del producto*/}
            <button onClick={()=> addToCart({id,nombre,precio,imagen})}>Añadir al Carrito</button>{/*boton para agregar el producto al carrito*/}
        </div>
    );
};
export default ProductCard;