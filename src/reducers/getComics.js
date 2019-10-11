const getComics = (state = [], action) => {
  switch (action.type) {
    case 'GET_COMICS':
      return action.payload
    case 'GET_NEXT_COMIC':
      return state
    default:
      return state
  }
}

export default getComics
