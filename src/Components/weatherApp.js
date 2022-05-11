import React, { useState } from "react"
import Coordinates from "./coordinates";
import CurrentWeather from "./currentWeather"

function WeatherApp(){
    const [lat, setLat] = useState("...");
    const [lon, setLon] = useState("...");
    const [city, setCity] = useState("City");
    const [country, setCountry] = useState("Country");
    const [zipCode, setZipCode] = useState("");
    const [countryCode, setCountryCode] = useState("");

    const [temp, setTemp] = useState()
    const [humidity, setHumidity] = useState()
    const [conditions, setConditions] = useState()
    const [feelsLike, setFeelsLike] = useState()

    const [daily, setDaily] = useState(); 

    const apikey = process.env.REACT_APP_api_key; 

    const generateCoordinates=() => {
        let label = document.getElementById("submit").innerHTML
        
        if(label === "Get Coordinates") {
            document.getElementById("submit").innerHTML = "Get Weather"

        } else {
            // call a seperate api to get the actual weather and stuff using the lat and lon from before
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apikey}`)
            .then(res => res.json())
            .then(data => {
            setConditions(data.current.weather[0].main)
            setHumidity(data.current.humidity)
            setTemp(data.current.temp)
            setFeelsLike(data.current.feels_like)
            setDaily(data.daily)
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

        <div className="location">
          <Coordinates zipcode={zipCode} countrycode={countryCode} /> 
        </div>
        
        <div className='weather'>
          <div className='metrics'>
            <h1>Currently:</h1>
            <CurrentWeather />
          </div>

          <div className='metrics'>
            <h1>Forecast:</h1>
            {/* {DailyWeather} */}
          </div>
        </div>
    </div>
  );
}

export default WeatherApp;