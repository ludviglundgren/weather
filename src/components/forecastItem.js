import React from "react";

import { formatDay, formatDate } from "../helpers/lib";

import Icon from "./icon";
import TemperatureComponent from "./temperature";

const ForecastItem = ({ ...props }) => {
  const { icon, time, temperatureMax, temperatureMin } = props.weather;
  const { isCelcius } = props;

  return (
    <div className="forecast-day">
      <p className="day">{formatDay(time)}</p>
      <p className="date">{formatDate(time)}</p>
      <Icon icon={icon} />
      <TemperatureComponent
        temperature={temperatureMax}
        isCelcius={isCelcius}
        styling="forecast-day-max"
      />
      <TemperatureComponent
        temperature={temperatureMin}
        isCelcius={isCelcius}
        styling="forecast-day-min"
      />
    </div>
  );
};

export default ForecastItem;
