import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({
    handleClick,
    id,
    type,
    flipped,
    solved,
    disabled,
    height,
    width,
}) {
    return (
        <div
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width, 
                height,
            }}
            onclick={() => disabled ? null : handleClick(id)}
        >

            <div className="flipper">
                <img
                    style={{
                        height,
                        width,
                    }}
                    className={flipped ? 'front' : 'back'}
                    src={flipped || solved ? `/img/${type}.png` : `/img/back.png`}
                />
            </div>
        </div>
    )
}

Card.protoTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    disabled: PropTypes.string.isRequired,
}