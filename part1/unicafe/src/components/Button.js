import React from 'react'

function Button({ handleClick, text }) {
    return (
        <button onClick={ handleClick }>
            { text }
        </button>
    )
}

export default Button
