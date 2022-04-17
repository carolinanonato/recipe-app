import React, { useState, useCallback, useContext } from 'react'
import { myContext } from './Context'
import { Link } from 'react-router-dom';

export default function Home() {


    const [searchTerm, setSearchTerm] = useState("")

    const { fetchRecipes, recipe } = useContext(myContext)

    const fetchRecipeHandler = useCallback(() => {
        fetchRecipes(searchTerm)
    }, [searchTerm, fetchRecipes])


    return (
        <div style={{ height: "auto", minHeight: "100vh", background: "black", color: "white", width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div style={{ paddingTop: "10px", display: "flex", alignItens: "center", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginBottom: "30px" }}>
                <input style={{ padding: "10px", outlineColor: "turquoise", borderRadius: "5px" }} type="text" placeholder='Find a Recipe' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button style={{ marginLeft: "5px", borderRadius: "5px", background: "turquoise", border: "none", fontWeight: "bold" }} onClick={fetchRecipeHandler}>Search</button>
            </div>

            <div style={{ display: "flex", alignItens: "center", justifyContent: "space-evenly", flexDirection: "row", flexWrap: "wrap" }}>
                {recipe ? recipe.map(recipe => (
                    <div style={{ textAlign: "center" }} key={recipe.idrecipe}>
                        <img style={{ width: "250px", borderRadius: "5px" }} src={recipe.strMealThumb} alt="#" />
                        <h4>{recipe.strMeal}</h4>
                    </div>

                )) : <h2>No recipe found!</h2>}
            </div>


        </div>
    )
}
