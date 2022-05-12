import React, { useState } from "react"
import Coordinates from "./coordinates";
import CurrentWeather from "./currentWeather"

function WeatherApp(){
     const [lat, setLat] = useState("...");
     const [lon, setLon] = useState("...");
     const [city, setCity] = useState("City");
     const [country, setCountry] = useState("Country");
     const [zipCode, setZipCode] = useState("22015");
     const [countryCode, setCountryCode] = useState("us");

    const [temp, setTemp] = useState()
    const [humidity, setHumidity] = useState()
    const [conditions, setConditions] = useState()
    const [feelsLike, setFeelsLike] = useState()

     const apikey = 'c2288a46c35d5fb2af6cd0ea6ad5d503' 

    const generateCoordinates=() => {
      console.log("entered")
      let label = document.getElementById("submit").innerHTML
      
      if(label === "Get Coordinates") {
        document.getElementById("submit").innerHTML = "Get Weather"
        fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apikey}`)
        .then(res => res.json())
        .then(data => {
          setLat(data.lat) // take the latitude of the first found location
          setLon(data.lon) // take the longitude of the first found location
          setCity(data.name)
          setCountry(data.country)
        })
        console.log({lat})
      } else {
          // call a seperate api to get the actual weather and stuff using the lat and lon from before
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apikey}`)
          .then(res => res.json())
          .then(data => {
          setConditions(data.current.weather[0].main)
          setHumidity(data.current.humidity)
          setTemp(data.current.temp)
          setFeelsLike(data.current.feels_like)
      })
      document.getElementById("submit").innerHTML = "Get Coordinates"
    }
  }

  return (
    <div className="weather-app">
      <div className="search-box">
          <input 
            type="text"
            required
            className="search-field"
            placeholder="Enter your zip code..."
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode} />
        </div>
        
        <div className="search-box">
          <input 
            type="text"
            required
            className="search-field"
            placeholder="Enter your country code..."
            onChange={(e) => setCountryCode(e.target.value)}
            value={countryCode} />
        </div>

        <button id="submit" onClick={generateCoordinates}>Get Coordinates</button>

        <div className="location">
          <p>{city}, {country}</p>
          {/* <Coordinates zipcode={zipCode} countrycode={countryCode} />  */}
        </div> 
        
        <div className="weather">
          <div className="metrics">
            <h1>Currently:</h1>

          </div>
          <div className="metrics">
            <h1>Forecast:</h1>
          </div>

        </div>
    </div>
  )}

export default WeatherApp;