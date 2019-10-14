import React, { useEffect } from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as actions from '../actions'

import App from '../App'
import Login from './Login'
import SignUp from './SignUp'
import ComicsContainer from '../containers/ComicsContainer'
import ArtistsContainer from '../containers/ArtistsContainer'

import '../CSS/root.css'

const Root = ({ store, loggedIn }) => {
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      loggedIn()
    }
  })

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/comics' component={ComicsContainer} />
          <Route exact path='/artists' component={ArtistsContainer} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default connect(
  null,
  actions
)(Root)
