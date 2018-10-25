import React from 'react';

const Input = (props) => {
    const maxHours = 23;
    const maxMinutes = 59;
    const maxSeconds = 59;
    return(
        <div>
            <input placeholder="Enter time in seconds" onChange={props.setupTimer()}/><br/>
            <input placeholder="HH,MM,SS"/><br/>
            <textarea cols="21" rows="3"></textarea><br/>
            {/* <select>
                <option>1</option>
                {for (let i=0;){

                }}
            </select>
            <select></select>
            <select></select><br/> */}
            <button>Start timer</button>
            <button>Reset timer</button>
        </div>
    )
}

export default Input;