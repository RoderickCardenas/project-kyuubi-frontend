import API from '../API'

export const loggedIn = () => {
  return dispatch => {
    API.loggedIn().then(data =>
      dispatch({ type: 'USER_LOGIN', payload: data.user.user })
    )
  }
}

export const logIn = user => {
  return dispatch =>
    API.logIn(user).then(data => {
      if (data.message) {
        // alert.(data.message)
      } else {
        dispatch({ type: 'USER_LOGIN', payload: data.user.user })
        localStorage.setItem('token', data.jwt)
      }
    })
}

export const logOut = () => {
  return dispatch => {
    localStorage.removeItem('token')
    dispatch({ type: 'USER_SIGNOUT' })
  }
}

export const emptyCart = () => {
  return dispatch => {
    localStorage.removeItem('cart')
    dispatch({ type: 'EMPTY_CART', payload: [] })
  }
}

export const makePurchase = (user_id, comic_id) => {
  return dispatch => {
    API.createPurchase(user_id, comic_id).then(purchase => {
      API.loggedIn().then(data =>
        dispatch({ type: 'USER_LOGIN', payload: data.user.user })
      )
      localStorage.removeItem('cart')
      dispatch({ type: 'EMPTY_CART', payload: [] })
    })
  }
}

export const createUser = user => {
  return dispatch =>
    API.createUser(user).then(data => {
      dispatch({ type: 'USER_CREATED', payload: data.user.user })
      localStorage.setItem('token', data.jwt)
    })
}

export const incrementVote = (user_id, comic_id) => {
  return (dispatch, getState) =>
    API.incrementVote(user_id, comic_id).then(data => {
      if (data.message) {
        alert(data.message)
      } else {
        dispatch({ type: 'GET_COMPLETE_COMIC', payload: data.complete_comic })
        API.loggedIn().then(data =>
          dispatch({ type: 'USER_LOGIN', payload: data.user.user })
        )
      }
    })
}

export const getComics = () => {
  return dispatch =>
    API.getComics()
      .then(comics => dispatch({ type: 'GET_COMICS', payload: comics }))
      .catch(error => alert(error.message))
}

export const getCompleteComic = id => {
  return dispatch => {
    API.getCompleteComic(id)
      .then(comic =>
        dispatch({ type: 'GET_COMPLETE_COMIC', payload: comic.complete_comic })
      )
      .catch(error => alert(error.message))
  }
}

export const getArtists = () => {
  return dispatch => {
    API.getArtists()
      .then(artists => dispatch({ type: 'GET_ARTISTS', payload: artists }))
      .catch(error => alert(error.message))
  }
}

export const saveCart = (key, basket, comic) => {
  return dispatch => {
    dispatch({ type: 'ADD_TO_BASKET', payload: [...basket, comic] })
    localStorage.setItem(key, JSON.stringify([...basket, comic]))
  }
}

export const loadCart = key => {
  return dispatch => {
    dispatch({
      type: 'GET_BASKET',
      payload: JSON.parse(localStorage.getItem(key))
    })
  }
}
