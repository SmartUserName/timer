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
            const hours = Math.floor(seconds / 60 / 60); //2
            const minutes = Math.floor((seconds - (hours * 60 * 60)) / 60);//46.66666
            const seconds = sec - ((hours * 60 * 60) + (minutes * 60));
            this.setState({
                hours,
                minutes,
                seconds
            })
        }
        this.setupTimer = (time) => {
            this.setState({
                secondsTotal: time
            })
            this.convertSeconds(time)
        }
    }
    render(){
        const { secondsTotal, hours, minutes, seconds } = this.state;
        console.log(secondsTotal);
        return(
            <div>
                <Timer />
                <Input setupTimer={this.setupTimer}/>
            </div>
        )
    }
}

export default App;