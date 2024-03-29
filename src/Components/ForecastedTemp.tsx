import { useLocation, useNavigate, Link } from "react-router-dom"
import { useState, useEffect, ChangeEvent } from "react"
import {
  ForecastedTempState,
  ForecastWeatherDay,
  LocationState,
  NumberOrNull,
} from "../Config/types"
import { fetchLocationTemp } from "../Connectors/weatherApiConnector"
import "../CSS/ForecastedTemp.css"

export default function ForecastedTemp() {
  const [forecastedTempState, setForecastedTempState] =
    useState<ForecastedTempState>({
      minTemp: null,
      maxTemp: null,
      currentLocation: null,
      forecastData: null,
      currentLongitude: null,
      currentLatitude: null,
    })
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const {
        currentLocation,
        currentLongitude,
        currentLatitude,
      }: LocationState = location.state

      setForecastedTempState((prevState) => ({
        ...prevState,
        currentLocation: currentLocation,
        currentLongitude: currentLongitude,
        currentLatitude: currentLatitude,
      }))
    } catch (e) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    async function getLocationData() {
      try {
        if (
          !forecastedTempState.currentLatitude ||
          !forecastedTempState.currentLongitude
        )
          return

        const forecastDataFullObj = await fetchLocationTemp(
          "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily",
          forecastedTempState.currentLongitude,
          forecastedTempState.currentLatitude
        )
        const forecastData: ForecastWeatherDay[] =
          forecastDataFullObj?.data?.data

        setForecastedTempState((prevState) => ({
          ...prevState,
          forecastData: forecastData,
        }))
      } catch (e) {
        console.error(e)
      }
    }
    getLocationData()
  }, [
    forecastedTempState.currentLatitude,
    forecastedTempState.currentLongitude,
  ])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const tempFloat = parseFloat(value)
    const temp = isNaN(tempFloat) ? null : tempFloat
    setForecastedTempState((prevState) => ({
      ...prevState,
      [name]: temp,
    }))
  }

  function displayForecast() {
    const forecastedData = forecastedTempState.forecastData
    if (forecastedData) {
      const mappedData = forecastedData.map((item, index) => {
        const { temp } = item
        const { minTemp, maxTemp } = forecastedTempState
        const aboveMinTemp = minTemp === null || temp > minTemp
        const belowMaxTemp = maxTemp === null || temp < maxTemp
        if (!aboveMinTemp || !belowMaxTemp) return null
        return (
          <div key={item.ts} className="temp-info">
            <div>Day {index + 1}</div>
            <div>{item.temp.toFixed(1)}°</div>
          </div>
        )
      })

      const daysInTempRange = mappedData.some((data) => data !== null)
      return daysInTempRange ? (
        mappedData
      ) : (
        <div>No days in temperature range!</div>
      )
    }
  }

  function displayInputText(value: NumberOrNull) {
    return value !== null ? value.toString() : ""
  }

  function displayErrorMessage() {
    const { minTemp, maxTemp } = forecastedTempState
    if (!minTemp || !maxTemp) return
    if (minTemp > maxTemp) return <>Invalid range!</>
  }

  return (
    <div>
      <div className="forecast-title">
        {forecastedTempState.currentLocation}
      </div>
      <div className="main-container">
        <div className="forecast-container">
          <div className="forecast-container-title">Next 16 days:</div>
          <div>{displayForecast()}</div>
        </div>
        <div className="input-container">
          <div className="input-description">
            Create a temperature range using the filters below.
          </div>
          <div className="min-input-container">
            <div>Min. temperature</div>
            <input
              className="temp-input"
              type="number"
              name="minTemp"
              value={displayInputText(forecastedTempState.minTemp)}
              onChange={handleInputChange}
            />
          </div>
          <div className="max-input-container">
            <div>Max. temperature</div>
            <input
              className="temp-input"
              type="number"
              name="maxTemp"
              value={displayInputText(forecastedTempState.maxTemp)}
              onChange={handleInputChange}
            />
          </div>
          <div className="error">{displayErrorMessage()}</div>
          <div className="forecast-link-container">
            <Link to={"/"}>View other cities</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
