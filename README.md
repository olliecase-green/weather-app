# Welcome to the Weather App

This project was created with React and TypeScript.

## Getting started

To run this app, follow the steps below:

1. Using the green `<> Code` button, copy the link and git clone the app on your local machine
2. If you don't have `Node.js` installed on your machine, visit this link to download it: https://nodejs.org/en/download
3. Visit https://rapidapi.com/weatherbit/api/weather to sign up for an API key - you will need to subscribe to the Current Weather and 16 Day Forecast endpoints using the free subscription
4. You should be able to see the API key when you select an endpoint and view the code snippet on the right hand side of the page
```
headers: {
  'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
  'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
}
```
6. Navigate to the weather-app directory and run npm install - this should install all of the necessary dependencies, such as axios
7. Edit the apiFunctions.ts file and paste the API key into `X-RapidAPI-Key`
8. You can now use npm start to run the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
