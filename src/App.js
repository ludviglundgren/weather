import React, { Component } from 'react';
import './App.css';

import SearchBar from "./components/searchbar";

import { fakeData } from "./data/openweathermap";

class SayHello extends Component {
  render() {
    return (
      <div>
        <h1>I'm component nr: {this.props.name}!</h1>
      </div>
    );
  }
}

class CurrentTemp extends Component {
  render() {
    return (
      <div>
        <h2>ID: { this.props.id }</h2>
      </div>
    );
  }
}

const ListItem = () => {
  return(
    <div>
      <h1>Hello</h1>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todaysWeather: {} };

    this.getWeatherByCordinates();

    // setTimeout(() => {
    //   this.setState({ todaysWeather: fakeData.getByPosition })
    //   console.log(this.state.todaysWeather);
    // }, 2000);
  }

  // componentWillMount() {
  //   this.getWeatherByCordinates();
  // }
  
  // componentDidMount() {
  //   console.log(this.state.todaysWeather);
  // }

  getWeatherByCordinates() {
    setTimeout(() => {
      this.setState({ todaysWeather: fakeData.getByPosition });
      console.log(this.state.todaysWeather);
    }, 1000)
    // const url = "http://api.openweathermap.org/data/2.5/weather?";
    // console.log(this.state);
    
    // let lat = "59.295610";
    // let lon = "18.011859";

    // const apikey = "&APPID=3823a62d779782119e54c217f5c22d3b"

    // 59.295610, 18.011859

    // let query = `${url}lat=${lat}&lon=${lon}${apikey}`;
    // console.log(fakeData.fiveDayForecast.list);
    // const data = fakeData.getByPosition.list;
    /*
    // fetch(query)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));
    */

  }

  // getFiveDayForecastByCordinates() {
  //   const data = fakeData.fiveDayForecast.list;
  // }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <p className="App-intro">
          Get me some forecast, eeeyyh
        </p>
        <SayHello name="one" />
        <SayHello name="two" />
        <CurrentTemp id={this.state.todaysWeather.id} />
        <ListItem />
      </div>
    );
  }
}

export default App;
