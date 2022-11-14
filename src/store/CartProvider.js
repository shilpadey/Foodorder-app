import React , { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
    const [items, updateItems] = useState([])

    const addItemToCartHandler = (item) => {
       updateItems([...items, item]);
        console.log(cartContext);
    };

    const removeItemFromCartHandler = (id) => {};


    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }; 

    return (
        <CartContext.Provider value={cartContext}>
            {console.log('items inside cart context provider' , cartContext)};
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;