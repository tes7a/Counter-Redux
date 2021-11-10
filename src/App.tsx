import React, {ChangeEvent} from 'react';
import './App.css';
import s from "./components/Count.module.css";
import {Buttons} from "./components/Buttons";
import {Scoreboard} from "./components/Scoreboard";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {
    focusInput1AC,
    focusInput2AC,
    maxValueHandlerAC,
    MaxValueAC,
    ResetValueAC,
    startValueHandlerAC,
    StateType
} from './bll/CounterReducer'

function App() {

    const dispatch = useDispatch()
    const {
        max,
        start,
        focusInput1,
        focusInput2,
        number,
    } = useSelector<AppRootStateType, StateType>(state => state.counterState)

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        dispatch(startValueHandlerAC(+e.currentTarget.value))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValueHandlerAC(+e.currentTarget.value))
    }

    function maxValue() {
        if (number < max) {
            dispatch(MaxValueAC(number))
        }
    }

    function resetValue() {
        dispatch(ResetValueAC(start))
    }


    function onClickHandler() {
        dispatch(focusInput1AC(false))
        dispatch(focusInput2AC(false))
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('startValue', JSON.stringify(start))
    }

    return (
        <div className={s.Count}>
            <div>
                <div className={s.max}>
                    MaxValue: <input type={"number"} value={max} onChange={maxValueHandler}
                                     className={max <= start || start < 0 ? s.red : s.black}
                                     onFocus={() => dispatch(focusInput1AC(true))}
                />
                </div>
                <div className={s.start}>
                    StartValue: <input type={"number"} value={start}
                                       onChange={startValueHandler}
                                       className={max <= start || start < 0 ? s.red : s.black}
                                       onFocus={() => dispatch(focusInput2AC(true))}
                />
                </div>
                <div className={s.but}>
                    <Buttons onClick={onClickHandler} title={"set"}
                             dis={max <= start || start < 0 || (!focusInput1 && !focusInput2)}/>
                </div>
            </div>
            <Scoreboard value={number} valueMax={max} max={max} start={start} focusInput1={focusInput1}
                        focusInput2={focusInput2}/>
            <div className='Buttons'>
                <Buttons onClick={maxValue} title={"inc"} dis={number === max || (focusInput1 || focusInput2)}/>
                <Buttons onClick={resetValue} title={"res"} dis={number === start}/>
            </div>
        </div>
    );
}

export default App;
