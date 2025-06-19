import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Jokes from './joker'
 import WeatherApp from './weather'

function App() {
 

  return (
    <div className="weather-app-container">
      <h3 className="heading">Welcome to weather app</h3>
      <WeatherApp />
    </div>
  )
}

export default App
