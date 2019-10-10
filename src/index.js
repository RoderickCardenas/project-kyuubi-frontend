import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import currentUser from './reducers/currentUser'
import getComics from './reducers/getComics'

import * as serviceWorker from './serviceWorker'
import Root from './components/Root'

const combinedReducers = combineReducers({
    currentUser, 
    comics: getComics,
})


const potato = store => next => action => {
    if (typeof action === 'function') {
        action(store.dispatch, store.getState)
    } 
    if (typeof action === 'object') {
        next(action)
    }     
}

const store = createStore(
    combinedReducers,
    compose(
        applyMiddleware(potato),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

render(<Root store={ store }/>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()