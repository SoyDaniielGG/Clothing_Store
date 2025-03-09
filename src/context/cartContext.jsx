import { createContext, useState } from "react";

//contexto del carrito:
export const CartContext = createContext();

export const CartProvider =({children}) =>{
    //arreglo de productos del carrito
    const [cart, setCart] = useState([]);

    //funcion añadir un producto al carrito:
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if(existingProduct){//si el producto ya esta en el carrito se aumenta la cantidad
                return prevCart.map((item) => 
                item.id === product.id ? {...item, cantidad:item.cantidad +1}: item);
            }else{//si no esta en el carrito se agrega al carrito con cantidad = 1
                return[...prevCart, {...product, cantidad: 1}];
            }
        });
    };

    //funcion para incrementar la cantidad de un producto
    const incrementQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? {...item, cantidad: item.cantidad + 1} : item
            )
        );
    };

    //funcion para decrementar la cantidad de un producto
    const decrementQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.cantidad > 1
                    ? {...item, cantidad: item.cantidad - 1}
                    : item
            ).filter((item) => !(item.id === id && item.cantidad === 1))
        );
    };

    //funcion eliminar un product del carrito
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    //funcion vaciar el carrito
    const clearCart = () =>{
        setCart([]);
    };

    //funcion calcular total de compra
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
    };

    //funcion obtener cantidad total de items
    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.cantidad, 0);
    };
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, getTotalPrice, incrementQuantity, decrementQuantity, getCartItemCount}}>
            {children}
        </CartContext.Provider>
    );
};