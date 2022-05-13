import React, { useState, useEffect } from 'react'

function CurrentWeather(props) {

  // const lat = props.lat;
  // const lon = props.lon; 

  const lat = 38.7894
  const lon = -77.2818

  const [weather, setWeather] = useState([])
  const apikey = 'f22ab97af3dd7eaa0c46357a0a9dcc53'; 

  useEffect(() => {
    // call a seperate api to get the actual weather and stuff using the lat and lon from before
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apikey}`)
    .then(res => res.json())
    .then(data => {
      setWeather([...weather, {
        temp: data.current.temp,
        feels: data.current.feels_like, 
        conditions: data.current.weather[0].main,
        humidity: data.current.humidity
      }])
  }, [lat, lon])

  console.log({weather})
  })

  return (
    <div>
      <p>Temperature: {weather.temp}°F</p>
      <p>Feels Like: {weather.feels}°F </p>
      <p>Conditions: {weather.conditions} </p>
      <p>Humidity: {weather.humidity} </p>

    </div>
  )
}

export default CurrentWeather