import React, { Component } from 'react';

//COMPONENTS
import Input from './Input/input';
import ProgressBarr from './ProgressBar/progressBar'

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
        
        this.interval = undefined;
        
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
            clearInterval(this.interval)
            this.setState({
                secondsTotal: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                timerOn: false,
            })
        }

        this.startTimer = () =>{
            if(!this.state.timerOn){
                this.setState({
                    timerOn: true
                })
                    this.interval = setInterval(this.countDown, 1000) 
            }
        }

        this.countDown = () =>{
            let seconds = this.state.secondsTotal - 1;
            this.convertSeconds(seconds)
            this.setState({
                secondsTotal: seconds
            })

            if(this.state.secondsTotal < 0){
                clearInterval(this.interval)
                this.resetTimer();
            }
        }

        this.toPercents = (value, timeUnit) => {
            return Math.floor(value * 100 / timeUnit)
        }
    }
    
    render(){
        const {secondsTotal, hours, minutes, seconds } = this.state;
        return(
            <div>        
                <div className="cont">
                    <ProgressBarr strokeColor={"#1E90FF"}  time={"Hours"} timeValue={hours} progress={this.toPercents(this.state.hours, 23)}/>
                    <ProgressBarr strokeColor={"#7CFC00"} time={"Minutes"} timeValue={minutes} progress={this.toPercents(this.state.minutes, 59)}/>
                    <ProgressBarr strokeColor={"#FFD700"} time={"Seconds"} timeValue={seconds} progress={this.toPercents(this.state.seconds, 59)}/>
                </div>
                <div className="cont">
                    <Input setupTimer={this.setupTimer} resetTimer={this.resetTimer} secondsTotal={secondsTotal} startTimer={this.startTimer}/>
                </div>
            </div>
        )
    }
}

export default App;