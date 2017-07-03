import React, { Component } from 'react';

class TwitchStreamerStatusButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
        <div className={"button is-large" + (this.props.selected ? ' is-primary' : '')} onClick={this.handleClick}>{this.props.category}</div>
      </div>
    );
  }
}

export default TwitchStreamerStatusButton;
