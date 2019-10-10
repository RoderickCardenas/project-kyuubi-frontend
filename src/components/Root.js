import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import Login from './Login'
import SignUp from './SignUp'
import ComicsContainer from '../containers/ComicsContainer'
import Artists from './Artists'

import '../CSS/root.css'

const Root = ({ store }) => (
< Provider store={store} >
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/comics' component={ComicsContainer} />
            <Route exact path='/artists' component={Artists} />
        </Switch>
    </Router>
</ Provider >
)

export default Root