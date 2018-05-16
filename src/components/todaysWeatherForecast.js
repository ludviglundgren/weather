import React, { Component } from 'react';

class TodaysWeatherForecast extends Component {
    render() {
        return (
          <div className="todaysWeather--forecast">
            <div className="todaysWeather--forecast-item">
              <p>Morning</p>
              <span>+15</span>
            </div>
            <div className="todaysWeather--forecast-item">
              <p>Day</p>
              <span>+15</span>
            </div>
            <div className="todaysWeather--forecast-item">
              <p>Evening</p>
              <span>+15</span>
            </div>
            <div className="todaysWeather--forecast-item">
              <p>Night</p>
              <span>+15</span>
            </div>
          </div>
        )
    }
}

export default TodaysWeatherForecast;