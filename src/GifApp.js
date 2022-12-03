import React, { useState } from 'react'
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from './components/GifGrid'
export const GifApp = () => {


    // const categories = ["One Punch", "batman", "linux","windows"]

    const [categories, setcategories] = useState([""])



    // const add = () => {
    // // operador spread para copiar los datos y reescribir con el nuevo dato agregado
    //     setcategories([...categories, "new"])
    // }

    return (
        <>
            <h1>Gif App</h1>
            <AddCategory setcategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    )
}
