import React, { Component } from "react";
import "./App.css";

import Icon from "./components/icon";
import ForecastContainer from "./components/forecastContainer";
import TodaysWeatherForecast from "./components/todaysWeatherForecast";
import TodaysWeatherBarometrics from "./components/todaysWeatherBarometrics";
import TemperatureComponent from "./components/temperature";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentweather: {},
      dailyforecast: {},
      hourlyforecast: {},
      latitude: "56.429035",
      longitude: "12.840247",
      isCelcius: true
    };

    this.toggleCelcius = this.toggleCelcius.bind(this);
    this.toggleFahrenheit = this.toggleFahrenheit.bind(this);

    this.getMyCurrentPosition = this.getMyCurrentPosition.bind(this);
  }

  componentWillMount() {
    this.getWeatherByLocation(this.state.latitude, this.state.longitude);

    this.getMyCurrentPosition()
      .then(position => {
        const { latitude, longitude } = position.coords;
        this.setState({
          latitude,
          longitude
        });

        this.getWeatherByLocation(latitude, longitude);
      })
      .catch(error => console.error(error));
  }

  // eslint-disable-next-line
  getMyCurrentPosition() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
    }
    return new Promise(resolve => resolve({}));
  }

  async getWeatherByLocation(lat, long) {
    const apikey = "c5ec9215a57347118d6bc5aad3e069f3";

    const corsCheat = "https://cors-anywhere.herokuapp.com";

    const query = `${corsCheat}/https://api.darksky.net/forecast/${apikey}/${lat},${long}`;

    const response = await fetch(query);
    const json = await response.json();
    console.log("I AM JSON", json);

    this.setState({
      currentweather: json.currently,
      dailyforecast: json.daily,
      hourlyforecast: json.hourly
    });
  }

  toggleCelcius() {
    this.setState({
      isCelcius: true
    });
  }

  toggleFahrenheit() {
    this.setState({
      isCelcius: false
    });
  }

  render() {
    const { temperature, summary, icon } = this.state.currentweather;
    const { isCelcius } = this.state;

    return (
      <div>
        {this.state.currentweather ? (
          <div className="container">
            <div className="today-container">
              <div className="currentWeatherContainer">
                <h1>Stockholm, Sweden</h1>
                <div className="currentWeather">
                  <Icon icon={icon} />
                  <TemperatureComponent
                    temperature={temperature}
                    isCelcius={isCelcius}
                  />
                </div>
              </div>
              <div className="todaysWeatherContainer">
                <div className="todaysWeather">
                  <div className="todaysWeatherSummary">
                    <h2>{summary}</h2>
                    <div className="changeTemperatureButtons">
                      <button onClick={this.toggleCelcius}>C</button>
                      <button onClick={this.toggleFahrenheit}>F</button>
                    </div>
                  </div>
                  <TodaysWeatherBarometrics
                    currentweather={this.state.currentweather}
                    isCelcius={this.state.isCelcius}
                  />
                  <TodaysWeatherForecast
                    weather={this.state.hourlyforecast}
                    isCelcius={isCelcius}
                  />
                </div>
              </div>
            </div>
            <ForecastContainer
              weather={this.state.dailyforecast}
              isCelcius={isCelcius}
            />
          </div>
        ) : (
          <p>Loading..</p>
        )}
      </div>
    );
  }
}

export default App;
