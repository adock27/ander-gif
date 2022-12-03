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
            <div className='m-3'>
                <span className="badge text-primary bg-primary bg-opacity-25 border  border-primary mb-3"><i className="bi bi-tag-fill me-1"></i>{category}</span>
                {/* operador arpersand */}
                {loading && <p className='animate__animated animate__flash'> Loading...</p>}

                <div className='row-masonry' >
                    {images.map((img) =>
                        <GritItem key={img.id} {...img} />
                    )}
                </div>
            </div>
        </>
    )
}
