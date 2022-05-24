function CurrentWeather(prop1, prop2) {
  const lat = prop1.lat;
  const lon = prop2.lon; 

  const apikey = process.env.REACT_APP_API_KEY; 
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apikey}`
  let weather = document.getElementById("current-weather")

  // call a seperate api to get the actual weather and stuff using the lat and lon from before
  fetch(url)
  .then(res => res.json())
  .then(data => {
    let conditions = document.createElement('p')
    let temp = document.createElement('p')
    let feels = document.createElement('p')
    let humidity = document.createElement('p')

    conditions.innerHTML = "Conditions: " + data.current.weather[0].main
    weather.appendChild(conditions)

    temp.innerHTML = "Temperature: " + data.current.temp + '°F'
    weather.appendChild(temp)

    feels.innerHTML = "Feels like: " + data.current.feels_like + '°F'
    weather.appendChild(feels)

    humidity.innerHTML = "Humidity: " + data.current.humidity + "%"
    weather.appendChild(humidity)

  })
}

export default CurrentWeather