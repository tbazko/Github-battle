import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import gitHubHelpers from '../utils/githubHelpers'
import queryString from 'query-string'

export default class ConfirmBattleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playersInfo: []
    }
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
  }

  componentDidMount() {
    var query = queryString.parse(this.props.location.search);
    gitHubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      })
  }

  handleInitiateBattle() {
    this.props.history.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }

  render() {
     return(
      <ConfirmBattle
      isLoading={this.state.isLoading}
      onInitiateBattle={this.handleInitiateBattle}
      playersInfo={this.state.playersInfo} />
     )
  }
}

ConfirmBattleContainer