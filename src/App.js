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
    let divStyle = {
      display: 'flex',
      alignItems: 'center',
    };
    let h1Style;
    let buttonStyle;

    switch(this.props.styleLevel) {
      case 2:
        h1Style = powerTextStyle2;
        buttonStyle = ocButtonStyle2;
        break;        
      case 1:
        h1Style = powerTextStyle1;
        buttonStyle = ocButtonStyle1;
        break;
      default:
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

/*
  t1:
  #3066BE
  #6D9DC5
  #AEECEF
  t2:
  #355C7D
  #6b8ea5
  #b8fce4*/
/* main body stuff */
/* upgrade table */
const upgradesWidgetStyle0 = {
  width: '45%',
  height: '100%',
}
const upgradesWidgetStyle1 = {
  width: '45%',
  height: '100%',
}
const upgradesWidgetStyle2 = {
  width: '45%',
  height: '100%',
}

const titleStyle0 = {}
const titleStyle1 = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '10px',
}
const titleStyle2 = {
  textAlign: 'center',
  color: '#6b8ea5',
  fontWeight: 'bold',
  fontSize: '24px',
  marginBottom: '10px',
}

const upgradesTableStyle0 = {
  width: '100%',
}
const upgradesTableStyle1 = {
  width: '100%',
}
const upgradesTableStyle2 = {
  width: '100%',
}

const upgradesTdStyle0 = {
  border: '1px solid black',
}
const upgradesTdStyle1 = {
  border: '1px solid black',
  textAlign: 'center',
  verticalAlign: 'middle',
}
const upgradesTdStyle2 = {
  color: '#355C7D',
  fontWeight: 'bold',
  textAlign: 'center',
  verticalAlign: 'middle',
  height: '35px',
  borderBottom: '2px solid #355C7D',
}

const upgradesThStyle0 = {
  border: '1px solid black',
}
const upgradesThStyle1 = {
  border: '1px solid black',
  verticalAlign: 'middle',
  backgroundColor: 'AliceBlue',
}
const upgradesThStyle2 = {
  backgroundColor: '#355C7D',
  color: '#b8fce4',
  fontWeight: 'bold',
  fontSize: '24px',
  height: '40px',
  width: '30%',
  verticalAlign: 'middle',
}

const upgradeButtonStyle0 = {}
const upgradeButtonStyle1 = {
  padding: '4px',
  border: '1px solid #3066BE',
  backgroundColor: '#3066BE',
  color: '#AEECEF',
  fontWeight: 'bold',
}
const upgradeButtonStyle2 = {
  padding: '4px',
  width: '50%',
  height: '25px',
  border: '1px solid #6b8ea5',
  borderRadius: '4px',
  backgroundColor: '#b8fce4',
  color: '#355C7D',
  fontWeight: 'bold',
}

function UpgradeItem(props) {
  let tdStyle;
  let buttonStyle;
  switch(props.styleLevel) {
    case 2:
      tdStyle = upgradesTdStyle2;
      buttonStyle = upgradeButtonStyle2;
      break;
    case 1:
      tdStyle = upgradesTdStyle1;
      buttonStyle = upgradeButtonStyle1;
      break;
    default:
      tdStyle = upgradesTdStyle0;
      buttonStyle = upgradeButtonStyle0;
      break;
  }
  return (
    <tr key={props.key} className='upgrade-item'>
      <td style={tdStyle}>{props.upgradeName}</td>
      <td style={tdStyle} className='compile-column'>
        <button style={buttonStyle}onClick={() => props.onUpgrade(props.upgradeIndex)}>
          Cost: {props.upgradeCost} 
        </button>
      </td>
    </tr>
  );
}

class UpgradesWidget extends Component {
  renderItem(upgradeName, upgradeCost, upgradeIndex, styleLevel) {
    return (
      <UpgradeItem 
        onUpgrade={this.props.onUpgrade}
        upgradeName={upgradeName}
        upgradeCost={upgradeCost}
        upgradeIndex={upgradeIndex}
        styleLevel={styleLevel}
      />
    );
  }

