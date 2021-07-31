import React from 'react'
import Country from './Country'

function Countries({filteredCountries, handleShowCountry }) {
    return (
        <div>
            {filteredCountries.length > 1 ? filteredCountries.map((data) => <p key={data.numericCode}>{data.name}<button onClick={handleShowCountry} value={data.name}>Show</button></p>) : filteredCountries.length === 0 ? <p>There is no results matching the filter.</p> : < Country country={filteredCountries[0]} />}
        </div>
    )
}

export default Countries
