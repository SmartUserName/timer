import React, { Component } from 'react';

//COMPONENTS
import Timer from './Timer/timer';
import Input from './Input/input';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
             secondsTotal: 0,
             hours: 0,
             minutes: 0,
             seconds: 0,
             timerOn: false,
        }        
        
        this.convertSeconds = (sec) => {
            const hours = Math.floor(sec / 60 / 60); 
            const minutes = Math.floor((sec - (hours * 60 * 60)) / 60);
            const seconds = sec - ((hours * 60 * 60) + (minutes * 60));
            this.setState({
                hours: hours,
                minutes,
                seconds
            })
        }
        this.setupTimer = (ev) => {
            const time = ev.target.value
            this.setState({
                secondsTotal: time
            })
            this.convertSeconds(time)
        }

        this.resetTimer = () => {
            this.setState({
                secondsTotal: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                timerOn: false,
            })
        }
    }
    
    render(){
        const {secondsTotal, hours, minutes, seconds } = this.state;
        return(
            <div>
                <Timer hours={hours} minutes={minutes} seconds={seconds}/>
                <Input setupTimer={this.setupTimer} resetTimer={this.resetTimer} secondsTotal={secondsTotal}/>
            </div>
        )
    }
}

export default App;