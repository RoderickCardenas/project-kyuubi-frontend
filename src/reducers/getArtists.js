const getArtists = (state = [], action) => {
  switch (action.type) {
    case 'GET_ARTISTS':
      return action.payload
    case 'GET_NEXT_ARTIST':
      return state
    default:
      return state
  }
}

export default getArtists
