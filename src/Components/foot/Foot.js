import React from 'react'
import {connect} from 'react-redux'
import './Foot.css'
import Button from '../components/Button'
import translations from '../lang/translations'


const Foot = ({actionChange, lang}) => {
    return(
        <div id="foot">
            <Button id='stop' image = 'stop' alt = 'Stop' onClick = {() =>{actionChange('STOP')}} title = {translations[lang]['stop']}/>
            <Button id='play' image = 'play' alt = 'Play' onClick = {() => {actionChange("PLAY")}} title = {translations[lang]['play']}/>
            <Button id='pause' image = 'pause' alt = 'Pause' onClick = {() => {actionChange("PAUSE")}} title = {translations[lang]['pause']}/>
        </div>
    )}

const mapStateToProps = (stateRedux) => {
    return({lang : stateRedux.changeLangage.lang})
}

export default connect(mapStateToProps)(Foot)
