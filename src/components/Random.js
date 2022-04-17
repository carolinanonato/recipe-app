import React, { useContext, useEffect } from 'react'
import { myContext } from './Context'

function Random() {

    const { fetchRandom, random } = useContext(myContext)

    useEffect(() => {
        fetchRandom()
    }, [fetchRandom])


    return (
        <div style={{ background: "black", color: "white" }}>
            {random.map(meal => (
                <div style={{ paddingTop: "80px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} key={meal.idMeal}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <button onClick={fetchRandom} style={{ margin: "auto", borderRadius: "5px", background: "turquoise", border: "none", fontWeight: "bold", height: "30px", marginBottom: "30px", width: "200px", cursor: "pointer" }}>Generate Recipe</button>
                        <img style={{ width: "200px", margin: "auto" }} src={meal.strMealThumb} alt="" />
                        <h2 style={{ textAlign: "center" }}>{meal.strMeal}</h2>

                    </div>
                    <div>
                        <h4 style={{ textAlign: "center" }}> Instructions</h4>
                        <p style={{ marginBottom: "0", textAlign: "center", marginLeft: "40px", marginRight: "40px" }}>{meal.strInstructions}</p>
                    </div>
                </div>
            ))
            }


        </div >
    )
}

export default Random