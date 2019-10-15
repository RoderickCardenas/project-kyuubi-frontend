const getCompleteComic = (state = null, action) => {
  switch (action.type) {
    case 'GET_COMPLETE_COMIC':
      return action.payload
    default:
      return state
  }
}

export default getCompleteComic
