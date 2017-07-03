import React, { Component } from 'react';
import TwitchStreamerStatusButton from './components/TwitchStreamerStatusButton.js'
import Streamers from './components/Streamers.js'
import '../node_modules/bulma/css/bulma.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: 'All'
    }
  }

  handleClick(state) {
    this.setState({
      selectedCategory: state,
    })
  }

  render() {
    const styles = {
      display: 'flex',
      justifyContent: 'space-around',
    }
    return (
      <div className="App">
        <div style={styles}>
          <TwitchStreamerStatusButton category="All"  handleClick={this.handleClick.bind(this)} currentCategory={this.state.selectedCategory}/>
          <TwitchStreamerStatusButton category="Online"  handleClick={this.handleClick.bind(this)} currentCategory={this.state.selectedCategory}/>
          <TwitchStreamerStatusButton category="Offline"  handleClick={this.handleClick.bind(this)} currentCategory={this.state.selectedCategory}/>
        </div>
        <div style={styles}>
          <Streamers currentCategory={this.state.selectedCategory}/>
        </div>
      </div>
    );
  }
}

export default App;
