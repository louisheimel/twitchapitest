import React, { Component } from 'react'
import StreamerRow from './StreamerRow.js'

class Streamers extends Component {
  constructor(props) {
    super(props)
    this.streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    this.state = {
      streamerData: {
        users: []
      },
    }
  }

  componentWillMount() {
    console.log('streamers mounted!')
    // adapted from twitch docs: https://dev.twitch.tv/docs/v5/guides/using-the-twitch-api/#getting-a-client-id
    // and fetch docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const headers = new Headers({
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'swc83wn4usb962p2tafi4x4dryk03n',
      'Authorization': 'OAuth e8juwfw7a45n9nao7xy3mo83n9tdfj',
    })
    const twitchRequest = new Request('https://api.twitch.tv/kraken/users?login=' + this.streamers.join(','), { headers: headers })

    fetch(twitchRequest)
    .then(res => res.json())
    .then(data => {
      // adapted from this code: https://stackoverflow.com/questions/13894632/get-time-difference-between-two-dates-in-seconds
      const now = new Date();
      data.users.forEach(user => {
        // if less then one minute has elapsed since the user updated
        if (((now - (new Date(user.updated_at))) / 1000) < 60) {
          // then the user is probably still online
          user.online = true
        } else {
          user.online = false
        }
      })
      this.setState({
        streamerData: data,
      }, () => {
        console.log('streamer data is: ' + this.state.streamerData)
        console.log('data retrieved from Twitch server!')
        console.log(this.state.streamerData.users)
      })
    })
  }

  render() {
    const styles = {
      marginTop: '20px',
    }
    return (
      <div style={styles}>
        <table className="table">
          <thead>
            <tr>
              <td>
                Logo
              </td>
              <td>
                Name
              </td>
              <td>
                Status
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.currentCategory === 'All' ? this.state.streamerData.users.map(e => <StreamerRow logo={e.logo} name={e.name} online={e.online} bio={e.bio} />) : null}
            {this.props.currentCategory === 'Online' ? this.state.streamerData.users.filter(user => user.online).map(e => <StreamerRow logo={e.logo} name={e.name} online={e.online} bio={e.bio} />) : null}
            {this.props.currentCategory === 'Offline' ? this.state.streamerData.users.filter(user => !user.online).map(e => <StreamerRow logo={e.logo} name={e.name} online={e.online} bio={e.bio} />) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Streamers;
