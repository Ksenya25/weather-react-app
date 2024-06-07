import React from "react";
import SearchEngine from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather react App</h1>
        <SearchEngine defaultCity="Kharkiv" />

        <div className="footer">
          <p>
            This project was coded by Ksenya O.{" "}
            <a
              href="https://github.com/Ksenya25/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-source code on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
