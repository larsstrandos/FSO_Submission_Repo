import React from 'react'

function VoteButton({ vote, text }) {
    return (
        <button onClick={vote}>
            {text}
        </button>
    )
}

export default VoteButton
