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
