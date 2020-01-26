import React from 'react'
import {connect} from 'react-redux'
import './Stats.css'
import Slider from '../../components/Slider.js'
import NbMoves from './NbMoves'
import translations from '../../lang/translations'

const Stats = ({speedChange, numberDiskChange, getAction, lang}) => {
    return(
        <div id="stats">

            <NbMoves/>

            <div id = "speed">
                <Slider label = {translations[lang]['speed']}
                        id = 'sliderSpeed'
                        min = "0.5"
                        max = "3"
                        defaultValue = "1"
                        title = {translations[lang]["slideToMoveTitle"]}
                        step = "0.5"
                        onChange = {speedChange}
                        getAction = {getAction}/>
            </div>
            <div id = "diskNum">
                <Slider label = {translations[lang]['numberOfDisks']}
                        id = "sliderNbDisks"
                        min="3"
                        max="7"
                        defaultValue="4"
                        title = {translations[lang]["changeNumberDisksTitle"]}
                        step = "1"
                        onChange = {numberDiskChange}
                        getAction = {getAction}/>
            </div>
        </div>
    )
}

const mapStateToProps = (stateRedux) => {
    return({lang : stateRedux.changeLangage.lang})
}

export default connect(mapStateToProps)(Stats)
