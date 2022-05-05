import "./App.css"
import DayBox from "./components/DayBox"
import { useState } from "react"
import FutureBoxes from "./components/DayBox/futureboxes/futureboxes"

function App() {
  const [input, setInput] = useState("")
  const [coords, setCoords] = useState([51.509865, -0.118092])
  const [days, setDays] = useState("")
  const daysArr = [1, 2, 3, 4, 5, 6, 7]

  function handleChange(e) {
    const test = e.target.value
    setInput(test)
    console.log(input)
  }

  async function getCity(e) {
    setInput("")

    e.preventDefault()
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=e9d3c70f90fe1862f93ba31a63e9a148`
    )

    const data = await response.json()
    const coords = [data[0].lat, data[0].lon]
    setCoords(coords)
    getData(data[0].lat, data[0].lon)
  }

  async function getData(lat, lon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={1}&appid=e9d3c70f90fe1862f93ba31a63e9a148`
    )
    const data = await response.json()
    setDays(data.daily)
    console.log(days)
  }

  return (
    <div className="App">
      <form onSubmit={getCity}>
        <input
          onChange={handleChange}
          value={input}
          placeholder="Type a city here"
        ></input>
        <button>Go!</button>
      </form>
      <DayBox coords={coords} />
      <div className="WeekBoxes">
        {daysArr.map((item, index) => {
          return (
            <FutureBoxes
              day={index + 1}
              weather={days == false ? null : days[index].weather[0].main}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
