import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SayHello extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SayHello name="there" />
        <SayHello name="knas" />
      </div>
    );
  }
}

export default App;
