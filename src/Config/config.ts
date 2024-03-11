// MISC
export const locations = [
  {
    name: "London",
    lat: "51.5072",
    lon: "-0.1276",
  },
  {
    name: "New York",
    lat: "40.7128",
    lon: "-74.006",
  },
  {
    name: "Mumbai",
    lat: "19.076",
    lon: "72.8777",
  },
  {
    name: "Sydney",
    lat: "33.8688",
    lon: "151.2093",
  },
  {
    name: "Tokyo",
    lat: "35.6764",
    lon: "139.65",
  },
]

// TYPES
export type NumberOrNull = number | null
type StringOrNull = string | null

// INTERFACES
export interface CurrentTempState {
  currentTemp: NumberOrNull
  currentLocation: StringOrNull
  locationSelected: boolean
  [key: string]: number | string | null | boolean
}

export interface ForecastedTempState {
  minTemp: NumberOrNull
  maxTemp: NumberOrNull
  currentLocation: StringOrNull
}
