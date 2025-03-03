import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showForecast(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "38c1091f43baf6ed92af311447ab0o5t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-sm-10 p-1">
              <input
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                onChange={updateCity}
                className="form-search-bar"
              />
            </div>
            <div className="col-sm-2 p-1">
              <input
                type="submit"
                value="Search"
                className="btn search-button"
              />
            </div>
          </div>
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <p>Please wait, the weather is loading .... </p>;
  }
}
