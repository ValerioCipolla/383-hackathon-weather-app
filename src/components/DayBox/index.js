//e9d3c70f90fe1862f93ba31a63e9a148"
//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}

import React from "react"
import { useEffect, useState } from "react"
import "./style.css"
// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
const DayBox = ({ coords }) => {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState("")
  const [temp, setTemp] = useState("")

  const [lat, lon] = coords

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e9d3c70f90fe1862f93ba31a63e9a148`
      )
      const data = await res.json()
      console.log(data)
      setCity(data.name)
      setWeather(data.weather[0].main)
      setTemp(data.main.temp)
    }
    getWeather()
  }, [lon, lat])

  return (
    <div className="DayBox">
      <h1 className="IconCss">Icon</h1>
      <p id="City">City: {city}</p>
      <p id="Weather">Weather: {weather}</p>
      <p id="Temperature">Temperature (C): {parseInt(temp - 273.15)}</p>
    </div>
  )
}

export default DayBox
