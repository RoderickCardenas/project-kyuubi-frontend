export const signin = () => {
  return dispatch => {
    fetch('userUrl', {
      headers: { Authorization: localStorage.getItem('token') }
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'USER_SIGNIN', payload: user }))
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
