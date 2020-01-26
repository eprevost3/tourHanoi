const initialState = {
    nbMovesPlayed : 0,
}

function nbMovesPlayed(state = initialState, action){
    let nextState
    switch (action.type) {
        case 'newMovePlayed':
            nextState = {
                ...state,
                nbMovesPlayed : action.value,
            }

            return(nextState || state)
        case 'resetMovesPlayed' :
            nextState = {
                ...state,
                nbMovesPlayed : 0,
            }

            return(nextState || state)

        default : return(state)

    }
}

export default nbMovesPlayed
