const loggedIn = () =>
  fetch('http://localhost:3000/api/v1/logged', {
    headers: { Authorization: localStorage.getItem('token') }
  }).then(resp => resp.json())

const logIn = user =>
  fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user
    })
  }).then(resp => resp.json())

const incrementVote = (user_id, comic_id) =>
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
  }).then(resp => resp.json())

const createUser = user =>
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
  }).then(resp => resp.json())

const createPurchase = (user_id, comic_id) =>
  fetch('http://localhost:3000/purchases', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      purchase: {
        user_id,
        comic_id
      }
    })
  }).then(resp => resp.json())

const getComics = () =>
  fetch('http://localhost:3000/comics').then(resp => resp.json())

const getCompleteComic = id =>
  fetch(`http://localhost:3000/comics/${id}`).then(resp => resp.json())

const getArtists = () =>
  fetch('http://localhost:3000/artists').then(resp => resp.json())

export default {
  loggedIn,
  logIn,
  incrementVote,
  createUser,
  getComics,
  getCompleteComic,
  getArtists,
  createPurchase
}
