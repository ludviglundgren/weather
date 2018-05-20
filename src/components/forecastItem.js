import React from "react";

import { formatDay, formatDate } from "../helpers/lib";

import Icon from "./icon";

const ForecastItem = ({ ...props }) => {
  // console.log("i am prop inside forecast item", props);
  const { icon, time, temperatureMax, temperatureMin } = props.weather;
  // const icon = "clear-day";
  return (
    <div className="forecast-day">
      <p>{formatDay(time)}</p>
      <p>{formatDate(time)}</p>
      <Icon icon={icon} />
      <p>{temperatureMax}</p>
      <p>{temperatureMin}</p>
    </div>
  );
};

export default ForecastItem;
