import { useEffect, useState } from "react"
import { WiCloud, WiDaySunny, WiDayRain, WiDaySnow } from "react-icons/wi"

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
      default:
        return setTest(<WiCloud />)
    }
  }, [weather])

  return <div>{test}</div>
}

export default Icon
