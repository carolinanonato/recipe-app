import React, { useEffect, useContext } from 'react'
import { myContext } from './Context'

const Categories = () => {

    const { fetchCategories, categories } = useContext(myContext)

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])


    return (
        <div style={{ paddingTop: "100px", background: "black", color: "white", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            {categories.map(category => (
                <div key={category.idCategory}>
                    <img style={{ width: "160px", marginRight: "8px" }} src={category.strCategoryThumb} alt="#" />
                    <h4 style={{ textAlign: "center" }}>{category.strCategory}</h4>
                </div>
            ))}



        </div>
    )
}

export default Categories