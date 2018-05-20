import React from "react";
import ForecastItem from "./forecastItem";

const ForecastContainer = props => {
  let fiveDays = [];

  // eslint-disable-next-line
  props.weather.data ? (fiveDays = props.weather.data.slice(0, 5)) : null;

  const { isCelcius } = props;

  return (
    <div className="forecast">
      {props.weather.data ? (
        fiveDays.map(day => (
          <ForecastItem weather={day} isCelcius={isCelcius} key={day.time} />
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default ForecastContainer;
