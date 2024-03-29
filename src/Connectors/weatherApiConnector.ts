import axios from "axios"

export async function fetchLocationTemp(url: string, lon: string, lat: string) {
  const options = {
    method: "GET",
    url: url,
    params: {
      lon: lon,
      lat: lat,
    },
    headers: {
      "X-RapidAPI-Key": "API-KEY-HERE",
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  }

  try {
    const response = await axios.request(options)
    return response
  } catch (error) {
    console.error(error)
  }
}
