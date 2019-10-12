export const signin = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      headers: { Authorization: localStorage.getItem('token') }
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'USER_SIGNIN', payload: user }))
  }
}

export const createUser = () => {
  return dispatch =>
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          first_name: 'Nic',
          last_name: 'charlet',
          username: 'niccharlet',
          password: 'password',
          avatar:
            'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg'
        }
      })
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'USER_CREATED', payload: user }))
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
