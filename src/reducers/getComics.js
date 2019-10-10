const getComics = (state = [], action) => {
    switch(action.type) {
        case 'GET_COMICS':
            return action.payload
        default: 
            return state
    }
}

export default getComics