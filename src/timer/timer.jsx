import React, { useRef, useState } from "react";
import classes from './timer.module.css'

function Timer(){
    
    const [value, setValue] = useState(0)
    const intervalID = useRef(null)

    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        if(value > 0){
            setValue(value - 1)
        }
    }

    const startTimer = () => {
        if(value > 0 && !intervalID.current){
            intervalID.current = setInterval(() => {
                setValue(prop => prop - 1)
                console.log(prop)
            }, 1000)
        }
    }
    const stopTimer = () => {
        if(intervalID.current !== null){
            clearInterval(intervalID.current)
            intervalID.current = null
        }
    }
    const resetTimer = () => {
        if(intervalID.current){
            clearInterval(intervalID.current)
        }
        setValue(0)
        intervalID.current = 0
    }

    return(
        <>
            <div>
                <button onClick={decrement}>-</button>
                <span style={{ margin: '0.5rem 1rem' }}>{value}</span>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </>
    )
}

export default Timer