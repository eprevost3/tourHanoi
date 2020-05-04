import React from 'react';
import { Provider } from 'react-redux'
import Store from './store/store'
import './App.css';
import Header from './Components/header/Header'
import Middle from './Components/middle/Middle'
import Foot from './Components/foot/Foot'

class App extends React.Component{
    constructor(props){
        super(props)
        // setting the property in charge of triggering the animation, pausing it or stopping + resetting it
        this.action = 'PAUSE'
        this.state = {'lang' : this.readCookie().langage || 'us',}
    }
    // changes the state value to either PAUSE, STOP, PLAY
    actionChange = (action) => {this.action = action}

    // returns the current value of the action
    getAction = () => {
        // if action is stop, the canvas is reset. Then we set the state to Pause
        // to avoid calling the clearing function every x ms
        if(this.action === 'STOP'){
            this.action = 'PAUSE'
            return('STOP')
        }
        else{return(this.action)}
    }

    // cookies updated in the store
    readCookie(){
        var cookies = {"langage" : "",}

        var cooks = document.cookie
        // parse result
        cooks = cooks.split(";")

        // find langage and best score
        for (var k = 0; k < cooks.length; k++){
            var str = cooks[k].replace(/\s/g, '')

            if(str.substring(0, 8) === "langage"){cookies.langage = str.split("=")[1]}
            else{}
        }
        return(cookies)
    }

    // get the current langage used
    getLang = () => {return(this.state.lang);}

    render(){

      return (
        <div className="App">
            <Provider store = {Store}>
              <Header getAction = {this.getAction}/>
              <Middle getAction = {this.getAction}/>
              <Foot actionChange = {this.actionChange} getLang = {this.getLang}/>
            </Provider>
        </div>
      );
  }
}

export default App;
