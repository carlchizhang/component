import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* 
  colors: from darkest to lightest
  t1:
  #3066BE
  #6D9DC5
  #AEECEF
  t2:
  #355C7D
  #6b8ea5
  #b8fce4
*/

/* Header stuff */
const powerDisplayStyle0 = {
  display: 'flex',
  alignItems: 'center',
}
const powerDisplayStyle1 = {
  display: 'flex',
  alignItems: 'center',
}
const powerDisplayStyle2 = {
  display: 'flex',
  alignItems: 'center',
}

const powerTextStyle0 = {
  marginRight: '4px',
}
const powerTextStyle1 = {
  marginRight: '4px',
  color: '#3066BE',
}
const powerTextStyle2 = {
  marginRight: '4px',
  paddingRight: '12px',
  fontWeight: 'bold',
  color: '#b8fce4',
}

const ocButtonStyle0 = {
  marginLeft: '4px',
}
const ocButtonStyle1 = {
  marginLeft: '4px',
  padding: '4px',
  border: '1px solid #3066BE',
  backgroundColor: '#3066BE',
  color: '#AEECEF',
  fontWeight: 'bold',
}
const ocButtonStyle2 = {
  marginLeft: '4px',
  padding: '4px',
  width: '75px',
  border: '1px solid #6b8ea5',
  borderRadius: '4px',
  backgroundColor: '#b8fce4',
  color: '#355C7D',
  fontWeight: 'bold',
}

class PowerDisplay extends Component {
  render() {
    let divStyle;
    let h1Style;
    let buttonStyle;

    switch(this.props.styleLevel) {
      case 2:
        divStyle = powerDisplayStyle2;
        h1Style = powerTextStyle2;
        buttonStyle = ocButtonStyle2;
        break;        
      case 1:
        divStyle = powerDisplayStyle1;
        h1Style = powerTextStyle1;
        buttonStyle = ocButtonStyle1;
        break;
      default:
        divStyle = powerDisplayStyle0;
        h1Style = powerTextStyle0;
        buttonStyle = ocButtonStyle0;
        break;
    }

    return (
      <div className='power-display' style={divStyle}>
        <h1 style={h1Style}>Computing Power: {this.props.curComputingPower} </h1>

        <button 
          style={buttonStyle}
          className='increment-power' 
          onClick={this.props.overclock}
        >
          Overclock
        </button>
      </div>
    );
  }
}


const logoStyle0 = {
  width: '40px',
  height: '40px'
}

const navbarStyle0 = {
  backgroundColor: 'AliceBlue',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  marginBottom: '2%'
}
const navbarStyle1 = {
  backgroundColor: 'AliceBlue',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '2%'
}
const navbarStyle2 = {
  backgroundColor: '#355C7D',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '2%'
}

class Navbar extends Component {
  render() {
    let navbarStyle;
    let buttonStyle;
    switch(this.props.styleLevel) {
      case 2:
        navbarStyle = navbarStyle2;
        buttonStyle = ocButtonStyle2;
        break;
      case 1:
        navbarStyle = navbarStyle1;
        buttonStyle = ocButtonStyle1;
        break;
      default:
        navbarStyle = navbarStyle0;
        buttonStyle = ocButtonStyle0;
        break;
    }

    if(this.props.visibleWidgets.Navbar) {
      return (
        <header className='navbar' style={navbarStyle}>
          {this.props.styleLevel > 0 &&
            <img className='logo' src={logo} alt={'title'} style={logoStyle0}/>
          }
          <PowerDisplay
            curComputingPower={this.props.curPower}
            overclock={this.props.overclock}
            styleLevel={this.props.styleLevel}
          />
          <div>
            <button className='reset-game' style={buttonStyle}>Reset</button>  
            <button className='about-game' style={buttonStyle}>About</button>          
          </div>
        </header>
      );      
    }
    else {
      return (
        <PowerDisplay
            curComputingPower={this.props.curPower}
            overclock={this.props.overclock}
            styleLevel={this.props.styleLevel}
        />
      );
    }

  }
}


/* main body stuff */
/* upgrade table */
const upgradesWidgetStyle0 = {
  width: '45%',
  height: '100%',
}

