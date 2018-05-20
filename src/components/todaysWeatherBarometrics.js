import React from "react";

const TodaysWeatherBarometrics = props => {
  const { windSpeed, pressure, humidity } = props.currentweather;

  return (
    <div className="todaysWeather--barometrics">
      <p>Wind: {windSpeed}</p>
      <p>Pressure: {pressure}</p>
      <p>Humidity: {humidity}</p>
    </div>
  );
};

export default TodaysWeatherBarometrics;
