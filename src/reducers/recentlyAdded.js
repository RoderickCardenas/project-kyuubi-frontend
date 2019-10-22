const topComic = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOST_RECENT_COMICS':
      return action.payload
    default:
      return state
  }
}

export default topComic
