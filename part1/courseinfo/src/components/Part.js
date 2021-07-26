import React from 'react'

function Part({ part }) {
    return (
        <>
            <p>{part.description} - {part.exercises}</p>
        </>
    )
}

export default Part
