import {useState, React, useEffect} from 'react'

function Coordinates(props) {
  const zipCode = props.zipcode
  const countryCode = props.countrycode

  const [lat, setLat] = useState("...")
  const [lon, setLon] = useState("...")
  const [city, setCity] = useState("City");
  const [country, setCountry] = useState("Country")

  const apikey = 'c2288a46c35d5fb2af6cd0ea6ad5d503'; 

  useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apikey}`)
    .then(res => res.json())
    .then(data => {
      setLat(data.lat) // take the latitude of the first found location
      setLon(data.lon) // take the longitude of the first found location
      setCity(data.name)
      setCountry(data.country)
    })
  }, [zipCode, countryCode])
  
  return(
    <div>
      <p>{city}, {country}</p>
      <p>Latitude is {lat}</p>
      <p>Longitude is {lon}</p>
    </div>
  )
}

export default Coordinates