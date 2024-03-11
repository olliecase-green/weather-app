import { useLocation } from "react-router-dom"
import { useState, ChangeEvent } from "react"
import "../CSS/ForecastedTemp.css"

interface ForecastedTempState {
  minTemp: number | null
  maxTemp: number | null
}

export default function ForecastedTemp() {
  const [inputTemps, setInputTemps] = useState<ForecastedTempState>({
    minTemp: null,
    maxTemp: null,
  })

  // WORK OUT HOW TO STORE THESE
  const location = useLocation()
  const { currentLocation }: { currentLocation: string } = location.state

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const tempFloat = parseFloat(value)
    const temp = isNaN(tempFloat) ? null : tempFloat
    setInputTemps((prevState) => ({
      ...prevState,
      [name]: temp,
    }))
  }

  function displayForecast() {
    // UPDATE ANY ARRAY TYPE
    const forecastedData: any[] = data["London"].data
    const mappedData = forecastedData.map((item, index) => {
      const { temp }: { temp: number } = item
      const { minTemp, maxTemp } = inputTemps
      const aboveMinTemp = minTemp === null || temp > minTemp
      const belowMaxTemp = maxTemp === null || temp < maxTemp

      if (!aboveMinTemp || !belowMaxTemp) return null

      return (
        <div className="temp-info">
          <div>Day {index + 1}</div>
          <div>{item.temp}°</div>
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

  function displayInputText(value: number | null) {
    return value !== null ? value.toString() : ""
  }

  return (
    <div>
      <div className="forecast-title">{currentLocation}</div>
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
              value={displayInputText(inputTemps.minTemp)}
              onChange={handleInputChange}
            />
          </div>
          <div className="max-input-container">
            <div>Max. temperature</div>
            <input
              className="temp-input"
              type="number"
              name="maxTemp"
              value={displayInputText(inputTemps.maxTemp)}
              onChange={handleInputChange}
            />
          </div>
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
    city_name: "London",
    country_code: "GB",
    data: [
      {
        app_max_temp: 12.6,
        app_min_temp: 4.6,
        clouds: 72,
        clouds_hi: 69,
        clouds_low: 54,
        clouds_mid: 76,
        datetime: "2024-03-09",
        dewpt: 5.3,
        high_temp: 12.6,
        low_temp: 7.2,
        max_dhi: null,
        max_temp: 12.6,
        min_temp: 6.6,
        moon_phase: 0.00270407,
        moon_phase_lunation: 0.99,
        moonrise_ts: 1709965690,
        moonset_ts: 1710008191,
        ozone: 351.4,
        pop: 20,
        precip: 0.52441406,
        pres: 992,
        rh: 76,
        slp: 993.7,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1709965579,
        sunset_ts: 1710007026,
        temp: 9.5,
        ts: 1709942460,
        uv: 0.6,
        valid_date: "2024-03-09",
        vis: 24.085,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 87,
        wind_gust_spd: 8.1,
        wind_spd: 4,
      },
      {
        app_max_temp: 9,
        app_min_temp: 5.1,
        clouds: 100,
        clouds_hi: 95,
        clouds_low: 88,
        clouds_mid: 96,
        datetime: "2024-03-10",
        dewpt: 7,
        high_temp: 9,
        low_temp: 5.8,
        max_dhi: null,
        max_temp: 9,
        min_temp: 6.5,
        moon_phase: 0.0323758,
        moon_phase_lunation: 0.02,
        moonrise_ts: 1710052990,
        moonset_ts: 1710100085,
        ozone: 359.9,
        pop: 85,
        precip: 12.012501,
        pres: 993.6,
        rh: 94,
        slp: 995.4,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710051845,
        sunset_ts: 1710093530,
        temp: 7.9,
        ts: 1710028860,
        uv: 1.1,
        valid_date: "2024-03-10",
        vis: 20.156,
        weather: {
          description: "Moderate rain",
          code: 501,
          icon: "r02d",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 85,
        wind_gust_spd: 5.3,
        wind_spd: 2.8,
      },
      {
        app_max_temp: 9.4,
        app_min_temp: 3.8,
        clouds: 96,
        clouds_hi: 43,
        clouds_low: 92,
        clouds_mid: 35,
        datetime: "2024-03-11",
        dewpt: 6.3,
        high_temp: 9.4,
        low_temp: 5.3,
        max_dhi: null,
        max_temp: 9.4,
        min_temp: 5.8,
        moon_phase: 0.0928756,
        moon_phase_lunation: 0.06,
        moonrise_ts: 1710140192,
        moonset_ts: 1710191942,
        ozone: 395.1,
        pop: 80,
        precip: 9.1,
        pres: 1004.6,
        rh: 94,
        slp: 1006.5,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710138111,
        sunset_ts: 1710180033,
        temp: 7.3,
        ts: 1710115260,
        uv: 1.1,
        valid_date: "2024-03-11",
        vis: 24.005,
        weather: {
          description: "Light rain",
          code: 500,
          icon: "r01d",
        },
        wind_cdir: "NW",
        wind_cdir_full: "northwest",
        wind_dir: 320,
        wind_gust_spd: 5.8,
        wind_spd: 3.1,
      },
      {
        app_max_temp: 10.8,
        app_min_temp: 3.2,
        clouds: 89,
        clouds_hi: 89,
        clouds_low: 63,
        clouds_mid: 56,
        datetime: "2024-03-12",
        dewpt: 6,
        high_temp: 10.8,
        low_temp: 6,
        max_dhi: null,
        max_temp: 10.8,
        min_temp: 5.3,
        moon_phase: 0.177615,
        moon_phase_lunation: 0.09,
        moonrise_ts: 1710227392,
        moonset_ts: 1710283780,
        ozone: 368.8,
        pop: 10,
        precip: 0.2,
        pres: 1012.3,
        rh: 89,
        slp: 1014.3,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710224376,
        sunset_ts: 1710266536,
        temp: 7.8,
        ts: 1710201660,
        uv: 1.2,
        valid_date: "2024-03-12",
        vis: 24.128,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "W",
        wind_cdir_full: "west",
        wind_dir: 261,
        wind_gust_spd: 5.8,
        wind_spd: 3.2,
      },
      {
        app_max_temp: 12.7,
        app_min_temp: 4,
        clouds: 84,
        clouds_hi: 91,
        clouds_low: 55,
        clouds_mid: 95,
        datetime: "2024-03-13",
        dewpt: 6.1,
        high_temp: 12.7,
        low_temp: 6.1,
        max_dhi: null,
        max_temp: 12.7,
        min_temp: 6,
        moon_phase: 0.278464,
        moon_phase_lunation: 0.12,
        moonrise_ts: 1710314679,
        moonset_ts: 1710289111,
        ozone: 346.3,
        pop: 0,
        precip: 0,
        pres: 1012.5,
        rh: 83,
        slp: 1014.9,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710310640,
        sunset_ts: 1710353039,
        temp: 9,
        ts: 1710288060,
        uv: 1.2,
        valid_date: "2024-03-13",
        vis: 23.963,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "S",
        wind_cdir_full: "south",
        wind_dir: 183,
        wind_gust_spd: 6.2,
        wind_spd: 3.5,
      },
      {
        app_max_temp: 13.5,
        app_min_temp: 3.8,
        clouds: 76,
        clouds_hi: 68,
        clouds_low: 19,
        clouds_mid: 85,
        datetime: "2024-03-14",
        dewpt: 6.2,
        high_temp: 13.5,
        low_temp: 7.8,
        max_dhi: null,
        max_temp: 13.5,
        min_temp: 6.1,
        moon_phase: 0.278464,
        moon_phase_lunation: 0.16,
        moonrise_ts: 1710402167,
        moonset_ts: 1710375511,
        ozone: 301.3,
        pop: 0,
        precip: 0,
        pres: 1009.1,
        rh: 81,
        slp: 1011.5,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710396905,
        sunset_ts: 1710439541,
        temp: 9.4,
        ts: 1710374460,
        uv: 4,
        valid_date: "2024-03-14",
        vis: 24.124,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "SSE",
        wind_cdir_full: "south-southeast",
        wind_dir: 149,
        wind_gust_spd: 7.4,
        wind_spd: 4.3,
      },
      {
        app_max_temp: 13.4,
        app_min_temp: 7.8,
        clouds: 75,
        clouds_hi: 41,
        clouds_low: 99,
        clouds_mid: 53,
        datetime: "2024-03-15",
        dewpt: 6.8,
        high_temp: 13.4,
        low_temp: 7.7,
        max_dhi: null,
        max_temp: 13.4,
        min_temp: 7.8,
        moon_phase: 0.3872,
        moon_phase_lunation: 0.19,
        moonrise_ts: 1710490008,
        moonset_ts: 1710466896,
        ozone: 342.1,
        pop: 0,
        precip: 0,
        pres: 1006.6,
        rh: 81,
        slp: 1009,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710483169,
        sunset_ts: 1710526043,
        temp: 10.1,
        ts: 1710460860,
        uv: 4.1,
        valid_date: "2024-03-15",
        vis: 22.094,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "S",
        wind_cdir_full: "south",
        wind_dir: 188,
        wind_gust_spd: 8.3,
        wind_spd: 5.1,
      },
      {
        app_max_temp: 13.1,
        app_min_temp: 7.6,
        clouds: 76,
        clouds_hi: 87,
        clouds_low: 91,
        clouds_mid: 82,
        datetime: "2024-03-16",
        dewpt: 7.2,
        high_temp: 13.1,
        low_temp: 6,
        max_dhi: null,
        max_temp: 13.1,
        min_temp: 7.6,
        moon_phase: 0.49666,
        moon_phase_lunation: 0.23,
        moonrise_ts: 1710578406,
        moonset_ts: 1710557584,
        ozone: 348.8,
        pop: 0,
        precip: 0,
        pres: 1003,
        rh: 84,
        slp: 1005.4,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710569433,
        sunset_ts: 1710612546,
        temp: 9.8,
        ts: 1710547260,
        uv: 4.1,
        valid_date: "2024-03-16",
        vis: 21.382,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "SSW",
        wind_cdir_full: "south-southwest",
        wind_dir: 213,
        wind_gust_spd: 8.9,
        wind_spd: 5.4,
      },
      {
        app_max_temp: 11.5,
        app_min_temp: 2.8,
        clouds: 76,
        clouds_hi: 32,
        clouds_low: 71,
        clouds_mid: 65,
        datetime: "2024-03-17",
        dewpt: 5.8,
        high_temp: 11.5,
        low_temp: 5,
        max_dhi: null,
        max_temp: 11.5,
        min_temp: 5.9,
        moon_phase: 0.601453,
        moon_phase_lunation: 0.26,
        moonrise_ts: 1710667563,
        moonset_ts: 1710647312,
        ozone: 385.6,
        pop: 0,
        precip: 0,
        pres: 996,
        rh: 86,
        slp: 998.4,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710655697,
        sunset_ts: 1710699047,
        temp: 8.2,
        ts: 1710633660,
        uv: 4.2,
        valid_date: "2024-03-17",
        vis: 20.943,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "SSW",
        wind_cdir_full: "south-southwest",
        wind_dir: 200,
        wind_gust_spd: 8.5,
        wind_spd: 5.2,
      },
      {
        app_max_temp: 9.9,
        app_min_temp: 1.5,
        clouds: 73,
        clouds_hi: 2,
        clouds_low: 65,
        clouds_mid: 49,
        datetime: "2024-03-18",
        dewpt: 5,
        high_temp: 9.9,
        low_temp: 4,
        max_dhi: null,
        max_temp: 9.9,
        min_temp: 5,
        moon_phase: 0.698045,
        moon_phase_lunation: 0.29,
        moonrise_ts: 1710757528,
        moonset_ts: 1710736092,
        ozone: 403.2,
        pop: 0,
        precip: 0,
        pres: 1002.9,
        rh: 87,
        slp: 1005.3,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710741960,
        sunset_ts: 1710785549,
        temp: 7.1,
        ts: 1710720060,
        uv: 4.2,
        valid_date: "2024-03-18",
        vis: 23.986,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "SSW",
        wind_cdir_full: "south-southwest",
        wind_dir: 210,
        wind_gust_spd: 8.7,
        wind_spd: 5.2,
      },
      {
        app_max_temp: 10.1,
        app_min_temp: 0.6,
        clouds: 66,
        clouds_hi: 0,
        clouds_low: 78,
        clouds_mid: 0,
        datetime: "2024-03-19",
        dewpt: 4.1,
        high_temp: 10.2,
        low_temp: 6.1,
        max_dhi: null,
        max_temp: 10.1,
        min_temp: 4,
        moon_phase: 0.784133,
        moon_phase_lunation: 0.33,
        moonrise_ts: 1710848093,
        moonset_ts: 1710824146,
        ozone: 408,
        pop: 0,
        precip: 0,
        pres: 1010,
        rh: 84,
        slp: 1012.4,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710828224,
        sunset_ts: 1710872051,
        temp: 6.8,
        ts: 1710806460,
        uv: 4.3,
        valid_date: "2024-03-19",
        vis: 24.064,
        weather: {
          description: "Broken clouds",
          code: 803,
          icon: "c03d",
        },
        wind_cdir: "SSW",
        wind_cdir_full: "south-southwest",
        wind_dir: 200,
        wind_gust_spd: 7.9,
        wind_spd: 4.9,
      },
      {
        app_max_temp: 9.4,
        app_min_temp: 5.6,
        clouds: 98,
        clouds_hi: 0,
        clouds_low: 89,
        clouds_mid: 48,
        datetime: "2024-03-20",
        dewpt: 5,
        high_temp: 10.4,
        low_temp: 5.8,
        max_dhi: null,
        max_temp: 10.4,
        min_temp: 6.1,
        moon_phase: 0.857931,
        moon_phase_lunation: 0.36,
        moonrise_ts: 1710938930,
        moonset_ts: 1710911721,
        ozone: 397,
        pop: 40,
        precip: 1.4375,
        pres: 1017,
        rh: 82,
        slp: 1019.5,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1710914487,
        sunset_ts: 1710958552,
        temp: 8.1,
        ts: 1710892860,
        uv: 4.4,
        valid_date: "2024-03-20",
        vis: 24.128,
        weather: {
          description: "Overcast clouds",
          code: 804,
          icon: "c04d",
        },
        wind_cdir: "NNE",
        wind_cdir_full: "north-northeast",
        wind_dir: 22,
        wind_gust_spd: 4.4,
        wind_spd: 2,
      },
      {
        app_max_temp: 12.8,
        app_min_temp: 5.3,
        clouds: 10,
        clouds_hi: 33,
        clouds_low: 5,
        clouds_mid: 0,
        datetime: "2024-03-21",
        dewpt: 3.8,
        high_temp: 14.1,
        low_temp: 6.4,
        max_dhi: null,
        max_temp: 14.1,
        min_temp: 5.8,
        moon_phase: 0.917815,
        moon_phase_lunation: 0.4,
        moonrise_ts: 1711029786,
        moonset_ts: 1710998997,
        ozone: 387.8,
        pop: 20,
        precip: 0.0625,
        pres: 1022.8,
        rh: 68,
        slp: 1025.2,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1711000750,
        sunset_ts: 1711045053,
        temp: 9.7,
        ts: 1710979260,
        uv: 4.4,
        valid_date: "2024-03-21",
        vis: 24.128,
        weather: {
          description: "Few clouds",
          code: 801,
          icon: "c02d",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 81,
        wind_gust_spd: 3.6,
        wind_spd: 2,
      },
      {
        app_max_temp: 11.3,
        app_min_temp: 5.9,
        clouds: 70,
        clouds_hi: 45,
        clouds_low: 70,
        clouds_mid: 3,
        datetime: "2024-03-22",
        dewpt: 4.9,
        high_temp: 12.4,
        low_temp: 5.9,
        max_dhi: null,
        max_temp: 12.4,
        min_temp: 6.4,
        moon_phase: 0.962263,
        moon_phase_lunation: 0.43,
        moonrise_ts: 1711120546,
        moonset_ts: 1711086096,
        ozone: 381,
        pop: 15,
        precip: 0.3125,
        pres: 1022.3,
        rh: 76,
        slp: 1024.7,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1711087013,
        sunset_ts: 1711131554,
        temp: 9.2,
        ts: 1711065660,
        uv: 4.5,
        valid_date: "2024-03-22",
        vis: 24.128,
        weather: {
          description: "Broken clouds",
          code: 803,
          icon: "c03d",
        },
        wind_cdir: "E",
        wind_cdir_full: "east",
        wind_dir: 80,
        wind_gust_spd: 4.9,
        wind_spd: 2.6,
      },
      {
        app_max_temp: 12.7,
        app_min_temp: 5.9,
        clouds: 12,
        clouds_hi: 38,
        clouds_low: 5,
        clouds_mid: 3,
        datetime: "2024-03-23",
        dewpt: 2.5,
        high_temp: 14,
        low_temp: 7.5,
        max_dhi: null,
        max_temp: 14,
        min_temp: 5.9,
        moon_phase: 0.989953,
        moon_phase_lunation: 0.46,
        moonrise_ts: 1711211198,
        moonset_ts: 1711173097,
        ozone: 386.3,
        pop: 0,
        precip: 0,
        pres: 1020.8,
        rh: 63,
        slp: 1023.2,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1711173276,
        sunset_ts: 1711218055,
        temp: 9.6,
        ts: 1711152060,
        uv: 4.5,
        valid_date: "2024-03-23",
        vis: 24.128,
        weather: {
          description: "Few clouds",
          code: 801,
          icon: "c02d",
        },
        wind_cdir: "S",
        wind_cdir_full: "south",
        wind_dir: 174,
        wind_gust_spd: 2.9,
        wind_spd: 1.6,
      },
      {
        app_max_temp: 10.1,
        app_min_temp: 8.4,
        clouds: 63,
        clouds_hi: 100,
        clouds_low: 27,
        clouds_mid: 56,
        datetime: "2024-03-24",
        dewpt: 4,
        high_temp: 11.1,
        low_temp: 5.1,
        max_dhi: null,
        max_temp: 11.1,
        min_temp: 7.5,
        moon_phase: 0.999907,
        moon_phase_lunation: 0.5,
        moonrise_ts: 1711301783,
        moonset_ts: 1711260058,
        ozone: 350,
        pop: 50,
        precip: 2,
        pres: 1017.8,
        rh: 71,
        slp: 1020.2,
        snow: 0,
        snow_depth: 0,
        sunrise_ts: 1711259539,
        sunset_ts: 1711304556,
        temp: 9.2,
        ts: 1711238460,
        uv: 4.6,
        valid_date: "2024-03-24",
        vis: 24.128,
        weather: {
          description: "Light shower rain",
          code: 520,
          icon: "r04d",
        },
        wind_cdir: "WNW",
        wind_cdir_full: "west-northwest",
        wind_dir: 298,
        wind_gust_spd: 10,
        wind_spd: 4.6,
      },
    ],
    lat: 51.5074,
    lon: -0.1278,
    state_code: "ENG",
    timezone: "Europe/London",
  },
}
