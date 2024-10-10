/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Card.css"

export const Card = (props) => {
    return (
        <div className='Card'>
            <img src="https://picsum.photos/200/300" alt="random" style={{border:"2px solid black"}}/>
            <h1>{props.title}</h1>
            <p>{props.Description}</p>
        </div>
    )
}

export default Card
