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

const loggedIn = () =>
  get('https://warm-mountain-02756.herokuapp.com/api/v1/logged')

const logIn = user =>
  post('https://warm-mountain-02756.herokuapp.com/api/v1/login', {
    user
  })

const incrementVote = (user_id, comic_id) =>
  post('https://warm-mountain-02756.herokuapp.com/comic_votes', {
    user_id,
    comic_id
  })

const createUser = user =>
  post('https://warm-mountain-02756.herokuapp.com/api/v1/users', {
    user: {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      password: user.password,
      avatar: user.avatar
    }
  })

const createPurchase = (user_id, comic_id) =>
  post('https://warm-mountain-02756.herokuapp.com/purchases', {
    purchase: {
      user_id,
      comic_id
    }
  })

const getComics = () => get('https://warm-mountain-02756.herokuapp.com/comics')

const getCompleteComic = id =>
  get(`https://warm-mountain-02756.herokuapp.com/comics/${id}`)

const getArtists = () =>
  get('https://warm-mountain-02756.herokuapp.com/artists')

const getTopComic = () =>
  get('https://warm-mountain-02756.herokuapp.com/comics/most_voted')

const recentlyAdded = () =>
  get('https://warm-mountain-02756.herokuapp.com/comics/recently_added')

export default {
  loggedIn,
  logIn,
  incrementVote,
  createUser,
  getComics,
  getCompleteComic,
  getArtists,
  createPurchase,
  getTopComic,
  recentlyAdded
}
