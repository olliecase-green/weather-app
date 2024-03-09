import { useState } from "react"

export default function CurrentTemp() {
  const [currentTemp, setCurrentTemp] = useState<number>(0)
  const [currentLocation, setCurrentLocation] = useState<string>("")

  function handleClick(location: string) {
    setCurrentTemp(data[location].data[0].temp)
    setCurrentLocation(data[location].data[0].city_name)
  }

  function clickThroughToLocation(location: string) {
    console.log({ location })
  }

  function createLocationButtons() {
    const locations = ["London", "New York", "Mumbai", "Sydney", "Tokyo"]
    return locations.map((location) => {
      return (
        <button key={location} onClick={() => handleClick(location)}>
          {location}
        </button>
      )
    })
  }

  return (
    <div>
      <div>{createLocationButtons()}</div>
      <div className="current-temp-container">
        <div>{currentLocation}</div>
        <div>{currentTemp}</div>
        <button onClick={() => clickThroughToLocation(currentLocation)}>
          Click for 16 day forecast
        </button>
      </div>
    </div>
  )
}

// TEST DATA
interface Data {
  [key: string]: any
}

export const data: Data = {
  London: {
    count: 1,
    data: [
      {
        app_temp: 12.8,
        aqi: 63,
        city_name: "London",
        clouds: 88,
        country_code: "GB",
        datetime: "2024-03-09:13",
        dewpt: 6.9,
        dhi: 99.88,
        dni: 818.95,
        elev_angle: 33.32,
        ghi: 543.16,
        gust: 10.29,
        h_angle: 15,
        lat: 51.5074,
        lon: -0.1278,
        ob_time: "2024-03-09 13:24",
        pod: "d",
        precip: 0,
        pres: 991.5,
        rh: 65,
        slp: 993.5,
        snow: 0,
        solar_rad: 261.8,
        sources: ["analysis", "AV975", "radar", "satellite"],
        state_code: "ENG",
        station: "AV975",
        sunrise: "06:24",
        sunset: "17:55",
        temp: 12.8,
        timezone: "Europe/London",
        ts: 1709990654,
        uv: 1.459841,
        vis: 16,
        weather: {
          code: 803,
          icon: "c03d",
          description: "Broken clouds",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 95,
        wind_spd: 6.69,
      },
    ],
  },
  "New York": {
    count: 1,
    data: [
      {
        app_temp: 12.8,
        aqi: 63,
        city_name: "New York",
        clouds: 88,
        country_code: "GB",
        datetime: "2024-03-09:13",
        dewpt: 6.9,
        dhi: 99.88,
        dni: 818.95,
        elev_angle: 33.32,
        ghi: 543.16,
        gust: 10.29,
        h_angle: 15,
        lat: 51.5074,
        lon: -0.1278,
        ob_time: "2024-03-09 13:24",
        pod: "d",
        precip: 0,
        pres: 991.5,
        rh: 65,
        slp: 993.5,
        snow: 0,
        solar_rad: 261.8,
        sources: ["analysis", "AV975", "radar", "satellite"],
        state_code: "ENG",
        station: "AV975",
        sunrise: "06:24",
        sunset: "17:55",
        temp: 20,
        timezone: "Europe/London",
        ts: 1709990654,
        uv: 1.459841,
        vis: 16,
        weather: {
          code: 803,
          icon: "c03d",
          description: "Broken clouds",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 95,
        wind_spd: 6.69,
      },
    ],
  },
  Mumbai: {
    count: 1,
    data: [
      {
        app_temp: 12.8,
        aqi: 63,
        city_name: "Mumbai",
        clouds: 88,
        country_code: "GB",
        datetime: "2024-03-09:13",
        dewpt: 6.9,
        dhi: 99.88,
        dni: 818.95,
        elev_angle: 33.32,
        ghi: 543.16,
        gust: 10.29,
        h_angle: 15,
        lat: 51.5074,
        lon: -0.1278,
        ob_time: "2024-03-09 13:24",
        pod: "d",
        precip: 0,
        pres: 991.5,
        rh: 65,
        slp: 993.5,
        snow: 0,
        solar_rad: 261.8,
        sources: ["analysis", "AV975", "radar", "satellite"],
        state_code: "ENG",
        station: "AV975",
        sunrise: "06:24",
        sunset: "17:55",
        temp: 130,
        timezone: "Europe/London",
        ts: 1709990654,
        uv: 1.459841,
        vis: 16,
        weather: {
          code: 803,
          icon: "c03d",
          description: "Broken clouds",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 95,
        wind_spd: 6.69,
      },
    ],
  },
  Sydney: {
    count: 1,
    data: [
      {
        app_temp: 12.8,
        aqi: 63,
        city_name: "Sydney",
        clouds: 88,
        country_code: "GB",
        datetime: "2024-03-09:13",
        dewpt: 6.9,
        dhi: 99.88,
        dni: 818.95,
        elev_angle: 33.32,
        ghi: 543.16,
        gust: 10.29,
        h_angle: 15,
        lat: 51.5074,
        lon: -0.1278,
        ob_time: "2024-03-09 13:24",
        pod: "d",
        precip: 0,
        pres: 991.5,
        rh: 65,
        slp: 993.5,
        snow: 0,
        solar_rad: 261.8,
        sources: ["analysis", "AV975", "radar", "satellite"],
        state_code: "ENG",
        station: "AV975",
        sunrise: "06:24",
        sunset: "17:55",
        temp: 30,
        timezone: "Europe/London",
        ts: 1709990654,
        uv: 1.459841,
        vis: 16,
        weather: {
          code: 803,
          icon: "c03d",
          description: "Broken clouds",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 95,
        wind_spd: 6.69,
      },
    ],
  },
  Tokyo: {
    count: 1,
    data: [
      {
        app_temp: 12.8,
        aqi: 63,
        city_name: "Tokyo",
        clouds: 88,
        country_code: "GB",
        datetime: "2024-03-09:13",
        dewpt: 6.9,
        dhi: 99.88,
        dni: 818.95,
        elev_angle: 33.32,
        ghi: 543.16,
        gust: 10.29,
        h_angle: 15,
        lat: 51.5074,
        lon: -0.1278,
        ob_time: "2024-03-09 13:24",
        pod: "d",
        precip: 0,
        pres: 991.5,
        rh: 65,
        slp: 993.5,
        snow: 0,
        solar_rad: 261.8,
        sources: ["analysis", "AV975", "radar", "satellite"],
        state_code: "ENG",
        station: "AV975",
        sunrise: "06:24",
        sunset: "17:55",
        temp: 25,
        timezone: "Europe/London",
        ts: 1709990654,
        uv: 1.459841,
        vis: 16,
        weather: {
          code: 803,
          icon: "c03d",
          description: "Broken clouds",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 95,
        wind_spd: 6.69,
      },
    ],
  },
}
