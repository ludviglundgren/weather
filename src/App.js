import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/searchbar";
import ForecastContainer from "./components/forecastContainer";
import TodaysWeatherForecast from "./components/todaysWeatherForecast";
import TodaysWeatherBarometrics from "./components/todaysWeatherBarometrics";

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
      latitude: '',
      longitude: '',
    };

    // this.getWeatherByCordinates();
  }

  onFormSubmit(e) {
    e.preventDefualt();
  }

  componentWillUpdate() {
    console.log(this.state);
  }

  getCurrentPosition() {
    const resolve = null;
    const reject = null;

    if (navigator.geolocation) {
      return new Promise(
        (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
      )
    } else {
      return new Promise(
        resolve => resolve({})
      )
    }
  }

  componentDidMount() {
    this.getCurrentPosition()
      .then(position => {
        console.log(position)
        const { latitude, longitude } = position.coords;
        this.setState({
          latitude: latitude,
          longitude: longitude,
        });

        // this.getWeatherByLocation(latitude, longitude);
      })
      .catch(error => console.error(error));

  }

  getWeatherByCity() {
    const apikey = "&APPID=3823a62d779782119e54c217f5c22d3b";

    let city = "stockholm";
    let cityquery = `http://api.openweathermap.org/data/2.5/forecast?q=${city}${apikey}&units=metric`;

    fetch(cityquery)
      .then(res => res.json())
      .then(data => {
        console.log("response data", data);
        debugger;
        this.setState({ forecast: data });
        console.log("logging state after fetch", this.state.forecast);
      })
      .catch(err => console.error(err));
  }

  getWeatherByLocation(lat, long) {
    console.log("lat: ", lat);
    console.log("long: ", long);
    const apikey = 'c5ec9215a57347118d6bc5aad3e069f3';

    const corsCheat = 'https://cors-anywhere.herokuapp.com';

    const query = `${corsCheat}/https://api.darksky.net/forecast/${apikey}/${lat},${long}`;
    console.log(query);

    fetch(query)
      .then(res => res.json())
      .then(data => {
        console.log("i am data: ", data);
        this.setState({
          currentweather: data.currently,
          dailyforecast: data.daily,
          hourlyforecast: data.hourly
        })
      })
      .catch(error => console.error(error));

  }

  render() {
    const { temperature, windSpeed, humidity } = this.state.currentweather;
    return (
      <div>
        { this.state.currentweather
          ? <div className="container">
              <div className="today-container">
                <div className="currentWeather">
                  <h1>Stockholm, Sweden</h1>
                  <p>Current temp: { temperature }</p>
                
                </div>
                <div className="todaysWeather">
                  <h2>It's sunny now</h2>
                  <TodaysWeatherBarometrics />
                  <TodaysWeatherForecast />
                </div>
              </div>
            <ForecastContainer />
            </div>
          : <p>Can't get current location</p>
        }
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
