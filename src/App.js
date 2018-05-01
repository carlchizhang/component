import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function PowerDisplay(props) {
  return (
    <div className='power-display'>
      <h1>Computing Power: {props.curComputingPower} </h1>
      <button className='increment-power'>
        Increase
      </button>
    </div>
  );
}

class Navbar extends Component {
  render() {
    return (
      <header className='navbar'>
        <img className='logo' src={logo} alt={'title'}/>
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
      <div className='App'>
        <Navbar/>
      </div>
    );
  }
}

export default App;
