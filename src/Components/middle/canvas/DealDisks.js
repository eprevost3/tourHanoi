import React from 'react'
import Disk from './Disk'
import {connect} from 'react-redux'
import tourHanoi from '../../../Backend/tour_hanoi'

// in charge of moving the disks, of the aniations
class DealDisks extends React.Component{
    constructor(props){
        super(props)
        // action to do: pause the animation, stop it, start it
        this.getAction = this.props.getAction

        // list of all posible colors for disks. Maximum of 6 disks
        this.listColors = ["red", "purple", "blue", "green", "yellow", "orange", "brown"]

        // getting the size of the canvas to adapt the size of the components
        this.sizeCanvasX = this.props.widthCanvas
        this.sizeCanvasY = this.props.heightCanvas

        // height and width of first disk. Other disk have same height, smaller
        // width, but based on the one defined below
        this.diskHeight = this.sizeCanvasY / 25
        this.diskWidth = this.sizeCanvasX / 8

        // position of pegs in canvas
        this.posPegs = this.props.posPegs

        // dictionary containing the disks references
        // filled during the render
        this.dicRefDisks = {}

        // list containing all details about disks, position order etc
        this.disks = undefined
        this.pegFilling = undefined

        // duration of each animation (in ms)
        this.durationAnim = 800

        // function outputting a coefficient used to speed up / slow down the animation
        this.getSpeed = this.props.getSpeed

        // old duration. The latter is used to check if the current duration being used
        // is the one desired by the user
        this.oldDuration = 1 / this.getSpeed() * this.durationAnim

        // getting on which pegs the disks will go to, and in which order
        this.listPegsDisks = undefined
        this.nbMovesDone = 0
        // number of moves we have to do to move the pyramid from one peg to the other
        this.nbMovesMax = undefined

    }

    init(){
        // getting moves to do, and order in which they must be realized
        this.listPegsDisks = tourHanoi(this.props.nbDisks, 1, 2, 3, [])
        this.resetNumberOfMoves()

        // maximum number of moves to do
        this.nbMovesMax  = this.listPegsDisks.length

        // list containing all details about disks, position order etc
        this.disks = this.initDisks()
        this.pegFilling = this.setPegFilling()
    }

    // filling the disks parameters list
    initDisks(){
        // portion to remove to each disk as we get closer to the smallest one
        // here, the smallest disk should be 1/3 of the width of the largest
        const decr = - 2 / 3 * this.diskWidth / this.props.nbDisks
        var listDisks = []
        // defining the position of the disks

        for(var k = 0; k < this.props.nbDisks; k ++){
            // computing positions based on the first peg position
            var [posX, posY] = this.getPosDisk(1, this.diskWidth + (k + 1) * decr, k)
            listDisks.push({"key" : k, "color" : this.listColors[k], "height" : this.diskHeight,
                             "width" : this.diskWidth + (k + 1) * decr, "posX" : posX, "posY" : posY, 'id' : 'disk_' + k})
        }

        return(listDisks)
    }

    // creates the dictionary in charge of keeping track of disks on the pegs
    setPegFilling(){
        var pegFilling = {1: [], 2: [], 3: []}
        // all disks are initially on the first peg
        for(var diskNum = 0; diskNum < this.props.nbDisks; diskNum++){
            pegFilling[1].push({...this.disks[diskNum]})
        }

        return(pegFilling)
    }

    // given a peg Number and a disk index, gives back the top left X  and Y of the disk (represented
    // by a rectangle)
    getPosDisk(pegNum, diskWidth, nbDisksOnPeg){
        // x : finding the middle of the peg, and removing half of the disk size,
        // to get the top left x of disk
        var posX = this.posPegs[pegNum]["base"][0] + this.posPegs[pegNum]["base"][2] / 2 - diskWidth / 2
        // y : adding the disk on the top of the others (if there are some)
        var posY = this.posPegs[pegNum]["base"][1] - (nbDisksOnPeg + 1) * this.diskHeight

        return([posX, posY])
    }

