"use client"

import { createContext, useState } from "react";


export const filteredContext = createContext()

export default function SearchContextProvider({children}){
    const [state, setState] = useState([]);
    return(
        <filteredContext.Provider value={{state, setState}}>
            {children}
        </filteredContext.Provider>
    )
}