const initialState = {
    lang : "fr",
}

function changeLangage(state = initialState, action){
    let newState
    switch (action.type) {
        case 'fr' :
            newState = {
                ...state,
                lang : "fr",
            }
            return( newState || state)

        case 'us' :
            newState = {
                ...state,
                lang : "us",
            }
            return(newState || state)

        default: return(state)

    }
}


export default changeLangage
