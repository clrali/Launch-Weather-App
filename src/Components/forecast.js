import React from 'react'

function Forecast(prop1, prop2) {
  const lat = prop1.lat
  const lon = prop2.lon
  const apikey = '3eabc5a69085757838826afc51201a7c'

  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${apikey}`
  let forecast = document.getElementById("forecast")

  fetch(url)
  .then(res => res.json())
  .then(data => {
    data.daily.slice(1,8).map(d => {
      let t = document.createElement('p')
      let temp = document.createElement('p')
      let cond = document.createElement('p')

      let day = new Date(d.dt * 1000).getDate()
      let month = new Date(d.dt * 1000).getMonth() + 1
      let year = new Date(d.dt * 1000).getFullYear()

      t.innerHTML = month + "/" + day + "/" + year
      temp.innerHTML = d.temp.min + "°F/" + d.temp.max + '°F'
      cond.innerHTML = d.weather[0].main

      forecast.appendChild(t)
      forecast.appendChild(temp)
      forecast.appendChild(cond)
    })
  })
}

export default Forecast