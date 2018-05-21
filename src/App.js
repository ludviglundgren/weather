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
      isCelcius: true,
      city: "Stockholm, Sverige"
    };

    this.toggleDisplayTemperature = this.toggleDisplayTemperature.bind(this);
    this.getMyCurrentPosition = this.getMyCurrentPosition.bind(this);
    this.searchByLocation = this.searchByLocation.bind(this);
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

    this.setState({
      currentweather: json.currently,
      dailyforecast: json.daily,
      hourlyforecast: json.hourly
    });
  }

  async searchByLocation(e) {
    e.preventDefault();

    const location = this.refs.city.value;

    const geokey = "AIzaSyDZ_ljXvilo4sTBx_oqjl_wBDB4q2qQqWE";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${geokey}`;

    const response = await fetch(url);
    const json = await response.json();

    this.getWeatherByLocation(
      json.results[0].geometry.location.lat,
      json.results[0].geometry.location.lng
    );

    this.setState({
      city: json.results[0].formatted_address
    });
  }

  toggleDisplayTemperature() {
    this.setState(prevState => ({
      isCelcius: !prevState.isCelcius
    }));
  }

  render() {
    const { temperature, summary, icon } = this.state.currentweather;
    const { isCelcius } = this.state;

    return (
      <div className="wrapper">
        {this.state.currentweather ? (
          <div className="container">
            <div className="today-container">
              <div className="currentWeatherContainer">
                <div className="currentWeatherLocation">
                  <form onSubmit={this.searchByLocation} className="form-group">
                    <Icon icon="location" />
                    <input
                      type="text"
                      placeholder={this.state.city}
                      ref="city"
                      name="city"
                    />
                    <button type="submit">Search</button>
                  </form>
                </div>
                <div className="currentWeather">
                  <Icon icon={icon} />
                  <TemperatureComponent
                    temperature={temperature}
                    isCelcius={isCelcius}
                    styling="current-temp"
                  />
                </div>
              </div>
              <div className="todaysWeatherContainer">
                <div className="todaysWeather">
                  <div className="todaysWeatherSummary">
                    <h2>{summary}</h2>
                    <button
                      className="btn"
                      onClick={this.toggleDisplayTemperature}
                    >
                      {this.state.isCelcius ? "Celcius" : "Fahrenheit"}
                    </button>
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
