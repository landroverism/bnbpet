import React from 'react'
import './Card.css'

function Card({ src, title, distance}) {
  return (
    <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{distance}</h4>
            </div>
        </div>
  )
}

export default Card