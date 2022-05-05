import { useEffect, useState } from "react"
import {
  WiCloud,
  WiDaySunny,
  WiDayRain,
  WiDaySnow,
  WiDayLightning,
} from "react-icons/wi"
import "./icon.css"

function Icon({ weather }) {
  const [test, setTest] = useState()

  useEffect(() => {
    switch (weather) {
      case "Clouds":
        return setTest(<WiCloud />)
      case "Clear":
        return setTest(<WiDaySunny />)
      case "Rain":
        return setTest(<WiDayRain />)
      case "Snow":
        return setTest(<WiDaySnow />)
      case "Thunderstorm":
        return setTest(<WiDayLightning />)
      default:
        return setTest(<WiCloud />)
    }
  }, [weather])

  return <div className="icon">{test}</div>
}

export default Icon
