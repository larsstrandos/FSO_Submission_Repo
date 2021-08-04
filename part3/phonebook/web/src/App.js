import React, { useState, useEffect, useRef } from 'react'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import * as contactServices from './services/contacts'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filtered, setFiltered] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ errorMessage, setErrorMessage ] = useState({
    errif: false,
    errTyp: 'error',
    errMsg: null
  })

  useEffect(() => {
    contactServices.getAll().then(persons => {
      setFiltered(persons)
      setPersons(persons)
    })
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
      name: newName.trim(),
      number: newNumber.trim()
    }
    if (personObject.name && personObject.number) {
      const person = persons.find(x => x.name === personObject.name)
      if (person && window.confirm(`${newName} already exists in phonelist, do you want to replace the number?`)) {
        const personUpdateObject = {...personObject, id:person.id}
        contactServices.updatePerson(personUpdateObject).then(res => {
          const newPersonsObject = persons.map(person => person.id === res.id ? res : person)
          setPersons(newPersonsObject)
          setFiltered(newPersonsObject)
          setNewName('')
          setNewNumber('')
          showNotification(`Updated ${res.name} number`, 'success')
        })
        return
      } else if (!person) {
        contactServices.create(personObject).then(res => {
          setPersons(persons.concat(res))
          setFiltered(persons.concat(res))
          setNewName('')
          setNewNumber('')
          showNotification(`Added ${res.name}`, 'success')
        }).catch(err => console.log(err))
        
        return
      }
    } else {
      showNotification(`You need to fill in both Name and Number!`, 'error')
      return
    }
  }

  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${person.name}?`)) {
      contactServices.deletePerson(id).then(() => {
        const newPersons = persons.filter(x => x.id !== id)
        setPersons(newPersons)
        setFiltered(newPersons)
        showNotification(`Deleted ${person.name}`, 'success')
      }).catch(err => console.log(err))
    }
  }

  const handlePersonFilter = (event) => {
    const people = [...persons]
    const filter =  people.filter(x => x.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFiltered(filter)
  }

  const errRef = useRef(errorMessage)
  const showNotification = (msg, type) => {
    const errObject = {
      errif: true,
      errTyp: type,
      errMsg: msg
    }
    setErrorMessage(errObject)
    setTimeout(() => {
      setErrorMessage(errRef)
    }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      < Notification errorMessage={errorMessage} />
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
      < Numbers
      filtered={filtered}
      handleDelete={handleDelete}
      />
    </div>
  )
}

export default App;
