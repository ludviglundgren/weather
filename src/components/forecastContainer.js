import React from "react";
import ForecastItem from "./forecastItem";

const ForecastContainer = props => {
  let fiveDays = [];
  // console.log("i am props inside somewhere", props);

  props.weather.data ? (fiveDays = props.weather.data.slice(0, 5)) : null;

  return (
    <div className="forecast">
      {props.weather.data ? (
        fiveDays.map(day => <ForecastItem weather={day} key={day.time} />)
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default ForecastContainer;
