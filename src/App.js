import logo from "./logo.svg"
import "./App.css"
import InputField from "./components/InputField"
import DayBox from "./components/DayBox"
import { useState } from "react"

function App() {
  const [input, setInput] = useState("")
  const [coords, setCoords] = useState([51, -0.51])

  function handleChange(e) {
    const test = e.target.value
    setInput(test)
    console.log(input)
  }

  async function getCity(e) {
    e.preventDefault()
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=e9d3c70f90fe1862f93ba31a63e9a148`
    )
    const data = await response.json()
    const coords = [data[0].lat, data[0].lon]
    setCoords(coords)
  }

  return (
    <div className="App">
      <form onSubmit={getCity}>
        <input onChange={handleChange}></input>
      </form>
      <DayBox coords={coords} />
    </div>
  )
}

export default App
