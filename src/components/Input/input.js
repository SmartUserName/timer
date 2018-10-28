import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props)

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        this.inputCheck = (value) => {
            if(value.length === 1 || value.length === 2){
                return value = [0,0,0]
            }
            for(let i=0; i<value.length; i++){
                if(!value[i] || value[i].toLowerCase().match(/[a-z]/)){
                    value[i] = 0
                }
            }
            return value
        }

        this.inputHandler = (ev) => {
            const re = /[\n,]/;
            let toArr = this.inputCheck(ev.target.value.split(re))

            this.setState({
                hours: toArr[0],
                minutes: toArr[1],
                seconds: toArr[2]
            })
        }  
        
        this.resetValues = () => {
            this.props.resetTimer();
            this.setState({
                hours: 0,
                minutes: 0,
                seconds: 0
            })
        }
    }
    
    render(){
        const { hours, minutes, seconds } = this.state;
        return(
            <div>
                <input 
                    placeholder="Enter time in seconds" 
                    onChange={this.props.setupTimer}

                /><br/>
                <input 
                    value={`${hours},${minutes},${seconds}`}
                    onChange={this.inputHandler}
                /><br/>
                <textarea
                    value={`${hours}\n${minutes}\n${seconds}`} 
                    onChange={this.inputHandler}
                    cols="21" 
                    rows="3"
                >
                </textarea><br/>
                <button onClick={this.props.startTimer}>Start timer</button>
                <button onClick={this.resetValues}>Reset timer</button>
            </div>
        )
    }
}

export default Input;