export const loggedIn = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/logged', {
      headers: { Authorization: localStorage.getItem('token') }
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'USER_LOGIN', payload: data.user }))
  }
}

export const logIn = user => {
  return dispatch =>
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: 'USER_LOGIN', payload: data.user })
        localStorage.setItem('token', data.jwt)
      })
}

export const createUser = user => {
  return dispatch =>
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          password: user.password,
          avatar: user.avatar
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: 'USER_CREATED', payload: data.user })
        localStorage.setItem('token', data.jwt)
      })
}

export const incrementVote = (user_id, comic_id) => {
  return dispatch =>
    fetch('http://localhost:3000/comic_votes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        comic_vote: {
          user_id,
          comic_id
        }
      })
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: 'INCREMENT_VOTE', payload: data.comic_vote })
      })
}

export const getVotes = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/votes')
      .then(resp => resp.json())
      .then(comic_votes =>
        dispatch({ type: 'GET_VOTES', payload: comic_votes })
      )
      .catch(error => alert(error.message))
  }
}

export const getComics = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/comics')
      .then(resp => resp.json())
      .then(comics => dispatch({ type: 'GET_COMICS', payload: comics }))
      .catch(error => alert(error.message))
  }
}

export const getArtists = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/artists')
      .then(resp => resp.json())
      .then(artists => dispatch({ type: 'GET_ARTISTS', payload: artists }))
      .catch(error => alert(error.message))
  }
}

export const increaseCounter = () => ({
  type: 'COUNTER_UP'
})

export const increaseCounterBy = amount => ({
  type: 'COUNTER_UP_BY',
  payload: amount
})
