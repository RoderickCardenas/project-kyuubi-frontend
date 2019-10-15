import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// reducers
import currentUser from './reducers/currentUser'
import getComics from './reducers/getComics'
import getArtists from './reducers/getArtists'
import getVotes from './reducers/comicVotes'

import * as serviceWorker from './serviceWorker'
import Root from './components/Root'
import getCompleteComic from './reducers/getCompleteComic'

const combinedReducers = combineReducers({
  votes: getVotes,
  currentUser,
  comics: getComics,
  artists: getArtists,
  comic_preview: getCompleteComic
})

const potato = ({ dispatch, getState }) => next => action =>
  typeof action === 'function' ? action(dispatch, getState) : next(action)

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(potato),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
