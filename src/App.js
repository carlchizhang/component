import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Header stuff */
class PowerDisplay extends Component {
  render() {
    return (
      <div className='power-display'>
        <h1>Computing Power: {this.props.curComputingPower} </h1>

        <button 
          className='increment-power' 
          onClick={this.props.overclock}
        >
          Overclock
        </button>
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <header className='navbar'>
        <img className='logo' src={logo} alt={'title'}/>
        <PowerDisplay
          curComputingPower={this.props.curPower}
          overclock={this.props.overclock}
        />
        <div>
          <button className='reset-game'>Reset</button>  
          <button className='about-game'>About</button>          
        </div>
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
      <td className='compile-column'>
        <button onClick={() => props.onUpgrade(props.upgradeIndex)}>
          Cost: {props.upgradeCost} 
        </button>
      </td>
    </tr>
  );
}

class UpgradesWidget extends Component {
  renderItem(upgradeName, upgradeCost, upgradeIndex) {
    return (
      <UpgradeItem onUpgrade={this.props.onUpgrade}
        upgradeName={upgradeName}
        upgradeCost={upgradeCost}
        upgradeIndex={upgradeIndex}
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
            <th>Compile</th>
          </tr>
          {this.props.upgrades.map((item, index) => {
            if (!item.compiled && item.prerequisite && this.props.curPower >= item.upgradeCost)
              return this.renderItem(item.upgradeName, item.upgradeCost, index);
            else
              return;
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
    if (this.props.visible) {
      return (
        <div className='singularity-bar-outer'>
          <div className='singularity-bar-inner' style={{width: this.props.curProgress + '%'}}></div>
        </div>
      );
    }
    else {
      return null;
    }
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
  constructor(props) {
    super(props);
    this.state = {
      currentComputingPower: 0,
      currentOverclockIncrement: 8,
      maxComputingPower: 1048576,
      visibleWidgets: {
        SingularityProgressBar: false,
      },

      upgrades: [
        {upgradeName: 'High-Energy Capacitors', upgradeCost: 256, compiled: false, prerequisite: true},
        {upgradeName: 'Quantum Energy States', upgradeCost: 2048, compiled: false, prerequisite: false},
        {upgradeName: 'Applied Superconductivity', upgradeCost: 16384, compiled: false, prerequisite: false},
        {upgradeName: 'Construction Templates', upgradeCost: 10, compiled: false, prerequisite: true},
      ],
    };
  }

  changePower(val) {
    let newComputingPower = this.state.currentComputingPower + val;
    if (newComputingPower > this.state.maxComputingPower) {
      newComputingPower = this.state.maxComputingPower;
    }
    else if (newComputingPower < 0) {
      newComputingPower = 0;
    }

    this.setState({
      currentComputingPower: newComputingPower
    });
  }

  overclock() {
    this.changePower(this.state.currentOverclockIncrement);
  }

  changeVisibility(name, visible) {
    let visibleWidgets = Object.assign({}, this.state.visibleWidgets);
    if (visibleWidgets.hasOwnProperty(name) && (visible === true || visible === false)) {
      visibleWidgets[name] = visible;
    }

    this.setState({
      visibleWidgets: visibleWidgets
    });
  }

  itemUpgraded(itemIndex) {
    let upgrades = this.state.upgrades.slice();
    let upgrade = upgrades[itemIndex];

    if (!upgrade || this.state.currentComputingPower < upgrade.upgradeCost || upgrade.compiled) {
      return;
    }

    switch(itemIndex) {
      case 0:
        this.setState({currentOverclockIncrement: 32});
        upgrades[1].prerequisite = true;
        break;
      case 1:
        this.setState({currentOverclockIncrement: 256});
        upgrades[2].prerequisite = true;
        break;
      case 2:
        this.setState({currentOverclockIncrement: 2048});
        break;
      case 3:
        this.changeVisibility('SingularityProgressBar', true);
        break;
      default:
        console.log('Invalid Upgrade');
    }
    upgrade.compiled = true;
    this.changePower(-upgrade.upgradeCost);
    this.setState({upgrades: upgrades});
  }

  render() {
    return (
      <div className='App'>
        <Navbar
          curPower={this.state.currentComputingPower}
          overclock={this.overclock.bind(this)}
        />
        <div className='main-body'>
          <UpgradesWidget 
            curPower={this.state.currentComputingPower}
            upgrades={this.state.upgrades}
            onUpgrade={this.itemUpgraded.bind(this)}
          />
          <TimerProgressBar/>
          <AiFunctionBox/>
        </div>
        <SingularityProgressBar 
          curProgress={100*(this.state.currentComputingPower/this.state.maxComputingPower)}
          visible={this.state.visibleWidgets.SingularityProgressBar}
        />
        <SingularityButton/>
      </div>
    );
  }
}

/* constants */

export default App;
