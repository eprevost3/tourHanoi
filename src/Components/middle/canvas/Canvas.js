import React from 'react'
import './Canvas.css'
import DrawPeg from './DrawPeg'
import DealDisks from './DealDisks'

// representation of the pegs, disks
class Canvas extends React.Component{
    constructor(props){
        super(props)
        // height found manually, bad bad... but most straightforward way
        this.heightCanvas = "" + (window.innerHeight * .7)
        this.widthCanvas = "" + (window.innerWidth * .6)

        // action to do: pause the animation, stop it, start it
        this.getAction = this.props.getAction

        // pegs thickness
        this.thickness = 10
        this.posPegs = this.setPosPegs()

        this.nbDisks = 4
    }

    // sets the position of the pegs in the canvas
    setPosPegs(){
        var posPegs = {}, segmentWidth = this.widthCanvas / 7, segmentHeight = this.heightCanvas / 5

        for (var k = 1, peg = 1; k <= 5; k+= 2, peg++){
            posPegs[peg] = {
                // x top, y top, width, height
                'base' : [k * segmentWidth, 4 * segmentHeight, segmentWidth, 2 * this.thickness],
                // x top, y top, height, width
                'stick' : [(k + 0.5) * segmentWidth - this.thickness / 2, 2.5 * segmentHeight, this.thickness, 1.5 * segmentHeight]
            }
        }
        return(posPegs)
    }

    // when the number of disks is changed, we must clear everything and re-display
    // a new canvas with the correct number of disks
    displayDiskNumberChange = (nbDisks) => {
        // udpate the number of disks
        this.nbDisks = nbDisks

        // rerender the component with the updated number of disks
        this.setState({})
    }

    render(){
        const idPegs = [1, 2, 3]

        return(
            <div id="canvasBox">
            {idPegs.map((pegNum) => (<DrawPeg key = {pegNum}
                                        idPeg = {"peg_" + pegNum}
                                        pegNum = {pegNum}
                                        color = 'white'
                                        thickness = {this.thicknes}
                                        posPegs = {this.posPegs}/>))}

            <DealDisks nbDisks = {this.nbDisks}
                heightCanvas = {this.heightCanvas}
                widthCanvas = {this.widthCanvas}
                posPegs = {this.posPegs}
                getAction = {this.getAction}
                getSpeed = {this.props.getSpeed}/>
            </div>
        )
    }
}



export default Canvas;
