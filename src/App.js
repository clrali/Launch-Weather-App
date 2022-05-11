import './App.css';
import React, { useState } from "react"
import WeatherApp from './Components/weatherApp'

// questions to ask:
// how do you split this into different files and call functions between each other ?? ik something 
// to do with props.
// how do you loop through the json file to pull out the data for each day? kind of have an idea
// as to how to pull the data, but don't know how to render it onto the site 

function App() {
  return (
  <div className='App'>
      <WeatherApp />
  </div>
  )}

export default App;
