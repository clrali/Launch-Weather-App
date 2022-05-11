import React, { useState } from 'react'

function CurrentWeather(props) {

  // const lat = props.lat;
  // const lon = props.lon; 

  const lat = 38.7894
  const lon = -77.2818

  const [weather, setWeather] = useState([])
  const apikey = process.env.REACT_APP_api_key; 

  // call a seperate api to get the actual weather and stuff using the lat and lon from before
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apikey}`)
  .then(res => res.json())
  .then(data => {
    setWeather([...weather, {
      temp: data.current.temp,
      feels: data.current.feels_like, 
      conditions: data.current.weather[0].main,
      humidity: data.current.humidity,
    }])
    console.log(weather)
  })

  return (
    <div>
      <p>Temperature: {weather.temp} </p>
      <p>Feels Like: {weather.feels} </p>
      <p>Conditions are: {weather.conditions} </p>
      <p>Humidity is: {weather.humidity} </p>

    </div>
  )
}

export default CurrentWeather