import React, { Component } from 'react';
import TwitchStreamerStatusButton from './components/TwitchStreamerStatusButton.js'
import Streamers from './components/Streamers.js'
import '../node_modules/bulma/css/bulma.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: 'All' }
  }

  handleClick(state) {
    this.setState({
      selectedCategory: state,
    })
  }

  render() {
    const appStyles = {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
    },
    paragraphStyles = {
      marginBottom: '20px'
    },
    globalAppStyles = {
      textAlign: 'center'
    },
    buttonStyles = {
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      marginTop: '20px',
    },
    streamersStyles = {
      display: 'flex',
    }

    return (
      <div className="App" style={globalAppStyles}>
        <div style={appStyles}>
          <div style={buttonStyles}>
            <TwitchStreamerStatusButton category="All"  handleClick={this.handleClick.bind(this)} currentCategory={this.state.selectedCategory}/>
            <TwitchStreamerStatusButton category="Online"  handleClick={this.handleClick.bind(this)} currentCategory={this.state.selectedCategory}/>
            <TwitchStreamerStatusButton category="Offline"  handleClick={this.handleClick.bind(this)} currentCategory={this.state.selectedCategory}/>
          </div>
          <div style={streamersStyles}>
            <Streamers currentCategory={this.state.selectedCategory} styles={streamersStyles}/>
          </div>
        </div>
        <p style={paragraphStyles}>Code repository: <a href="https://github.com/louisheimel/twitchapitest">https://github.com/louisheimel/twitchapitest</a></p>
      </div>
    );
  }
}

export default App;
