import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Main from '../components/Main'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'
import ResultsContainer from '../containers/ResultsContainer'
const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <Main>
      <Route exact path='/' component={Home} />
      <Route path='/playerOne' render={props => (<PromptContainer {...props} header='Player One' />)} />
      <Route path='/playerTwo/:playerOne' render={props => (<PromptContainer {...props} header='Player Two' />)} />
      <Route path='/battle' component={ConfirmBattleContainer} />
      <Route path='/results' component={ResultsContainer} />
    </Main>
  </Router>
)
export default routes;
