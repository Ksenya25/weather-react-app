import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature.js";

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
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className=" col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={52} />
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