  render() {
    let widgetStyle;
    let tableStyle;
    let thStyle;
    let titleStyle;
    let tableDivStyle;
    switch(this.props.styleLevel) {
      case 2:
        thStyle = upgradesThStyle2;
        tableStyle = upgradesTableStyle2;
        widgetStyle = upgradesWidgetStyle2;
        titleStyle = titleStyle2;
        tableDivStyle = {border: '2px solid #355C7D', height: '95%'};
        break;
      case 1:
        thStyle = upgradesThStyle1;
        tableStyle = upgradesTableStyle1;
        widgetStyle = upgradesWidgetStyle1;
        titleStyle = titleStyle1;
        tableDivStyle = {};
        break;
      default:
        thStyle = upgradesThStyle0;
        tableStyle = upgradesTableStyle0;
        widgetStyle = upgradesWidgetStyle0;
        titleStyle = titleStyle0;
        tableDivStyle = {};
        break;
    }
    if(this.props.visibleWidgets.UpgradesTable) {
      return (
        <div className='upgrades-widget' style={widgetStyle}>
          <h1 style={titleStyle}>Modules</h1>
          <div style={tableDivStyle}>
            <table className='upgrades-table' style={tableStyle}>
              <thead>
              <tr>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Compile</th>
              </tr>
              </thead>

              <tbody>
              {this.props.upgrades.map((item, index) => {
                if (!item.compiled && item.prerequisite && this.props.curPower >= item.upgradeCost)
                  return this.renderItem(item.upgradeName, item.upgradeCost, index, this.props.styleLevel);
                else
                  return null;
              })}
              </tbody>
            </table>            
          </div>
        </div>
      );
    }
    else {
      let divStyle = {
        display: 'flex',
      };
      return (
        <div className='upgrades-widget' style={widgetStyle}>
          {this.props.upgrades.map((item, index) => {
            if (!item.compiled && item.prerequisite && this.props.curPower >= item.upgradeCost) {
              return (
                <div style={divStyle}>
                  <h1> {item.upgradeName} </h1>

                  <button onClick={() => this.props.onUpgrade(index)}>
                    Cost: {item.upgradeCost}
                  </button>
                </div>
              );          
            }
            else
              return null;
          })}
        </div>
      );
    }
  }
}

const aiModuleStyle0 = {
  width: '45%',
  height: '100%',
}
const aiModuleStyle1 = {
  width: '45%',
  height: '100%',
}
const aiModuleStyle2 = {
  width: '45%',
  height: '100%',
}

const aiDivStyle0 = {
}
const aiDivStyle1 = {
  border: '1px solid black',
  padding: '16px',
}
const aiDivStyle2 = {
  border: '2px solid #355C7D',
  padding: '16px',
  height: '90%',
}

const aiTextStyle0 = {}
const aiTextStyle1 = {}
const aiTextStyle2 = {
  fontSize: '20px',
}

const purpleText = {
  color: '#355C7D',
}
const cyanText = {
  color: '#48D1CC',
}

/* function window */
class AiFunctionBox extends Component {
  render() {
    let titleStyle;
    let aiModuleStyle;
    let aiDivStyle;
    let aiTextStyle;
    let purpleTextStyle = {};
    let cyanTextStyle = {};
    switch(this.props.styleLevel) {
      case 2:
        titleStyle = titleStyle2;
        aiModuleStyle = aiModuleStyle2;
        aiDivStyle = aiDivStyle2;
        aiTextStyle = aiTextStyle2;
        purpleTextStyle = purpleText;
        cyanTextStyle = cyanText;
        break;
      case 1:
        titleStyle = titleStyle1;
        aiModuleStyle = aiModuleStyle1;
        aiDivStyle = aiDivStyle1;
        aiTextStyle = aiTextStyle1;
        break;
      default:
        titleStyle = titleStyle0;
        aiModuleStyle = aiModuleStyle0;
        aiDivStyle = aiDivStyle0;
        aiTextStyle = aiTextStyle0;
        break;
    }
    if (this.props.visibleWidgets.AiFunctionBox) {
      return (
        <div style={aiModuleStyle} className='ai-function-box'>
          <h1 style={titleStyle}>Artificial Intelligence</h1>
          <div style={aiDivStyle}>
            { this.props.styleLevel > 0 &&
              <div>
                <div style={aiTextStyle}>
                  <p><span style={purpleTextStyle}>{'function '}</span><span style={cyanTextStyle}>{'compute'}</span>{"() {"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={purpleTextStyle}>{'for (var '}</span>
                    <span style={cyanTextStyle}>{'i '}</span>
                    {'= '}
                    <span style={cyanTextStyle}>{'0'}</span>
                    {'; i < '}
                    <span style={cyanTextStyle}>{'2'}</span>
                    {'; ++i) {'}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" ++ComputingPower;"}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
                  <p>{"}"}</p>                
                </div>
                <div style={aiTextStyle}>
                  <p>&nbsp;</p>               
                </div>
              </div>
            }
            { this.props.styleLevel === 0 &&
              <div style={aiTextStyle}>
                <p>{'function compute() { for(var i = 0; i < 2; ++i) { ++ComputingPower; }}'}</p>
              </div>
            }
            </div>
        </div>
      );      
    }
    else {
      return null;
    }
  }
}

