import React, { Component } from 'react';
import TwitchStreamerStatusButton from './components/TwitchStreamerStatusButton.js'
import '../node_modules/bulma/css/bulma.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      All: true,
      Online: false,
      Offline: false,
    }
  }

  handleClick(state) {
    this.setState({
      All: state === 'All',
      Online: state === 'Online',
      Offline: state === 'Offline'
    })
  }

  render() {
    const styles = {
      display: 'flex',
      justifyContent: 'space-around',
    }
    return (
      <div className="App" style={styles}>
        <TwitchStreamerStatusButton category="All" selected={this.state.All} handleClick={this.handleClick.bind(this)}/>
        <TwitchStreamerStatusButton category="Online" selected={this.state.Online} handleClick={this.handleClick.bind(this)}/>
        <TwitchStreamerStatusButton category="Offline" selected={this.state.Offline} handleClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
