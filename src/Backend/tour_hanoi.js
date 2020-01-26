const tourHanoi = (n, posInit, posInterm, posEnd, list_pos) => {
    /*
    n : number of disk to move
    posInit : initial position of the tower
    posInterm : empty rod
    */

    if (n > 0){
        // moving all the disks except the largest one to the intermediate rod
        list_pos = tourHanoi(n - 1, posInit, posEnd, posInterm, list_pos)

        // now all disks but the largest one are on the intermediate rod. So move the largest
        // disk to ending rod
        list_pos.push([posInit, posEnd])

        // now move the remaining disks on the ending rod
        list_pos = tourHanoi(n - 1, posInterm, posInit, posEnd, list_pos)
    }else{}

    return(list_pos)
}


export default tourHanoi
