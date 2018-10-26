import React from 'react';

const Timer = ({ hours, minutes, seconds }) => {
    return(
        <div>
            <h1>Timer</h1>
            {hours} Hours {minutes} Minutes {seconds} Seconds
        </div>
    )
}

export default Timer;