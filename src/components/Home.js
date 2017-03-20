import React from 'react';
import {Link} from 'react-router-dom'
import MainContainer from './MainContainer'

export default class Home extends React.Component {
  render() {
    return(
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
}
