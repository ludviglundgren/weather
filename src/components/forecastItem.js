import React from "react";

import { formatDay, formatDate } from "../helpers/lib";

import Icon from "./icon";
import TemperatureComponent from "./temperature";

const ForecastItem = ({ ...props }) => {
  const { icon, time, temperatureMax, temperatureMin } = props.weather;
  const { isCelcius } = props;

  return (
    <div className="forecast-day">
      <p>{formatDay(time)}</p>
      <p>{formatDate(time)}</p>
      <Icon icon={icon} />
      <TemperatureComponent
        temperature={temperatureMax}
        isCelcius={isCelcius}
      />
      <TemperatureComponent
        temperature={temperatureMin}
        isCelcius={isCelcius}
      />
    </div>
  );
};

export default ForecastItem;
