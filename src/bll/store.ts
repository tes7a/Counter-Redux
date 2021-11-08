import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";


const rootReducer = combineReducers({
    counterState: CounterReducer
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>