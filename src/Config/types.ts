// TYPES
export type NumberOrNull = number | null
type StringOrNull = string | null

// INTERFACES
export interface CurrentTempState {
  currentTemp: NumberOrNull
  currentLocation: StringOrNull
  currentLongitude: StringOrNull
  currentLatitude: StringOrNull
  [key: string]: number | string | null
}

export interface ForecastedTempState {
  minTemp: NumberOrNull
  maxTemp: NumberOrNull
  currentLocation: StringOrNull
  forecastData: ForecastWeatherDay[] | null
  currentLongitude: StringOrNull
  currentLatitude: StringOrNull
}

export interface LocationState {
  currentLocation: string
  currentLongitude: string
  currentLatitude: string
}

export interface ForecastWeatherDay {
  app_max_temp: number
  app_min_temp: number
  clouds: number
  clouds_hi: number
  clouds_low: number
  clouds_mid: number
  datetime: string
  dewpt: number
  high_temp: number
  low_temp: number
  max_dhi: null | number
  max_temp: number
  min_temp: number
  moon_phase: number
  moon_phase_lunation: number
  moonrise_ts: number
  moonset_ts: number
  ozone: number
  pop: number
  precip: number
  pres: number
  rh: number
  slp: number
  snow: number
  snow_depth: number
  sunrise_ts: number
  sunset_ts: number
  temp: number
  ts: number
  uv: number
  valid_date: string
  vis: number
  weather: {
    description: string
    code: number
    icon: string
  }
  wind_cdir: string
  wind_cdir_full: string
  wind_dir: number
  wind_gust_spd: number
  wind_spd: number
}
