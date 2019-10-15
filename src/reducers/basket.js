const basket = (state = [], action) => {
  switch (action.type) {
    case 'GET_BASKET':
      return action.payload
    case 'ADD_TO_BASKET':
      return action.payload
    default:
      return state
  }
}

export default basket
