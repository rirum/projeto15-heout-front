import React from "react";
import AppContext from "./Context";
import { useState } from "react";

export default function AppProvider({children}){

    return(
        <AppContext.Provider>
           {children} 
        </AppContext.Provider>
    )
}