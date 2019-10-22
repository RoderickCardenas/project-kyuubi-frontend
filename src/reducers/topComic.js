const topComic = (state = [], action) => {
  switch (action.type) {
    case 'GET_TOP_RATED_COMIC':
      return action.payload
    default:
      return state
  }
}

export default topComic