const upgradesTableStyle0 = {
  width: '100%',
}

const upgradesThTdStyle0 = {
  border: '1px solid black',
}
function UpgradeItem(props) {
  return (
    <tr key={props.key} className='upgrade-item'>
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
      <UpgradeItem 
        onUpgrade={this.props.onUpgrade}
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
          {this.props.visibleWidgets.UpgradesTable &&
            <thead>
            <tr>
              <th>Type</th>
              <th>Compile</th>
            </tr>
            </thead>
          }

          <tbody>
          {this.props.upgrades.map((item, index) => {
            if (!item.compiled && item.prerequisite && this.props.curPower >= item.upgradeCost)
              return this.renderItem(item.upgradeName, item.upgradeCost, index);
            else
              return null;
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

/* function window */
const aiCode = 'function compute() { for(var i = 0; i < 2; ++i) { ++ComputingPower; } }'
class AiFunctionBox extends Component {
  render() {
    if (this.props.visibleWidgets.AiFunctionBox) {
      return (
        <div className='ai-function-box'>
          <h1>Artificial Intelligence</h1>
          {aiCode}
        </div>
      );      
    }
    else {
      return null;
    }
  }
}

/* income timer progress bar */
class TimerProgressBar extends Component {
  render() {
    if (this.props.visibleWidgets.AiTimerBar) {
      return (
        <div className='timer-bar-outer'>
          <div className='timer-bar-inner'></div>
        </div>
      );      
    }
    else {
      return null;
    }
  }
}

/* win game progress bar */
class SingularityProgressBar extends Component {
  render() {
    if (this.props.visibleWidgets.SingularityProgressBar) {
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
  if(props.visibleWidgets.SingularityButton) {
    return (
      <div>
        <img className='create-singularity' src={logo} alt={'win'}/>
      </div>
    ); 
  }
  else {
    return null;
  }
}

/* main game stuff */
const mainBodyStyle0 = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: '75%',
  width: '70%',
  minWidth: '800px',
  margin: '0 auto'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComputingPower: 0,
      currentOverclockIncrement: 8,
      maxComputingPower: 1048576,
      styleLevel: 0,

      visibleWidgets: {
        Navbar: true,
        UpgradesTable: true,
        AiTimerBar: true,
        AiFunctionBox: true,
        SingularityProgressBar: true,
        SingularityButton: true,
      },

      upgrades: [
        {upgradeName: 'High-Energy Capacitors', upgradeCost: 512, compiled: false, prerequisite: true},
        {upgradeName: 'Quantum Energy States', upgradeCost: 2048, compiled: false, prerequisite: false},
        {upgradeName: 'Applied Superconductivity', upgradeCost: 16384, compiled: false, prerequisite: false},
        {upgradeName: 'Digital Navigation', upgradeCost: 256, compiled: false, prerequisite: true},
        {upgradeName: 'Assembly Patterns', upgradeCost: 2048, compiled: false, prerequisite: true},
        {upgradeName: 'Construction Templates', upgradeCost: 65536, compiled: false, prerequisite: true},
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

    //can code invidual event handlers for upgrades but i'm lazy and this is a proof of concept app
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
        this.changeVisibility('Navbar', true);
        break;
      case 4:
        this.changeVisibility('UpgradesTable', true);
        break;
      case 5:
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
          visibleWidgets={this.state.visibleWidgets}
          styleLevel={this.state.styleLevel}
        />
        <div className='main-body' style={mainBodyStyle0}>
          <UpgradesWidget 
            curPower={this.state.currentComputingPower}
            upgrades={this.state.upgrades}
            onUpgrade={this.itemUpgraded.bind(this)}
            visibleWidgets={this.state.visibleWidgets}
          />
          <TimerProgressBar visibleWidgets={this.state.visibleWidgets}/>
          <AiFunctionBox visibleWidgets={this.state.visibleWidgets}/>
        </div>
        <SingularityProgressBar 
          curProgress={100*(this.state.currentComputingPower/this.state.maxComputingPower)}
          visibleWidgets={this.state.visibleWidgets}
        />
        <SingularityButton visibleWidgets={this.state.visibleWidgets}/>
      </div>
    );
  }
}

/* constants */

export default App;