    callback = () => {
        const action = this.getAction()
        var time

        if(action === 'PAUSE'){time = 100}
        else if(action === 'PLAY'){time = 3 * this.getDuration()}
        else if(action === 'STOP'){time = 100}

        this.moveDisk(action)
        setTimeout(this.callback, time)
    }

    // updating the number of moves that have been played so far
    // linked to the redux store, to feed other components with the modifications
    updateNumberOfMoves(){
        this.nbMovesDone++
        const action = {type : 'newMovePlayed', value : this.nbMovesDone}

        // send changes to the redux store
        this.props.dispatch(action)
    }

    // setting to 0 the number of moves played
    resetNumberOfMoves(){
        this.nbMovesDone = 0
        const action = {type : 'resetMovesPlayed', value : this.nbMovesDone}

        // send changes to the redux store
        this.props.dispatch(action)
    }

    // get duration of every part of the animation
    getDuration(){
        // coefficient to increase or reduce the default animation duration
        var coeff = 1 / this.getSpeed()

        var duration = coeff * this.durationAnim

        // check if the duration is different from the one that has been used
        if (this.oldDuration !== duration){
            // duration is different. Therefore, the disks have to be re-rendered because
            // speed is one of their property
            this.oldDuration = duration
            this.setState({})

        }else{}

        return(duration)
    }

    componentDidMount(){
        this.callback()

    }

    moveDisk = (action) => {
        console.log(action,);
        if((action === 'PLAY') && (this.nbMovesDone < this.nbMovesMax)){
            // getting the starting peg on which we take the disk, and the peg on which the latter is moved to
            var [currPegId, newPegId] = this.listPegsDisks[this.nbMovesDone]
            // currPegId : int, number of the peg from which we remove a disk
            // newPegId : int, number of the peg on which we add the disk

            // get the disk we have to move
            var diskRef = this.pegFilling[currPegId].pop()

            // make the move graphically. First get initial and future postion of disk
            var nbDisksOnCurrPeg = this.pegFilling[currPegId].length
            var nbDisksOnNewPeg = this.pegFilling[newPegId].length
            var [currPosX, currPosY] = this.getPosDisk(currPegId, diskRef.width, nbDisksOnCurrPeg)
            var [newPosX, newPosY] = this.getPosDisk(newPegId, diskRef.width, nbDisksOnNewPeg)

            const heightPeg = this.posPegs[1]['stick'][3]

            // create a group of intermediate positions to simulate what would be done in real life
            var path = [[currPosX, currPosY - 1.2 * heightPeg], [newPosX, currPosY - 1.2 * heightPeg], [newPosX, newPosY]], count = 1
            this.dicRefDisks[diskRef.id].move(path[0][0], path[0][1])
            var timer = setInterval(() => {this.dicRefDisks[diskRef.id].move(path[count][0], path[count][1]);
                                            count++;
                                           if (count === 3){clearInterval(timer)}}, this.getDuration())

            // update in the dictionary that the disk is now on the new peg
            this.pegFilling[newPegId].push(diskRef)

            // increment the number of moves played
            this.updateNumberOfMoves()

        }
        else if(action === 'PAUSE'){}
        else if(action === 'STOP'){
            // reinitialize everything
            // list containing all details about disks, position order etc

            // move all disks to the initial position
            for(var k = 0; k < this.props.nbDisks; k++){
                this.dicRefDisks['disk_' + k].move(this.disks[k].posX, this.disks[k].posY)
            }
            // rendering the disks components
            this.setState({})

        }

    }

    render(){
        this.init()
        // list containing all details about disks, position order etc
        return(
            <div>
                {this.disks.map(({key, color, height, width, posX, posY}) =>
                {return(<Disk ref = {(ref) => {this.dicRefDisks['disk_' + key] = ref}}
                       id = {'disk_' + key}
                       durationAnim = {this.getDuration()}
                       className = "disk"
                       key = {key}
                       color = {color}
                       height = {height}
                       width = {width}
                       posX = {posX}
                       posY = {posY}
                       posPegs = {this.posPegs} />)})}
            </div>
        )
    }
}

export default connect()(DealDisks)



// resoudre le fait que le init( ) et le setPegFilling ne sont pas appelé pour réinitialiser
