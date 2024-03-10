import { useState } from "react"
import { Link } from "react-router-dom"
import "../CSS/CurrentTemp.css"

export default function CurrentTemp() {
  // CONSIDER HOW TO INITIALISE CURRENTTEMP AND CURRENTLOCATION
  const [currentTemp, setCurrentTemp] = useState<number>(0)
  const [currentLocation, setCurrentLocation] = useState<string>("London")

  function handleClick(location: string) {
    const { temp, city_name }: { temp: number; city_name: string } =
      data[location].data[0]
    setCurrentTemp(temp)
    setCurrentLocation(city_name)
  }

  function createLocationButtons() {
    const locations = ["London", "New York", "Mumbai", "Sydney", "Tokyo"]
    return locations.map((location) => {
      return (
        <button
          className="location-button"
          key={location}
          onClick={() => handleClick(location)}
        >
          {location}
        </button>
      )
    })
  }

  return (
    <div className="current-temp-container">
      <div className="location-buttons">{createLocationButtons()}</div>
      <div className="current-temp-info-container">
        <div className="current-temp-info">
          <div className="current-location">{currentLocation}</div>
          <div className="current-temp">{currentTemp}°</div>
        </div>
        <div className="link-container">
          <Link
            to={`/${currentLocation}/forecasted`}
            state={{ currentLocation: currentLocation }}
          >
            16 day forecast
          </Link>
        </div>
      </div>
    </div>
  )
}

// TEST DATA
interface Data {
  [key: string]: any
}

const data: Data = {
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
