const getVotes = (state = [], action) => {
  switch (action.type) {
    case 'GET_VOTES':
      return action.payload.message ? state : action.payload
    default:
      return state
  }
}

export default getVotes
