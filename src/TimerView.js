import React from "react";
import { useDispatch } from 'react-redux'
import { toggleTimer } from "../src/features/timers/timersSlice"; 
import { formatTime } from './app/utils/index'
import '../src/components/TimerView.css'

export default function TimerView({ index, name, time, isRunning }) {
    const dispatch = useDispatch()
    
    return (
        <div className="TimerView">
            <h2>{name}</h2>
            <h1>{formatTime(time)}</h1>
            <button onClick={() => dispatch(toggleTimer(index))}>
                {isRunning ? "Stop" : "Start"}
                
            </button>
        </div>
    )
}

