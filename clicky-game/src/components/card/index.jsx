import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({ 
    handleClick, 
    id, 
    flipped, 
    back, 
    front, 
    height, 
    width,
 }) 
    {
    return(
    <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{
            width, height
        }}
        onclick={() => handleClick(id)}
    >

        <div className="flipper">
            <img
                style={{
                    height, width
                }}
                className={flipped ? 'front' : 'back'}
                src={flippped ? front : back}
            />
        </div>
    </div>
    )
}

Card.protoTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    back: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}