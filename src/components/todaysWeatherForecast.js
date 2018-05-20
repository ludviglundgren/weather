import React, { Component } from "react";

import TodaysWeatherForecastItem from "./todaysWeatherForecastItem";

class TodaysWeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: {
        morning: "12",
        day: "",
        evening: "",
        night: ""
      },
      weather: {}
    };
  }
  componentWillReceiveProps() {
    console.log("i recieved new props: ", this.props);

    // const temperature = {
    //   morning: this.props.weather.data[8],
    //   day: this.props.weather.data[20],
    //   evening: this.props.weather.data[32],
    //   night: this.props.weather.data[44]
    // };
    this.setState({ weather: this.props });
    console.log(" i am new state", this.state);
  }

  componentDidUpdate() {
    console.log(" i am new state", this.state);
  }

  render() {
    // const temperature = {
    //   morning: "15",
    //   day: "16",
    //   evening: "14",
    //   night: "09"
    // };

    // if (this.props.weather.length > 0) {
    //   let temperature = {
    //     morning: this.props.weather.data[8],
    //     day: this.props.weather.data[20],
    //     evening: this.props.weather.data[32],
    //     night: this.props.weather.data[44]
    //   };
    // }

    // props.weather.length ? (
    // const temperature = {
    //   morning: props.weather.data[8],
    //   day: props.weather.data[20],
    //   evening: props.weather.data[32],
    //   night: props.weather.data[44]
    // };
    // ) : (
    //   <p>Loading..</p>
    // )

    // const { weather } = this.props;

    return this.props.weather.data ? (
      <div className="todaysWeather--forecast">
        <TodaysWeatherForecastItem
          temperature={this.state.temperature.morning}
          timeOfDay="Morning"
          icon={"cloudy"}
        />
        <TodaysWeatherForecastItem
          temperature={this.state.temperature.day}
          timeOfDay="Day"
          icon={"clear-day"}
        />
        <TodaysWeatherForecastItem
          temperature={this.state.temperature.evening}
          timeOfDay="Evening"
          icon={"cloudy"}
        />
        <TodaysWeatherForecastItem
          temperature={this.state.temperature.night}
          timeOfDay="Night"
          icon={"clear-night"}
        />
      </div>
    ) : (
      <p>Loading..</p>
    );
  }
}

export default TodaysWeatherForecast;
