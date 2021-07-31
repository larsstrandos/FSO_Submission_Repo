import React, { useEffect, useMemo, useState } from 'react'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [searchField, setSearchField] = useState('')

  // Set the inital state of Countries
  useEffect(() => {
    const getCountries = () => {
      fetch('https://restcountries.eu/rest/v2/all', {
        headers : { 
          'Accept': 'application/json'
         }
      }).then((response) => {
        return response.json()
      }).then((myJson) => {
        setCountries(myJson)
      })
    }
    getCountries()
  }, [])

  const handleSearchFieldChange = (event) => setSearchField(event.target.value)

  const handleFilterCountries = (x, y) =>  {
    const filtering = [...x]
    return filtering.filter(country => country.name.toLowerCase().includes(y.toLowerCase()))
  }

  const handleShowCountry = (event) => {
    console.log("test")
    return setSearchField(event.target.value)
  }

  const filteredCountries = useMemo(() => {
    return handleFilterCountries(countries, searchField)
  }, [searchField, countries])
  
  return (
    <div className="App">
      <div>find countries <input value={searchField} onChange={handleSearchFieldChange}/></div>
      <div>
        {filteredCountries.length > 10 ? <p>Too many matches, specify another filter</p> : < Countries filteredCountries={filteredCountries} handleShowCountry={handleShowCountry} />}
      </div>
    </div>
  );
}

export default App;