import React, { createContext } from "react";

const myContext = createContext()


export const AppContext = ({ children }) => {
    return (
        <myContext.Provider>{children}</myContext.Provider>
    )
}