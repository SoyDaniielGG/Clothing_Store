import React from "react";

const ProductCard = ({name, price, img}) => {

    return(
        <div className="product-card">
            <img src={`images/${img}`} alt={name} />{/*imagen del producto*/}
            <h3>{name}</h3>{/*nombre del producto*/}
            <h3>{price}</h3> {/*precio del producto*/}
            <button>Añadir al Carrito</button>{/*boton para agregar el producto al carrito*/}
        </div>
    );
};
export default ProductCard;