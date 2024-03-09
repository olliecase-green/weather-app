import { useLocation } from "react-router-dom"

export default function ForecastedTemp() {
  const testLocation = useLocation()
  const { currentLocation } = testLocation.state || ""

  return <div>{currentLocation}</div>
}
