# Welcome to the Weather App

In this app, users can view the current temperature in five major world cities: London, New York, Mumbai, Sydney and Tokyo. Users can also click through to see a 16 day forecast for each city.

This project was created with React and TypeScript.

## Getting started

To run this app, follow the steps below:

1. Using the green `<> Code` button, copy the link and git clone the app on your local machine
2. If you don't have `Node.js` installed on your machine, visit this link to download it: https://nodejs.org/en/download
3. Visit https://rapidapi.com to sign up for an account - you will need an API key to be able to use the app
4. Once your account is verified, visit https://rapidapi.com/weatherbit/api/weather and in the bottom centre select `subscribe` - this should take you through to a selection page, choose the free subscription and subscribe
5. Visit https://rapidapi.com/weatherbit/api/weather and on the bottom left in the code snippet, select the API key:
```
 headers: {
    'X-RapidAPI-Key': API-KEY-HERE
}
```
6. Edit the `weatherApiConnector.ts` file (this can be found in src -> Connectors) and paste the API key into `X-RapidAPI-Key`
7. Open a terminal, navigate to the weather-app directory and run `npm install` - this should install all of the necessary dependencies, such as axios
8. You can now use `npm start` to run the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
