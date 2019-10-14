const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return action.payload
    case 'USER_CREATED':
      return action.payload
    case 'USER_SIGNOUT':
      return null
    default:
      return state
  }
}

export default currentUser
