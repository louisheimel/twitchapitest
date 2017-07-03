import React, { Component } from 'react';

class TwitchStreamerStatusButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount = () => {
    console.log('button mounted!')
    fetch('https://api.twitch.tv/kraken/users/44322889?client_id=swc83wn4usb962p2tafi4x4dryk03n')
    .then(res => console.log(res))

  }
  handleClick = (e) => {
    this.props.handleClick(this.props.category)
  }

  render() {
    const styles = {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-around',
    }

    return (
      <div style={styles}>
        <div className={"button is-large" + (this.props.category === this.props.currentCategory ? ' is-primary' : '')} onClick={this.handleClick}>{this.props.category}</div>
      </div>
    );
  }
}

export default TwitchStreamerStatusButton;
