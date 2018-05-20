import React, { Component } from "react";

import Icon from "./icon";
import temperatureComponent from "./temperature";

class TodaysWeatherForecastItem extends Component {
  constructor(props) {
    super(props);
    console.log("im on forecast1", this.props);
  }

  render() {
    const { timeOfDay, temperature, icon } = this.props;

    return (
      <div className="todaysWeather--forecast-item">
        <p>{timeOfDay}</p>
        <div>
          <Icon icon={icon} />
          <span>{temperature}</span>
        </div>
      </div>
    );
  }
}
// <temperatureComponent
//   temperature={temperature}
//   isCelcius={this.props.isCelcius}
// />;

export default TodaysWeatherForecastItem;
