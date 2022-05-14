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
      let section = document.createElement('div')
      let img = document.createElement("img")

      let day = new Date(d.dt * 1000).getDate()
      let month = new Date(d.dt * 1000).getMonth() + 1
      let year = new Date(d.dt * 1000).getFullYear()

      let t = document.createTextNode(month + "/" + day + "/" + year + " ")
      let temp = document.createTextNode(d.temp.min + "°F/" + d.temp.max + '°F ')
      let cond = document.createTextNode(d.weather[0].main)
      img.setAttribute("src", `http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`)
      img.id = "forecast-icon"
      section.id = "forecast-info"

      section.appendChild(t)
      section.appendChild(temp)
      section.appendChild(cond)
      section.appendChild(img)

      forecast.appendChild(section)
    })
  })
}

export default Forecast