import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Header stuff */
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
        <button className='reset-game'>
          Reset
        </button>
      </header>
    );
  }
}


/* main body stuff */
/* upgrade table */
function UpgradeItem(props) {
  return (
    <tr className='upgrade-item'>
      <td>{props.upgradeName}</td>
      <td>{props.upgradeLevel}</td>
      <td className='compile-column'>
        <button>
          Cost: {props.upgradeCost} 
        </button>
      </td>
    </tr>
  );
}

const upgrades = [
  {upgradeName: 'Styling', upgradeLevel: 1, upgradeCost: 100},
  {upgradeName: 'AI', upgradeLevel: 2, upgradeCost: 500},
  {upgradeName: 'Timer', upgradeLevel: 1, upgradeCost: 400},
  {upgradeName: 'Progress Bar', upgradeLevel: 1, upgradeCost: 1000},
  {upgradeName: 'Favicon', upgradeLevel: 0, upgradeCost: 50}
];

class UpgradesWidget extends Component {
  renderItem(upgradeName, upgradeLevel, upgradeCost) {
    return (
      <UpgradeItem
        upgradeName={upgradeName}
        upgradeLevel={upgradeLevel}
        upgradeCost={upgradeCost}
      />
    );
  }

  render() {
    return (
      <div className='upgrades-widget'>
        <h1>Modules</h1>
        <table className='upgrades-table'>
          <tr>
            <th>Type</th>
            <th>Current Level</th>
            <th>Compile</th>
          </tr>
          {upgrades.map(item => {
            return this.renderItem(item.upgradeName, item.upgradeLevel, item.upgradeCost);
          })}
        </table>
      </div>
    );
  }
}

/* function window */
const aiCode = 'function compute() { for(var i = 0; i < 2; ++i) { ++ComputingPower; } }'
class AiFunctionBox extends Component {
  render() {
    return (
      <div className='ai-function-box'>
        <h1>Artificial Intelligence</h1>
        {aiCode}
      </div>
    );
  }
}

/* income timer progress bar */
class TimerProgressBar extends Component {
  render() {
    return (
      <div className='timer-bar-outer'>
        <div className='timer-bar-inner'></div>
      </div>
    );
  }
}

/* win game progress bar */
class SingularityProgressBar extends Component {
  render() {
    return (
      <div className='singularity-bar-outer'>
        <div className='singularity-bar-inner'></div>
      </div>
    );
  }
}

/* singularity button */
function SingularityButton(props) {
  return (
    <div>
      <img className='create-singularity' src={logo} alt={'win'}/>
    </div>
  );
}

/* main game stuff */
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar/>
        <div className='main-body'>
          <UpgradesWidget/>
          <TimerProgressBar/>
          <AiFunctionBox/>
        </div>
        <SingularityProgressBar/>
                <SingularityButton/>
      </div>
    );
  }
}

export default App;
