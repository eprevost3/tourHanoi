// good reference for animations https://medium.com/better-programming/a-simple-quick-start-guide-to-react-animations-57a9a97c63e2

import React from 'react'
import Animate from 'react-move/Animate';

// creating a disk component
class Disk extends React.Component{
    constructor(props){
        super(props)
        this.statePosX = this.props.posX
        this.statePosY = this.props.posY

        this.state = {posX : this.props.posX,
                    posY : this.props.posY,}
    }

    // moving the disk to another place
    move = (newPosX, newPosY) => {
        this.setState({
            posX : newPosX,
            posY : newPosY,
        })
    }

    // there is one big challenge here : when a disk renders, we don't know who is
    // isResponsible of that : is this the move function?
    // is it the parent rendering, triggering the disk rendering? It has an impact
    // because the position the disk has to go to depends on who is responsible for
    // the rendering
    isStateOrParentsResponsibleForRendering(){
        var isResponsible = ""
        // if there is a discrepancy between the variables then the change comes from the
        // state. Indeed the variables are defined such that as long as the state remains
        // constant there will be no discrepancy between the variables
        if ((this.statePosX !== this.state.posX) || (this.statePosY !== this.state.posY)){
            isResponsible = "state"
            // update the variables
            this.statePosX = this.state.posX
            this.statePosY = this.state.posY
        }
        else{isResponsible = "parent"}

        return(isResponsible)
    }

    render(){
        const isResponsible = this.isStateOrParentsResponsibleForRendering()
        return(
            <div>
                <Animate show={true}
                         start={{posX : this.props.posX,
                                 posY : this.props.posY
                             }}
                         // careful, the brackets are very important. If not, not transition is visible
                         update={{posX : [isResponsible === "state" ? this.state.posX : this.props.posX],
                                 posY : [isResponsible === "state" ? this.state.posY : this.props.posY],
                                 timing : {duration : this.props.durationAnim}}}>
                    {/* child has to be a function. The child here is a div, representing the disk*/}
                    {({posX, posY}) => {return(<div id={this.props.id} className = {this.props.className}
                                                              style={{backgroundColor: this.props.color,
                                                                      height : this.props.height,
                                                                      width : this.props.width,
                                                                      left : posX,
                                                                      top : posY,}}/>)}}
                </Animate>
            </div>
        )
    }
}

export default Disk
