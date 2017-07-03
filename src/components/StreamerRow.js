import React, { Component } from 'react'

class StreamerRow extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const styles = {
      width: '100px',
      height: '100px',
    }
    return <tr>
            <td><img style={styles} src={this.props.logo} alt={this.props.bio} /></td>
            <td><a href={"https://www.twitch.tv/" + this.props.name}>{this.props.name}</a></td>
            <td>{this.props.online ? 'Online' : 'Offline'}</td>
          </tr>;
  }
}

export default StreamerRow; 
