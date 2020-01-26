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
        console.log('bonjourlépés', action);
    }
    console.log("unrender");
    return(
        <div id="header">
            <Button id='home' image = 'home' alt = 'Flag' title = {translations[lang].titleHome} onclickFunction = {()=>{}}/>
            <div id="title">{translations[lang].welcome}</div>
            <Button id='lang' image = {translations[lang].image} alt = 'Flag' title = {translations[lang].titleFlag} onClick = {() => {changeLangage()}}/>

        </div>
        )
    }

const mapStateToProps = (stateRedux) => {
    return({lang : stateRedux.changeLangage.lang})
}

export default connect(mapStateToProps)(Header)
