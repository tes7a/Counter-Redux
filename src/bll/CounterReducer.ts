export type StateType = {
    max: number,
    start: number,
    focusInput1: boolean,
    focusInput2: boolean,
    number: number,
}

export const initialState: StateType = {
    max: 0,
    start: 0,
    focusInput1: false,
    focusInput2: false,
    number: 0,
}


export const CounterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SET-MAX-VALUE":
            return {...state, number: action.number + 1}

        case "RESET-VALUE":
            return {...state, number: action.start}

        case "FOCUS-INPUT1":
            return {...state, focusInput1: action.boolean}

        case "FOCUS-INPUT2":
            return {...state, focusInput2: action.boolean}

        case "START-VALUE":
            return {...state, start: action.number}

        case 'MAX-VALUE':
            return {...state, max: action.number}

        default:
            return state
    }
}

type ActionsType =
    setMaxValueType
    | ResetValueType
    | FocusInput1Type
    | FocusInput2Type
    | StartValueHandlerType
    | MaxValueHandlerType

export type setMaxValueType = ReturnType<typeof MaxValueAC>

export const MaxValueAC = (number: number) => {
    return {
        type: 'SET-MAX-VALUE',
        number
    } as const
}

export type ResetValueType = ReturnType<typeof ResetValueAC>

export const ResetValueAC = (start: number) => {
    return {
        type: 'RESET-VALUE',
        start
    } as const
}

export type FocusInput1Type = ReturnType<typeof focusInput1AC>

export const focusInput1AC = (boolean: boolean) => {
    return {
        type: 'FOCUS-INPUT1',
        boolean,
    } as const
}

export type FocusInput2Type = ReturnType<typeof focusInput2AC>

export const focusInput2AC = (boolean: boolean) => {
    return {
        type: 'FOCUS-INPUT2',
        boolean
    } as const
}

export type StartValueHandlerType = ReturnType<typeof startValueHandlerAC>

export const startValueHandlerAC = (number: number) => {
    return {
        type: 'START-VALUE',
        number
    } as const
}

export type MaxValueHandlerType = ReturnType<typeof maxValueHandlerAC>

export const maxValueHandlerAC = (number: number) => {
    return {
        type: 'MAX-VALUE',
        number
    } as const
}