const timerBarOuter0 = {
  display: 'flex',
  flexDirection: 'column-reverse',
  width: '2%',
  height: '90%'
}
const timerBarOuter1 = {
  display: 'flex',
  flexDirection: 'column-reverse',
  border: '1px solid Black',
  width: '1%',
  height: '90%'
}
const timerBarOuter2 = {
  display: 'flex',
  flexDirection: 'column-reverse',
  border: '2px solid #355C7D',
  borderRadius: '12px',
  width: '2%',
  height: '90%'
}
const timerBarInner0 = {
}
const timerBarInner1 = {
  backgroundColor: '#3066BE',
  width: '100%',
  height: '25%',
}
const timerBarInner2 = {
  backgroundColor: '#b8fce4',
  width: '100%',
  height: '25%',
  borderRadius: '12px',
}
/* income timer progress bar */
class TimerProgressBar extends Component {
  render() {
    let outerStyle;
    let innerStyle;
    switch(this.props.styleLevel) {
      case 2:
        outerStyle = timerBarOuter2;
        innerStyle = timerBarInner2;
        break;
      case 1:
        outerStyle = timerBarOuter1;
        innerStyle = timerBarInner1;
        break;
      default:
        outerStyle = timerBarOuter0;
        innerStyle = timerBarInner0;
        break;
    }
    if (this.props.visibleWidgets.AiTimerBar) {
      return (
        <div style={outerStyle} className='timer-bar-outer'>
          <div style={innerStyle}className='timer-bar-inner'></div>
        </div>
      );      
    }
    else {
      return null;
    }
  }
}

const singularityBarOuter0 = {
  backgroundColor: 'Cornsilk',
  margin: '1% auto',
  height: '20px',
  width: '60%'
}
/* win game progress bar */
class SingularityProgressBar extends Component {
  render() {
    if (this.props.visibleWidgets.SingularityProgressBar) {
      return (
        <div className='singularity-bar-outer' style={singularityBarOuter0}>
          <div className='singularity-bar-inner' style={{width: this.props.curProgress + '%'}}></div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

const singularityButton0 = {
  marginLeft: '48%',
  marginRight: 'auto',
  marginTop: '16px',
  width: '4%',
  height: '4%'
}
/* singularity button */
function SingularityButton(props) {
  if(props.visibleWidgets.SingularityButton) {
    return (
      <div>
        <img className='create-singularity' src={logo} alt={'win'} style={singularityButton0}/>
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
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '75%',
  width: '80%',
  minWidth: '800px',
  margin: '0 auto'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComputingPower: 100000,
      currentOverclockIncrement: 8,
      maxComputingPower: 1048576,
      styleLevel: 1,

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
            styleLevel={this.state.styleLevel}
          />
          <TimerProgressBar 
            visibleWidgets={this.state.visibleWidgets}
            styleLevel={this.state.styleLevel}
          />
          <AiFunctionBox 
            visibleWidgets={this.state.visibleWidgets}
            styleLevel={this.state.styleLevel}
          />
        </div>
        <SingularityButton visibleWidgets={this.state.visibleWidgets}/>
        <SingularityProgressBar 
          curProgress={100*(this.state.currentComputingPower/this.state.maxComputingPower)}
          visibleWidgets={this.state.visibleWidgets}
        />
      </div>
    );
  }
}

/* constants */

export default App;
