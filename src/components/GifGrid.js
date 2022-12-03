import React from 'react'
import { GritItem } from './GifGritItem';
// import { getGifs } from '../helpers/getGifs';
import { useFecthGifs } from '../hooks/useFechGifs';

export const GifGrid = ({ category }) => {

    // const [count, setcount] = useState(0)

    // const [images, setImages] = useState([]);

    // renombrar la data en la reestructuracion 
    const { data: images, loading } = useFecthGifs(category);




    // para evitar que se vuelva ejecutar el render del componente 
    // useEffect(() => {
    //     getGifs(category).then(setImages)
    // }, [category])






    return (
        <>
            <h3>{category}</h3>
            {/* operador arpersand */}
            {loading && <p className='animate__animated animate__flash'> Loading...</p>}

            <div className='card-grid'>
                {images.map((img) =>
                    <GritItem key={img.id} {...img} />
                )}
            </div>
        </>
    )
}
