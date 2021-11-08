import React from "react";
import '../App.css';
import s from './Buttons.module.css'

type buttonsType = {
    onClick: () => void
    title: string
    dis?: boolean
}

export const Buttons: React.FC<buttonsType> = ({onClick,title,dis}) => {
    const callBackHandler = () => {
        onClick()
    }

    return (
        <div>
            <button className={dis === true ? s.bt : s.bs} onClick={callBackHandler}
                    disabled={dis}><span style={{fontSize: "10px"}}>{title}</span></button>
        </div>)
}