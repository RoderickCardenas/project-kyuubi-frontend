import React, { useEffect } from 'react'
import { Provider, connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom'
import * as actions from '../actions'

import App from '../App'
import Login from './Login'
import SignUp from './SignUp'
import Basket from './Basket'
import ComicsContainer from '../containers/ComicsContainer'
import ArtistsContainer from '../containers/ArtistsContainer'
import ComicPreview from './ComicPreview'
import Profile from './Profile'

import '../CSS/root.css'

const Root = ({ store, loggedIn }) => {
  useEffect(
    () => {
      if (localStorage.getItem('token') !== null) {
        loggedIn()
      }
    },
    [loggedIn]
  )

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/comics' component={ComicsContainer} />
          <Route exact path='/artists' component={ArtistsContainer} />
          <Route exact path='/basket' component={Basket} />
          <Route exact path='/comics/:id' children={<Child />} />
        </Switch>
      </Router>
    </Provider>
  )
}

const Child = () => {
  let { id } = useParams()

  return <ComicPreview id={id} />
}

export default connect(
  null,
  actions
)(Root)
