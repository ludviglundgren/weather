import React from "react";

import Icon from "./icon";
import TemperatureComponent from "./temperature";

const TodaysWeatherForecastItem = props => {
  const { timeOfDay, temperature, icon, isCelcius } = props;

  return (
    <div className="todaysWeather--forecast-item">
      <p>{timeOfDay}</p>
      <div className="details">
        <Icon icon={icon} />
        <TemperatureComponent temperature={temperature} isCelcius={isCelcius} />
      </div>
    </div>
  );
};

export default TodaysWeatherForecastItem;
