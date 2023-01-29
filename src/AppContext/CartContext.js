import { createContext, useState } from "react";
import React from "react";

export const CartContext = createContext({});


export default function CartProvider({children}){
const [cart, setCart] = useState([]);

    return(
        <CartContext.Provider value={{cart,setCart}}>
           {children} 
        </CartContext.Provider>
    )
}

