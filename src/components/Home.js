import React, { useState, useCallback, useContext } from 'react'
import { myContext } from './Context'

export default function Home() {

    const [searchTerm, setSearchTerm] = useState("")

    const { fetchRecipes, recipe } = useContext(myContext)

    const fetchRecipeHandler = useCallback(() => {
        fetchRecipes(searchTerm)
    }, [searchTerm, fetchRecipes])


    return (
        <div style={{ height: "auto", minHeight: "100vh" }}>
            <div>
                <input type="text" placeholder='Find a Recipe' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={fetchRecipeHandler}>Search</button>
            </div>

            <div>
                {recipe ? recipe.map(recipe => (
                    <div key={recipe.idrecipe}>
                        <img src={recipe.strMealThumb} alt="#" />
                        <h4>{recipe.strMeal}</h4>
                    </div>
                )) : <h2>No recipe found!</h2>}
            </div>


        </div>
    )
}
