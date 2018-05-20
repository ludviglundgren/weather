import React, { Component } from "react";
import "./App.css";

import Icon from "./components/icon";
import ForecastContainer from "./components/forecastContainer";
import TodaysWeatherForecast from "./components/todaysWeatherForecast";
import TodaysWeatherBarometrics from "./components/todaysWeatherBarometrics";
import TemperatureComponent from "./components/temperature";

// const CurrentTemp = (props) => {
//   return (
//     <div>
//       {props.forecast.city.map((item, i) => {
//             <h2 key={i}>{ item.id }</h2>
//         })}
//     </div>
//   )
// {Object.keys(props.forecast).map(function(key) {
//   return <div>Key: {key}, Value: {props.forecast[key]}</div>;
// })}
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentweather: {},
      dailyforecast: {},
      hourlyforecast: {},
      latitude: "",
      longitude: "",
      isCelcius: true
    };

    // this.getWeatherByCordinates();
  }

  // onFormSubmit(e) {
  //   e.preventDefualt();
  // }

  // componentWillUpdate() {
  //   console.log(this.state);
  // }

  componentWillMount() {
    const lat = "59.29809350000001";
    const long = "18.069659599999998";

    this.getWeatherByLocation(lat, long);

    // this.getCurrentPosition()
    //   .then(position => {
    //     console.log(position)
    //     const { latitude, longitude } = position.coords;
    //     this.setState({
    //       latitude: latitude,
    //       longitude: longitude,
    //     });

    //     // this.getWeatherByLocation(latitude, longitude);
    //   })
    //   .catch(error => console.error(error));
  }

  getCurrentPosition() {
    const resolve = null;
    const reject = null;

    if (navigator.geolocation) {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
    }
    return new Promise(resolve => resolve({}));
  }

  getWeatherByCity() {
    const apikey = "&APPID=3823a62d779782119e54c217f5c22d3b";

    const city = "stockholm";
    const cityquery = `http://api.openweathermap.org/data/2.5/forecast?q=${city}${apikey}&units=metric`;

    fetch(cityquery)
      .then(res => res.json())
      .then(data => {
        console.log("response data", data);

        this.setState({ forecast: data });
        console.log("logging state after fetch", this.state.forecast);
      })
      .catch(err => console.error(err));
  }

  async getWeatherByLocation(lat, long) {
    // console.log("lat: ", lat);
    // console.log("long: ", long);
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

  render() {
    const { temperature, summary, icon } = this.state.currentweather;

    return (
      <div>
        {this.state.currentweather ? (
          <div className="container">
            <div className="today-container">
              <div className="currentWeatherContainer">
                <h1>Stockholm, Sweden</h1>
                <div className="currentWeather">
                  <Icon icon={icon} />
                  <p>Current temp: {temperature}</p>
                  <TemperatureComponent temperature={temperature} />
                </div>
              </div>
              <div className="todaysWeatherContainer">
                <div className="todaysWeather">
                  <h2>{summary}</h2>
                  <TodaysWeatherBarometrics
                    currentweather={this.state.currentweather}
                    isCelcius={this.state.isCelcius}
                  />
                  <TodaysWeatherForecast weather={this.state.hourlyforecast} />
                </div>
              </div>
            </div>
            <ForecastContainer weather={this.state.dailyforecast} />
          </div>
        ) : (
          <p>Can't get current location</p>
        )}
      </div>
    );
  }
}

// <div className="App">
//   <p className="App-intro">Get me some forecast, eeeyyh</p>
//   { this.state.forecast.list
//       ? this.state.forecast.list.map(day => <p key={day.main.temp}>The temperature is: {day.main.temp}</p>)
//     : "No forecast yet, go search"}
// </div>

export default App;
