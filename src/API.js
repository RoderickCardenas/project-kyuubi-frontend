const get = url =>
  fetch(url, {
    headers: { Authorization: localStorage.getItem('token') }
  }).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

const loggedIn = () => get('http://localhost:3000/api/v1/logged')

const logIn = user =>
  post('http://localhost:3000/api/v1/login', {
    user
  })

const incrementVote = (user_id, comic_id) =>
  post('http://localhost:3000/comic_votes', {
    user_id,
    comic_id
  })

const createUser = user =>
  post('http://localhost:3000/api/v1/users', {
    user: {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      password: user.password,
      avatar: user.avatar
    }
  })

const createPurchase = (user_id, comic_id) =>
  post('http://localhost:3000/purchases', {
    purchase: {
      user_id,
      comic_id
    }
  })

const getComics = () => get('http://localhost:3000/comics')

const getCompleteComic = id => get(`http://localhost:3000/comics/${id}`)

const getArtists = () => get('http://localhost:3000/artists')

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
