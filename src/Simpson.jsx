import React from 'react'

export const Simpson = ({simpson}) => {
    return (
        <div>
        <h1 style={{fontSize: "20px"}}>quote : {simpson.quote}</h1>
        <h2 style={{fontSize: "15px"}}>character : {simpson.character}</h2>
        <img src={simpson.image} alt="" />
        </div>

    )
    
}