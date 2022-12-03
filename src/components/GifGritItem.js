import React from 'react'

export const GritItem = ({ title, url }) => {

    // console.log('asds');
    // console.log(id, title, url);
    return (
        <div className='card animate__animated animate__fadeIn' title={title}>
            <img src={url} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}
