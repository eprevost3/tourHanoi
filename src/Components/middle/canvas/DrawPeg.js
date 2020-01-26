import React from 'react'

// drawing the pegs
const DrawPeg = ({pegNum, idPeg, color, thickness, posPegs}) => {
    // key of peg (1, 2, 3)
    // idPeg unique identifier of the peg
    // color of pegs
    // thickness of pegs
    // position of the pegs stored in a dictonary: posPegs = {1 : {"base" : [coords...], "stick" : [coords...]}, 2 : ...}
    // plotting peg
    return(
        <div className = {idPeg}>
            <div style={{backgroundColor: color,
                   position : "absolute",
                   height : posPegs[pegNum]['stick'][3],
                   width : posPegs[pegNum]['stick'][2],
                   left : posPegs[pegNum]['stick'][0],
                   top : posPegs[pegNum]['stick'][1],}}>
            </div>
            <div style={{class : idPeg,
                   backgroundColor: color,
                   position : "absolute",
                   height : posPegs[pegNum]['base'][3],
                   width : posPegs[pegNum]['base'][2],
                   left : posPegs[pegNum]['base'][0],
                   top : posPegs[pegNum]['base'][1],}}>
            </div>
        </div>
    )
}

export default DrawPeg
