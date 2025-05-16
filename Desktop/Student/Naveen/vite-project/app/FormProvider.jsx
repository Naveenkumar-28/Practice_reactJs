import { createContext, useContext, useReducer } from "react";


export const RegisterContext = createContext(null)

const intialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const reducer = (state, action) => {
 
    switch (action.type) {
        case FORM_ACTIONS.REGISTER:
            console.log({action})
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                confirmPassword: action.payload.confirmPassword
            }

        default:
            state
    }
}


export const FORM_ACTIONS = {
    REGISTER: 'REGISTER',

}

const RegisterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <RegisterContext.Provider value={{ state, dispatch }} >
            {children}
        </RegisterContext.Provider>
    )
}

export { RegisterProvider }

export const useRegister = () => {
    const { state, dispatch } = useContext(RegisterContext)
    return { state, dispatch }
}

