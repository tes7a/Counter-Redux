import {combineReducers, createStore} from "redux";
import { loadState, saveState } from "../utils/localstorage-utils";
import {CounterReducer} from "./CounterReducer";


const rootReducer = combineReducers({
    counterState: CounterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counterState: store.getState().counterState
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store