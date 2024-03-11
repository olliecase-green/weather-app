import { useState } from "react"
import { Link } from "react-router-dom"
import { locations, CurrentTempState, NumberOrNull } from "../Config/config"
import { fetchLocationTemp } from "../Functions/apiFunctions"
import "../CSS/CurrentTemp.css"

export default function CurrentTemp() {
  const [currentTempState, setCurrentTempState] = useState<CurrentTempState>({
    currentTemp: null,
    currentLocation: null,
    locationSelected: false,
    London: null,
    "New York": null,
    Mumbai: null,
    Sydney: null,
    Tokyo: null,
  })

  async function handleClick(location: string, lon: string, lat: string) {
    // Data does not exist in state
    if (!currentTempState[location]) {
      const data = await fetchLocationTemp(lon, lat)
      const { temp, city_name }: { temp: number; city_name: string } =
        data?.data?.data?.[0]
      setCurrentTempState((prevState) => ({
        ...prevState,
        currentTemp: temp,
        currentLocation: city_name,
        locationSelected: true,
        [location]: temp,
      }))
    } else {
      // Data is stored in state so no extra API call necessary
      const temp = currentTempState[location] as NumberOrNull
      setCurrentTempState((prevState) => ({
        ...prevState,
        currentTemp: temp,
        currentLocation: location,
      }))
    }
  }

  function createLocationButtons() {
    return locations.map((location) => {
      const { name, lon, lat } = location
      return (
        <button
          className="location-button"
          key={name}
          onClick={() => handleClick(name, lon, lat)}
        >
          {name}
        </button>
      )
    })
  }

  function displayTemperature() {
    const { currentLocation, currentTemp, locationSelected } = currentTempState
    return locationSelected ? (
      <>
        <div className="current-temp-info">
          <div className="current-location">{currentLocation}</div>
          <div className="current-temp">{currentTemp}°</div>
        </div>
        <div className="current-link-container">
          <Link
            to={`/${currentLocation}/forecasted`}
            state={{ currentLocation: currentLocation }}
          >
            16 day forecast
          </Link>
        </div>
      </>
    ) : (
      <div>Select a location to view the current temperature!</div>
    )
  }

  return (
    <div className="current-temp-container">
      <div className="location-buttons">{createLocationButtons()}</div>
      <div className="current-temp-info-container">{displayTemperature()}</div>
    </div>
  )
}
