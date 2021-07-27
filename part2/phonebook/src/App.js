import React, { useState } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ filtered, setFiltered] = useState(persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const submitPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const person = persons.find(x => x.name === personObject.name)
    if (person) {
      return alert(`${newName} already exists in phonelist`)
    }
    setPersons(persons.concat(personObject))
    setFiltered(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonFilter = (event) => {
    const people = [...persons]
    const filter =  people.filter(x => String(x.name.toLowerCase()).startsWith(String(event.target.value.toLowerCase())))
    setFiltered(filter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter shown with <input onChange={handlePersonFilter} /></div>
      <h2>Add a new</h2>
      < PersonForm
      handleNumberChange={handleNumberChange}
      handleNameChange={handleNameChange}
      newName={newName}
      newNumber={newNumber}
      submitPerson={submitPerson}
      />
      <h2>Numbers</h2>
      < Numbers filtered={filtered}/>
    </div>
  )
}

export default App;
