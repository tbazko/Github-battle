import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

function ConfirmBattle(props) {
  return props.isLoading === true
  ? <Loading speed={300} text='Waiting' />
  : <MainContainer>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
      <UserDetailsWrapper header="Player 1">
        <UserDetails info={props.playersInfo[0]} />
      </UserDetailsWrapper>
      <UserDetailsWrapper header="Player 2">
        <UserDetails info={props.playersInfo[1]} />
      </UserDetailsWrapper>
    </div>
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-12" style={{marginTop: '25px'}}>
        <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
          Initiate battle!
        </button>
      </div>
      <div className="col-sm-12" style={{marginTop: '25px'}}>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-danger">
            Reselect Players
          </button>
          </Link>
      </div>
    </div>
  </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default ConfirmBattle;