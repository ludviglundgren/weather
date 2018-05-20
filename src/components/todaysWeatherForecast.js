import React, { Component } from "react";

import TodaysWeatherForecastItem from "./todaysWeatherForecastItem";

class TodaysWeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = props;
  }

  render() {
    return this.props.weather.data ? (
      <div className="todaysWeather--forecast">
        <TodaysWeatherForecastItem
          temperature={this.props.weather.data[6].temperature}
          isCelcius={this.props.isCelcius}
          timeOfDay="Morning"
          icon="cloudy"
        />
        <TodaysWeatherForecastItem
          temperature={this.props.weather.data[12].temperature}
          isCelcius={this.props.isCelcius}
          timeOfDay="Day"
          icon="clear-day"
        />
        <TodaysWeatherForecastItem
          temperature={this.props.weather.data[24].temperature}
          isCelcius={this.props.isCelcius}
          timeOfDay="Evening"
          icon="cloudy"
        />
        <TodaysWeatherForecastItem
          temperature={this.props.weather.data[36].temperature}
          isCelcius={this.props.isCelcius}
          timeOfDay="Night"
          icon="clear-night"
        />
      </div>
    ) : (
      <p>Loading..</p>
    );
  }
}

export default TodaysWeatherForecast;
