import React, { useEffect, useState } from 'react'

function Country( { country } ) {
    const [weather, setWeather] = useState()
    const [loading, setLoading] = useState(true)
    const weather_api_key = process.env.REACT_APP_WEATHER_STACK

    useEffect(() => {
        const getWeather = async() => {
            const url = `http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${country.capital}&units=m`

            const request = await fetch(url)
            setWeather(await request.json())
            setLoading(false)
        }
        getWeather()
    }, [country.capital, weather_api_key])
    if (!loading && weather) {
        return (
            <>
                <div>
                    <h2>{country.name}</h2>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                </div>
                <div>
                    <h2>Spoken languages</h2>
                    {country.languages.map(data => <p key={data.name}>{data.name}</p>)}
                </div>
                <img src={country.flag} style={{width: "30%"}} alt={country.name}/>
                 <div>
                    <h2>Weather in {country.capital}</h2>
                    <p><b>temperature:</b> {weather.current.temperature} Celcius</p>
                    <img src={weather.current.weather_icons} alt={weather.current.weather_descriptions}/>
                    <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
                </div>
            </>
        )
    } else {
        return <p>Loading</p>
    }
}

export default Country
