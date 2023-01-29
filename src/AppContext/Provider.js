import React from "react";
import AppContext from "./Context";
import { useState } from "react";

export default function AppProvider({children}){
const [cart, setCart] = useState([]);
    return(
        <AppContext.Provider value={{cart,setCart}}>
           {children} 
        </AppContext.Provider>
    )
}