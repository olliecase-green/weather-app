import "./CSS/App.css"
import CurrentTemp from "./Components/CurrentTemp"
import ForecastedTemp from "./Components/ForecastedTemp"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="title">Welcome to the Weather App</div>
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CurrentTemp />}></Route>
            <Route
              path=":currentLocation/forecasted"
              element={<ForecastedTemp />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
