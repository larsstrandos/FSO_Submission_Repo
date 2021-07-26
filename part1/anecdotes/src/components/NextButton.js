import React from 'react'

function NextButton({ next, text }) {
    return (
        <button onClick={next}>
            {text}
        </button>
    )
}

export default NextButton
