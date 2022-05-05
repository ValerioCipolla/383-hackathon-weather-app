import styles from "./futureboxes.module.css"
import Icon from "./partials/icon/icon.js"

function FutureBoxes({ day, weather }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.day}>Day of week: {day}</h1>
      <Icon weather={weather} />
      <div className={styles.weather}>{weather}</div>
    </div>
  )
}

export default FutureBoxes
