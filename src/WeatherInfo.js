import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-6">
          <h1>
            <strong>{props.data.city}</strong>
          </h1>
          <ul>
            <li>
              <span>
                <FormatDate date={props.data.date} />
                <span className="text-capitalize">
                  {" "}
                  {props.data.description}
                </span>
              </span>
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className=" col-md-6 d-flex">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={62} />
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
