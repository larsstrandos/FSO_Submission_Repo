import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filtered, setFiltered] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  useEffect(() => {
    const getData = () => {
      fetch('http://127.0.0.1:3001/persons', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }).then((response) => {
        return response.json()
      }).then((myJson) => {
        setPersons(myJson)
        setFiltered(myJson)
      })
    }

    getData()
  }, [])

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
    const filter =  people.filter(x => String(x.name.toLowerCase()).includes(String(event.target.value.toLowerCase())))
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
