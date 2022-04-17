import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const myContext = createContext()


export const Context = ({ children }) => {

    const [recipe, setRecipe] = useState([])
    const [categories, setCategories] = useState([])
    const [random, setRandom] = useState([])

    const fetchRecipes = useCallback((searchTerm) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(res => {
                console.log(res.data.meals)
                setRecipe(res.data.meals)
            })
    }, [])

    const fetchCategories = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => {
                console.log(res.data.categories)
                setCategories(res.data.categories)
            })
    }, [])

    const fetchRandom = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then(res => {
                console.log(res.data.meals)
                setRandom(res.data.meals)
            })
    }, [])

    return <myContext.Provider value={{ fetchRecipes, recipe, fetchCategories, categories, fetchRandom, random }}>{children}</myContext.Provider>

}