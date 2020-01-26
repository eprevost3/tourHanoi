import React from 'react'
import {connect} from 'react-redux'
import translations from '../../lang/translations'


// displays the number of moves that have been played until now
const NbMoves = (props) => {
    console.log(props.nbMovesPlayed, props);
    return(
        <div id = "nbMoves">
            {translations[props.lang]["nbMoves"]}
            <div id = "textNbMoves">{0 | props.nbMovesPlayed}</div>
        </div>
    )
}

const mapStateToProps = (stateRedux) => {
    return({nbMovesPlayed : stateRedux.nbMovesPlayed.nbMovesPlayed,
            lang : stateRedux.changeLangage.lang})
}

export default connect(mapStateToProps)(NbMoves)
