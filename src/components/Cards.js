import axios from 'axios'
import React from 'react'


export default function PostList() {


    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        .then(response => {
            const canadian = response.data;
            console.log(canadian)
        })



    return (
        <div>Post List</div>
    )
}
