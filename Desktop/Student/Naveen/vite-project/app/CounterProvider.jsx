import { createContext, useContext, useReducer } from "react";


export const Counter = createContext(null)

const intialState = 0


const reducer = (state, action) => {
    switch (action.type) {
        case COUNTER_ACTIONS.INCREMENT:
            return state + 1
        case COUNTER_ACTIONS.DECREMENT:
            return state - 1

        default:
            state
    }
}


export const COUNTER_ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: "DECREMENT"
}

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <Counter.Provider value={{ state, dispatch }} >
            {children}
        </Counter.Provider>
    )
}

export { CounterProvider }

export const useCount = () => {
    const { state, dispatch } = useContext(Counter)
    return { state, dispatch }
}

