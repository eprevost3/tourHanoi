import React from 'react'
import {connect} from 'react-redux'
import './Explanations.css'
import translations from '../../lang/translations'

const Explanations = (props) => {

    return(
        <div id="explanations">
            <h2>{translations[props.lang]["expTitle"]}</h2>
            <p class = "explanations">{translations[props.lang]["expIntro"]}</p>
            <p class = "explanations">{translations[props.lang]["expInter"]}</p>
        </div>
    )
}


const mapStateToProps = (stateRedux) => {
    return({lang : stateRedux.changeLangage.lang})
}

export default connect(mapStateToProps)(Explanations)
