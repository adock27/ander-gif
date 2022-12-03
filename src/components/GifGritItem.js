import React from 'react'

export const GritItem = ({ title, url }) => {

    // console.log('asds');
    // console.log(id, title, url);
    return (
        <div className='w-100 mb-3'>
            <div className='rounded-4 animate__animated animate__fadeIn' title={title}>
                <img className='w-100 rounded-3' src={url} alt={title} />
                <div className='text-capitalize small pt-1'>
                    {title}
                </div>
            </div>
        </div>
    )
}
