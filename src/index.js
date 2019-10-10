import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import initialState from './reducers/initialState'
import * as serviceWorker from './serviceWorker'
import Root from './components/Root'

const store = createStore(
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(<Root store={ store }/>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
