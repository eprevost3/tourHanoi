import React from 'react'
import {connect} from 'react-redux'
import './Header.css'
import Button from '../components/Button'
import translations from '../lang/translations'

const Header = ({getAction, lang, dispatch}) => {
    function changeLangage(){
        const action = {
            type : lang === 'fr' ? 'us' : 'fr'
        }
        dispatch(action)

    }
    return(
        <div id="header">
            <Button id='home' image = 'home' alt = 'Flag' title = {translations[lang].titleHome}
                onClick = {()=>{window.location.href = 'https://eprevost3.github.io/homepage/'}}
                overWriteCssProperties = {{height : "15vh", width : "15vh"}}/>
            <div id="title">{translations[lang].welcome}</div>
            <Button id='lang' image = {translations[lang].image} alt = 'Flag' title = {translations[lang].titleFlag}
                onClick = {() => {changeLangage()}}
                overWriteCssProperties = {{height : "15vh", width : "15vh"}}/>

        </div>
        )
    }

const mapStateToProps = (stateRedux) => {
    return({lang : stateRedux.changeLangage.lang})
}

export default connect(mapStateToProps)(Header)
