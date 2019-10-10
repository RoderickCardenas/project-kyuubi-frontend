const getComics = (
    state = {
        comics: []
    }, 
    action) => {
    switch(action.type) {
        case 'GET_COMICS':
            return (
            fetch('URL')
            .then(resp => resp.json())
            .then({ ...state.comics })
            .catch(error => alert(error.message)))
        default: 
            return state
    }
}

export default getComics