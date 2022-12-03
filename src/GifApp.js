import React, { useState } from 'react'
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from './components/GifGrid'
export const GifApp = () => {


    // const categories = ["One Punch", "batman", "linux","windows"]

    const [categories, setcategories] = useState([""])



    // const add = (e) => {
    // // operador spread para copiar los datos y reescribir con el nuevo dato agregado
    //     setcategories([e.target.text])
    // }

    return (
        <>
            <div className='my-5 container'>

                <div className='bg-custom-1 text-white p-5 rounded-4'>

                    <h1 className='mb-3'>Hi!, Ander's Gif App</h1>
                    <p>Search a Gif for share:</p>
                    <AddCategory setcategories={setcategories} />
                    <br />

                    <div className='d-flex'>
                        <button className="btn btn-light rounded-3 btn-sm me-2" onClick={(e) => setcategories(['Happy'])}>😁 Happy</button>
                        <button className="btn btn-light rounded-3 btn-sm me-2" onClick={(e) => setcategories(['Sad'])}>😞 Sad</button>
                        <button className="btn btn-light rounded-3 btn-sm me-2" onClick={(e) => setcategories(['Worriet'])}>😕 Worriet</button>
                        <button className="btn btn-light rounded-3 btn-sm me-2" onClick={(e) => setcategories(['Scaret'])}> 😡 Angry</button>
                    </div>
                </div>

                <div className='contenedor'>

                    {
                        categories.map(category =>
                            <GifGrid
                                key={category}
                                category={category} />
                        )
                    }
                </div>

            </div>
        </>
    )
}
