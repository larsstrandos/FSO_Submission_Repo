import React from 'react'

function Numbers({ filtered, handleDelete}) {
    return (
        <div>
        {filtered.map(data => <p key={data.name}>{data.name} {data.number}<button onClick={() => handleDelete(data.id)} >Delete</button></p>)}
      </div>
    )
}

export default Numbers
