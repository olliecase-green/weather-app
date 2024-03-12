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
      "X-RapidAPI-Key": "adb4b1b42emsh1808efd20aa97e3p134efcjsn3eaa1cd36220",
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
