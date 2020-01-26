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
        this.state = {'lang' : 'fr'}
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

    // changing the language displayed
    // note that this function is not binded to the app component but to the
    // component receiving this function as a prop (this is made on purpose)
    langChange = () => {
        this.setState({'lang' : this.state.lang === 'fr' ? 'us' : 'fr'})
    }

    // get the current langage used
    getLang = () => (this.state.lang)

    render(){
        console.log("app rendue");
      return (
        <div className="App">
            <Provider store = {Store}>
              <Header getAction = {this.getAction} getLang = {this.getLang} langChange = {this.langChange}/>
              <Middle getAction = {this.getAction}/>
              <Foot actionChange = {this.actionChange} getLang = {this.getLang}/>
            </Provider>
        </div>
      );
  }
}

export default App;


////////////////: avancer le header: rajouter les boutons, pareil pour le bottom
