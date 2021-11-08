import React from "react";
import '../App.css';
import s from "./ScoreBoard.module.css"

type scoreboardType = {
    value: number
    valueMax: number
    max: number
    start: number
    focusInput1: boolean
    focusInput2: boolean
}

export const Scoreboard: React.FC<scoreboardType> = ({
                                                         value, valueMax,
                                                         start, max, focusInput1, focusInput2
                                                     }) => {
    return (
        <div className={valueMax <= value || value < 0 || focusInput1 ? s.red : s.black}>
            {max <= start || start < 0 && (focusInput1 || focusInput2) ? 'incorrect value' :
                max > start && start >= 0 && (focusInput1 || focusInput2) ? 'enter values and press "set"' : value
            }
        </div>)
}