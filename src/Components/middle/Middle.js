import React from 'react'
import './Middle.css'
import Canvas from './canvas/Canvas'
import Explanations from './explanations/Explanations'
import Stats from './stats/Stats'

class Middle extends React.Component{
    constructor(props){
        super(props)
        this.nbDisks = 4
        this.speed = 1
        // when the user inputs a different number of disks, then the function
        // clears the canvas and displays the right number of disks
        this.displayDiskNumberChange = () => {}
    }

    // change the number of disks
    numberDiskChange = (nbDisks) => {
        this.nbDisks = nbDisks

        // using the Canvas component method to clear the Canvas compoent and change
        // the number of disks displayed on the peg
        this.displayDiskNumberChange(parseInt(nbDisks))
    }

    // get the number of disks to display
    getNumberDisks = () => (this.nbDisks)

    // change speed of animation
    speedChange = (newSpeed) => {this.speed = newSpeed;}

    // get speed of animation
    getSpeed = () => (this.speed)


    render(){
        const {getAction} = this.props
        return(
            <div id="middle">
                <Stats getAction = {getAction}
                       speedChange = {this.speedChange}
                       numberDiskChange = {this.numberDiskChange}/>

                <Canvas getAction = {getAction}
                        getSpeed = {this.getSpeed}
                        getNumberDisks = {this.getNumberDisks} ref = {(canvas) => {if(canvas){this.displayDiskNumberChange = canvas.displayDiskNumberChange}}}/>

                <Explanations/>
            </div>
        )
    }
}

export default Middle
