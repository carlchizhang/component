import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function PowerDisplay(props) {
  return (
    <div>
      <h1>Computing Power: {props.curComputingPower}</h1>
      <button className="increment-power">
        Increase
      </button>
    </div>
  );
}

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <PowerDisplay
          curComputingPower={1000}
        />
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
