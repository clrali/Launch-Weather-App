import React, { useState } from "react"
import CurrentWeather from "./currentWeather"
import GetNews from "./news";
import Forecast from "./forecast";

function WeatherApp(){
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [city, setCity] = useState("City");
    const [country, setCountry] = useState("Country");
    const [zipCode, setZipCode] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const apikey = process.env.REACT_APP_API_KEY 

    const generateCoordinates=() => {

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
      } else {
        CurrentWeather({lat}, {lon})
        Forecast({lat}, {lon})
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
        <p>Latitude is: {lat}°</p>
        <p>Longitude is: {lon}°</p>
      </div> 
        
      <div id="current-weather">
        <h1>Currently:</h1>
      </div>

      <div id="forecast">
        <h1>Forecast:</h1>
      </div>

      <div className="articles">
        <div id="headlines"> 
          <button onClick={GetNews}>Click here for the latest NYT headlines: </button>
        </div>
      </div>

    </div>
  )}

export default WeatherApp;