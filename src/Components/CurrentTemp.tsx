import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { locations } from "../Config/config"
import { CurrentTempState, NumberOrNull } from "../Config/types"
import { fetchLocationTemp } from "../Connectors/weatherApiConnector"
import "../CSS/CurrentTemp.css"

export default function CurrentTemp() {
  const [currentTempState, setCurrentTempState] = useState<CurrentTempState>({
    currentTemp: null,
    currentLocation: null,
    currentLongitude: null,
    currentLatitude: null,
    London: null,
    "New York": null,
    Mumbai: null,
    Sydney: null,
    Tokyo: null,
  })

  async function handleClick(location: string, lon: string, lat: string) {
    // Data does not exist in state
    if (!currentTempState[location]) {
      try {
        const data = await fetchLocationTemp(
          "https://weatherbit-v1-mashape.p.rapidapi.com/current",
          lon,
          lat
        )
        const { temp, city_name }: { temp: number; city_name: string } =
          data?.data?.data?.[0]
        setCurrentTempState((prevState) => ({
          ...prevState,
          currentTemp: temp,
          currentLocation: city_name,
          currentLongitude: lon,
          currentLatitude: lat,
          [location]: temp,
        }))
      } catch (e) {
        console.error(e)
        window.alert(
          "Something went wrong during the API call - please see console for more information. Is your API key correct?"
        )
      }
    } else {
      // Data is stored in state so no extra API call necessary
      const temp = currentTempState[location] as NumberOrNull
      setCurrentTempState((prevState) => ({
        ...prevState,
        currentTemp: temp,
        currentLocation: location,
        currentLongitude: lon,
        currentLatitude: lat,
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
    const { currentLocation, currentTemp, currentLongitude, currentLatitude } =
      currentTempState
    return currentLocation ? (
      <>
        <div className="current-temp-info">
          <div className="current-location">{currentLocation}</div>
          <div className="current-temp">{currentTemp}°</div>
        </div>
        <div className="current-link-container">
          <Link
            to={`/${currentLocation}/forecasted`}
            state={{
              currentLocation: currentLocation,
              currentLongitude: currentLongitude,
              currentLatitude: currentLatitude,
            }}
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
