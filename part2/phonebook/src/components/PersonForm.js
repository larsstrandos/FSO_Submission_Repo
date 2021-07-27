import React from 'react'

function PersonForm({ newName, newNumber, handleNameChange, handleNumberChange, submitPerson }) {
    return (
        <form>
        <div>
          <div>name: <input value={newName} onChange={handleNameChange} /></div>
          <div>number: <input type='tel' value={newNumber} onChange={handleNumberChange} /></div>
        </div>
        <div>
          <button type="submit" onClick={submitPerson} >add</button>
        </div>
      </form>
    )
}

export default PersonForm
