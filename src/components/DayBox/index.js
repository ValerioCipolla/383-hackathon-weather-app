//e9d3c70f90fe1862f93ba31a63e9a148"
//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}

import React from "react"
import { useEffect, useState } from "react"
import "./style.css"
import Icon from "./partials/icon/icon.js"

// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
const DayBox = ({ coords }) => {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState("")
  const [description, setDescription] = useState("")
  const [temp, setTemp] = useState(0)
  const [sunrise, setSunrise] = useState(0)
  const [sunset, setSunset] = useState(0)
  const [feelsLike, setFeelsLike] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)

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
      setHumidity(data.main.humidity)
      setDescription(data.weather[0].description)
      setFeelsLike(data.main.feels_like)
      setWindSpeed(data.wind.speed)
      setSunrise(new Date(data.sys.sunrise * 1000).toString().slice(15, 24))
      setSunset(new Date(data.sys.sunset * 1000).toString().slice(15, 24))
    }
    getWeather()
  }, [lon, lat])

  return (
    <div className="DayBox">
      <div className="flexRow">
        <h2>{city}</h2>
        <Icon weather={weather} />
      </div>
      <div className="flexRow">
        <h4>
          {weather} - {description}
        </h4>
        <h4>{parseInt(temp - 273.15)}° C</h4>
      </div>
      <div className="flexCenter">
        <p className="light">Feels like: {parseInt(feelsLike - 273.15)}° C</p>
        <p className="dark">Humidity: {humidity}%</p>
        <p classaName="light">Wind: {windSpeed} m/s</p>
        <p className="dark">Today's sunrise: {sunrise}</p>
        <p className="light">Today's sunset: {sunset}</p>
      </div>
    </div>
  )
}

export default DayBox
