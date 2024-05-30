import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [temperature] = useState("null");

  function showForecast(response) {
    setMessage(
      <ul className="Forecast">
        <li>Weather: {Math.round(response.data.main.temp)}℃</li>
        <li>Description: {response.data.weather[0].description} </li>
        <li> Humidity: {response.data.main.humidity}% </li>
        <li> Wind: {Math.round(response.data.wind.speed)} km/h </li>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8cac06f7ab6c10287cd06a316ff84a57";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (temperature) {
    return (
      <form onSubmit={handleSubmit} className="mainForm">
        <input
          type="search"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
        <h2>{message}</h2>
      </form>
    );
  } else {
    return <p>the weather is loading ${city} </p>;
  }
}
