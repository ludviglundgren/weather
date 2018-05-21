import React from "react";

const TodaysWeatherBarometrics = props => {
  const { windSpeed, pressure, humidity } = props.currentweather;

  return (
    <div className="todaysWeather--barometrics">
      <p>
        Wind:
        <span>{windSpeed}</span>
      </p>
      <p>
        Pressure:
        <span>{pressure}</span>
      </p>
      <p>
        Humidity:
        <span>{humidity} %</span>
      </p>
    </div>
  );
};

export default TodaysWeatherBarometrics;
