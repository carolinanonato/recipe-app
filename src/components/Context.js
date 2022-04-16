import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext()


export const Context = ({ children }) => {

    const [recipe, setRecipe] = useState([])
    const [categories, setCategories] = useState([])

    const fetchRecipes = useCallback((searchTerm) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(res => {
                console.log(res.data)
            })
    }, [])

    return (
        <myContext.Provider value={{ fetchRecipes }}>{children}</myContext.Provider>
    )
}