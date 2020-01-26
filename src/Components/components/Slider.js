import React from 'react'
import {connect} from 'react-redux'
import "./Slider.css"
import translations from '../lang/translations'

// slider used to monitor the number of disks, the speed of the animation

class Slider extends React.Component{
    constructor(props){
        super(props)
        this.defaultValue = this.props.defaultValue
        this.value = this.defaultValue

        this.error = false

        // this prop is a function. The latter must take as an input the new value of the slider
        // This function is used to propagate the slider value change to the parents
        this.onChange = this.props.onChange
    }

    // changes the display of the component and propagates the changes to the parents
    changeSliderValue = (value) => {
        var slider = document.getElementById(this.props.id)

        // IF animation is playing, no change of parameter is allowed
        if (this.props.getAction() !== "PLAY"){
            this.error = false

            // in charge of displaying the value of the slider on the website
            document.getElementById('disp' + this.props.id).innerHTML = this.props.label + " = " + slider.value

            // updtate slider value
            this.value = slider.value

            // propagate to the parents the new slider value
            this.onChange(this.value)

            // erase the error message (if there is)
            document.getElementById("error" + this.props.id).innerHTML = ''


        }
        else{
            // force the slider value to go back to its initial value
            slider.value = this.value

            // display the error message
            this.error = true
        }
        this.setState({})
    }


    render(){
        return(
            <div className = "slider" title = {this.props.title}>
                <p id = {'disp' + this.props.id}>{this.props.label + " = " + this.value}</p>
                <input className = "sliderDrawing"
                       id = {this.props.id}
                       type = "range"
                       min = {this.props.min}
                       max = {this.props.max}
                       step = {this.props.step}
                       defaultValue = {this.defaultValue}
                       onChange = {this.changeSliderValue}/>
                <p id = {"error" + this.props.id} style = {{color : 'red'}}>
                    {this.error ? translations[this.props.lang]["alertNoSlidingDuringPlaying"] : ''}
                </p>

            </div>
        )
    }
}


const mapStateToProps = (stateRedux) => {
    return({lang : stateRedux.changeLangage.lang})
}

export default connect(mapStateToProps)(Slider)
