const initialState = (state = {
    comics: [],
    current_user: ''
}, action) => {
    switch(action.type) {
        case 'GET_STATE':
            return state
        default: 
            return state
    }
}

export default initialState