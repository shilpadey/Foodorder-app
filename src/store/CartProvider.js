import React , { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
    const [items, updateItems] = useState([])

    const addItemToCartHandler = (item) => {
       let itemsPresent = false;
       const newItemArray = [...items];
       newItemArray.forEach((element,index) => {
        if(item.id === element.id){
            itemsPresent = true;
            newItemArray[index].quantity = Number(item.quantity) + Number(newItemArray[index].quantity);
        }
       })
       if(itemsPresent === false){
        updateItems([...items,item])
       }else{
        updateItems(newItemArray);
       }
    };

    const removeItemFromCartHandler = (id) => {
        let hasItem = false;
        const newItemArray = [...items];
        newItemArray.forEach((element,index) => {
            if((id === element.id) && element.quantity === 1){
                hasItem = true;
                const temp = newItemArray.splice(index,1);
                updateItems(temp);
            }else if(id === element.id){
                hasItem = true;
                newItemArray[index].quantity = Number(newItemArray[index].quantity) - 1;
            }
        });
        hasItem === false ? updateItems([...items]) : updateItems(newItemArray);
    };


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