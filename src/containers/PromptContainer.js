import React from 'react'
import Prompt from '../components/Prompt'

export default class PromptContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }

  handleSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if(this.props.match.params.playerOne) {
      this.props.history.push({
        pathname: '/battle',
        search: '?playerOne=' + this.props.match.params.playerOne + '&playerTwo=' + this.state.username
      })
    } else {
      this.props.history.push('/playerTwo/' + this.state.username)
    }
  }

  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
     return(
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.header}
        username={this.state.username} />
     )
  }
}