import React from "react";

import fog from "../icons/fog.svg";
import rain from "../icons/rain.svg";
import wind from "../icons/wind.svg";
import snow from "../icons/snow.svg";
import cloudy from "../icons/cloudy.svg";
import clearday from "../icons/clear-day.svg";
import location from "../icons/location-pin.svg";
import clearnight from "../icons/clear-night.svg";
import temperature from "../icons/temperature.svg";
import partlyCloudyDay from "../icons/partly-cloudy-day.svg";
import partlyCloudyNight from "../icons/partly-cloudy-night.svg";

const Icon = props => {
  switch (props.icon) {
    case "fog":
      return <img src={fog} alt={props.icon} />;
    case "rain":
      return <img src={rain} alt={props.icon} />;
    case "wind":
      return <img src={wind} alt={props.icon} />;
    case "snow":
      return <img src={snow} alt={props.icon} />;
    case "cloudy":
      return <img src={cloudy} alt={props.icon} />;
    case "location":
      return <img src={location} alt={props.icon} />;
    case "clear-day":
      return <img src={clearday} alt={props.icon} />;
    case "clear-night":
      return <img src={clearnight} alt={props.icon} />;
    case "temperature":
      return <img src={temperature} alt={props.icon} />;
    case "partly-cloudy-day":
      return <img src={partlyCloudyDay} alt={props.icon} />;
    case "partly-cloudy-night":
      return <img src={partlyCloudyNight} alt={props.icon} />;
    default:
      return <img src={cloudy} alt={props.icon} />;
  }
};

export default Icon;
