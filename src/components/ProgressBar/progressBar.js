import React from 'react';

const ProgressBar = (props) => {
    const circleSize = {
        radius: 60,
        height: 120,
        width: 120,
        strokeWidth: 7,
    }

    let normalizedRadius = circleSize.radius - circleSize.strokeWidth * 2;
    let circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - props.progress / 100 * circumference;
    return(
        <div className={"cont"}>
            <svg 
                width={circleSize.width}
                height={circleSize.height}
                style={{
                    background: 'white'
                }}
            >
                
                <circle
                    cx={circleSize.radius}
                    cy={circleSize.radius}
                    r={normalizedRadius}
                    fill={"transparent"}
                    stroke={props.strokeColor}
                    strokeWidth={circleSize.strokeWidth}
                    />
                <circle
                    cx={circleSize.radius}
                    cy={circleSize.radius}
                    r={normalizedRadius}
                    fill={"transparent"}
                    stroke={"#454343"}
                    strokeWidth={circleSize.strokeWidth}
                    strokeDasharray={circumference + ' ' + circumference }
                    style={{strokeDashoffset}}
                />


                <text y="55" transform="translate(59)" style={{
                    fontWeight: 'bold',
                    color: 'blue'
                    }}
                >
                    <tspan x="0" text-anchor="middle">{props.timeValue}</tspan>
                    <tspan x="0" text-anchor="middle" dy="15">{props.time}</tspan>                    
                </text>
            </svg>
        </div>
  );
} 

export default ProgressBar;