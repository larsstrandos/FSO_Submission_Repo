import React from 'react'

function Display({ title, text, votes }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
            <p>has {votes} votes</p>
        </div>
    )
}

export default Display
