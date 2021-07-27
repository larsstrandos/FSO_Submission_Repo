import React from 'react'

function Numbers({ filtered }) {
    return (
        <div>
        {filtered.map(data => <p key={data.name}>{data.name} {data.number}</p>)}
      </div>
    )
}

export default Numbers
