import React from 'react'
import Part from './Part'

function Content( { parts }) {
    const total = parts.map(data => {
        return data.exercises
      }).reduce((x, c) => {
        return x += c
      })

    return (
        <div>
            {parts.map((part) => <Part key={part.id} part={part} />)}
            <b>total of {total} exercises</b>
        </div>
    )
}

export default Content
