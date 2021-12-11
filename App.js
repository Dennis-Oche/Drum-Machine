import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      volume: '50',
      bankToggle: {},
      audiosrc: {}
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.volumeChange = this.volumeChange.bind(this);
    this.keyChange = this.keyChange.bind(this);
    this.btnEffect = this.btnEffect.bind(this);
    this.btnBackground = this.btnBackground.bind(this);
    this.checkBank = this.checkBank.bind(this);
    this.checkPower = this.checkPower.bind(this);
  }
  
  keyChange = (key) => {
    switch (key.keyCode) {
      case 81:
        var button = document.getElementById('Q').parentElement;
        var buttonValue = button.value;
        var audioSource = button.children[0];
        break;
      case 113:
        button = document.getElementById('Q').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 87:
        button = document.getElementById('W').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 119:
        button = document.getElementById('W').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 69:
        button = document.getElementById('E').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 101:
        button = document.getElementById('E').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 65:
        button = document.getElementById('A').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 97:
        button = document.getElementById('A').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 83:
        button = document.getElementById('S').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 115:
        button = document.getElementById('S').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 68:
        button = document.getElementById('D').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 100:
        button = document.getElementById('D').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 90:
        button = document.getElementById('Z').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 122:
        button = document.getElementById('Z').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 88:
        button = document.getElementById('X').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 120:
        button = document.getElementById('X').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 67:
        button = document.getElementById('C').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      case 99:
        button = document.getElementById('C').parentElement;
        buttonValue = button.value;
        audioSource = button.children[0];
        break;
      default:
        // do nothing
    }
    var power = document.getElementById('power');
    this.btnEffect(button);
    setTimeout(
      () => this.btnBackground(button), 
      50
    );
    
    this.setState({
      text: buttonValue
    })
    
    if (power.checked === true) {
      audioSource.play();
    }
  }
  
  btnBackground = (btn) => {
    btn.style.background = 'grey';
    btn.style.width = '100px';
    btn.style.height = '80px';
  }
  
  btnEffect = (btn) => {
    var power = document.getElementById('power');
    if (power.checked === true) {
      btn.style.background = 'blue';
      btn.style.width = '98px';
      btn.style.height = '78px';
    } else {
      btn.style.width = '98px';
      btn.style.height = '78px';
    }
  };
  
  handleChange = (e) => {
    var buttonValue = e.target.value;
    var button = e.target;
    var audioSource = button.children[0];
    var power = document.getElementById('power');
    
    this.btnEffect(button);
    setTimeout(
      () => this.btnBackground(button), 50
    );
    
    this.setState({
      text: buttonValue
    })
    if (power.checked === true) {
      audioSource.play();
    }
  }
  
  volumeChange = (e) => {
    var slider = document.getElementById('myRange');
    var volumeValue = e.target.value;
    var color = 'linear-gradient(90deg, rgb(117,252,117) ' + volumeValue + '%, rgb(214,214,214) ' + volumeValue + '%)';
    this.setState({
      volume: volumeValue,
      text: 'Volume: ' + volumeValue
    })
    slider.style.background = color;
    setTimeout(
      () => this.setState({
        text: ''
      }), 1000
    );
  }
  
  checkBank = () => {
    const heaterSound = {
      'Q': "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      'W': "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      'E': "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      'A': "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      'S': "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      'D': "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      'Z': "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      'X': "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      'C': "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    };
    const smoothPianoSound = {
      'Q': "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      'W': "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      'E': "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      'A': "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      'S': "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      'D': "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      'Z': "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      'X': "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      'C': "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    };
    
    const heaterKit = {
      'Q': "Heater 1",
      'W': "Heater 2",
      'E': "Heater 3",
      'A': "Heater 4",
      'S': "Clap",
      'D': "Open HH",
      'Z': "Kick n' Hat",
      'X': "Kick",
      'C': "Closed HH"
    };
    const smoothPianoKit = {
      'Q': "Chord 1",
      'W': "Chord 2",
      'E': "Chord 3",
      'A': "Shaker",
      'S': "Open HH",
      'D': "Closed HH",
      'Z': "Punchy Kick",
      'X': "Side Stick",
      'C': "Snare"
    };
    
    var bank = document.getElementById('bank');
    if (bank.checked === true) {
      this.setState({
        bankToggle: smoothPianoKit,
        audiosrc: smoothPianoSound,
        text: 'Smooth Piano Kit'
      })
    } else {
      this.setState({
        bankToggle: heaterKit,
        audiosrc: heaterSound,
        text: 'Heater Kit'
      })
    }
  }
  
  checkPower = () => {
    var power = document.getElementById('power');
    var display = document.getElementById('display');
    var slider = document.getElementById('myRange');
    var bank = document.getElementById('bank');
    
    if (power.checked === true) {
      display.disabled = false;
      slider.disabled = false;
      bank.disabled = false;
      this.checkBank();
      this.setState({
        text: ''
      })
    } else {
      display.disabled = true;
      slider.disabled = true;
      bank.disabled = true;
      this.setState({
        text: '',
        bankToggle: {},
      })
    }
  }
  
  componentDidMount() {
    this.checkBank();
    this.checkPower();
  }
  
  render() {    
    window.addEventListener("keydown", this.keyChange, false);
    
    return(
      <div className='mainContainer'>
        <div id='drum-machine'>
          <div id='padSection'>
            <button className='drum-pad' value={this.state.bankToggle.Q} onClick={this.handleChange}>
              <audio class="clip" id="Q" src={this.state.audiosrc.Q}></audio>
              <h3>Q</h3>
            </button>
            <button className='drum-pad' value={this.state.bankToggle.W} onClick={this.handleChange}>
              <audio class="clip" id="W" src={this.state.audiosrc.W}></audio>
              <h3>W</h3>
            </button>
            <button className='drum-pad' value={this.state.bankToggle.E} onClick={this.handleChange}>
              <audio class="clip" id="E" src={this.state.audiosrc.E}></audio>
              <h3>E</h3>
            </button>
            <button className='drum-pad' value={this.state.bankToggle.A} onClick={this.handleChange}>
              <audio class="clip" id="A" src={this.state.audiosrc.A}></audio>
              <h3>A</h3>
            </button>
            <button className='drum-pad' value={this.state.bankToggle.S} onClick={this.handleChange}>
              <audio class="clip" id="S" src={this.state.audiosrc.S}></audio>
              <h3>S</h3>
            </button>
            <button className='drum-pad' value={this.state.bankToggle.D} onClick={this.handleChange}>
              <audio class="clip" id="D" src={this.state.audiosrc.D}></audio>
              <h3>D</h3>
            </button>
            <button className='drum-pad' value={this.state.bankToggle.Z} onClick={this.handleChange}>
              <audio class="clip" id="Z" src={this.state.audiosrc.Z}></audio>
              <h3>Z</h3>
            </button>
            <button className='drum-pad' value={this.state.bankToggle.X} onClick={this.handleChange}>
              <audio class="clip" id="X" src={this.state.audiosrc.X}></audio>
              <h3>X</h3>
            </button>
            <button className='drum-pad' value={this.state.bankToggle.C} onClick={this.handleChange}>
              <audio class="clip" id="C" src={this.state.audiosrc.C}></audio>
              <h3>C</h3>
            </button>
          </div>
          <div id='controls'>
            <div class='mode'>
              <h4>Power</h4>
              <label class="switch">
                <input type="checkbox" id='power' onClick={this.checkPower}/>
                <span class="slider"></span>
              </label>
            </div>
            <br/>
            <input id='display' type='text' value={this.state.text}></input>
            <div class='volume'>
              <div class='field'>
                <input type='range' min='0' max='100' id='myRange' class='slideBar' value={this.state.volume} onInput={this.volumeChange}/>
              </div>
            </div>
            <div class='mode'>
              <h4>Bank</h4>
              <label class="switch">
                <input type="checkbox" id='bank' onClick={this.checkBank}/>
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))

export default App;
