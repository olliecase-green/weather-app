// MISC
export const locations = ["London", "New York", "Mumbai", "Sydney", "Tokyo"]
export const latsAndLongs = {
  London: {
    lat: 51.5072,
    long: -0.1276,
  },
  "New York": {
    lat: 40.7128,
    long: -74.006,
  },
  Mumbai: {
    lat: 19.076,
    long: 72.8777,
  },
  Sydney: {
    lat: 33.8688,
    long: 151.2093,
  },
  Tokyo: {
    lat: 35.6764,
    long: 139.65,
  },
}

// TYPES
type numberOrNull = number | null
type stringOrNull = string | null

// INTERFACES
export interface CurrentTempState {
  currentTemp: numberOrNull
  currentLocation: stringOrNull
  locationSelected: boolean
  locations: string[]
}

export interface ForecastedTempState {
  minTemp: numberOrNull
  maxTemp: numberOrNull
  currentLocation: stringOrNull
}
