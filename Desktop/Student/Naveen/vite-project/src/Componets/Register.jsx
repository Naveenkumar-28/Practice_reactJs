import React, { useEffect, useState } from 'react'
import { FORM_ACTIONS, useRegister } from '../../app/FormProvider'

function Register() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { state, dispatch } = useRegister()

    useEffect(() => {
        console.log(state)
    }, [state])

    const registerData = [
        {

            labelName: 'Username',
            placeHolder: 'Enter your Username',
            type: 'text',
            onClick: (e) => setUserName(e.target.value),
            value: userName
        },

        {
            labelName: 'Email',
            placeHolder: 'Enter your Email',
            type: 'email',
            onClick: (e) => setEmail(e.target.value),
            value: email

        },
        {
            labelName: 'Password',
            placeHolder: 'Enter your Password',
            type: 'password',
            onClick: (e) => setPassword(e.target.value),
            value: password
        },
        {
            labelName: 'Confirm Password',
            placeHolder: 'Enter your Confirm Password',
            type: 'password',
            onClick: (e) => setConfirmPassword(e.target.value),
            value: confirmPassword
        }
    ]

    const SubmitHandler = (e) => {
        e.preventDefault()
        if (!userName || !email || !password || !confirmPassword) return

        const data = { userName, email, password, confirmPassword }
        dispatch({ type: FORM_ACTIONS.REGISTER, payload: data })
    }

    return (
        <div className='mt-25 w-full flex justify-center items-center'>

            <form onSubmit={SubmitHandler} action="#" className='shadow-md border border-gray-400 rounded-md py-5 px-4 w-80'>
                <h1 className='uppercase text-2xl font-semibold mb-2 text-center'>Register Form</h1>
                {registerData.map((data, index) => {
                    return (
                        <div key={index} className='flex flex-col mb-2'>
                            <label htmlFor={data.labelName} className='mb-1 text-xs font-semibold '>{`${data.labelName} :`}</label>
                            <input type={data.type} id={data.labelName} placeholder={data.placeHolder} value={data.value} onChange={data.onClick} className='text-sm placeholder:text-xs outline-none border-2 border-gray-300 rounded-sm py-1 ps-3 focus:border-green-500' />
                        </div>
                    )
                })}
                <button type='submit' className='uppercase w-full mt-2 cursor-pointer bg-green-400 hover:bg-green-500 duration-200 text-white py-2 px-3 rounded-full font-semibold text-sm'>Register</button>
                <div>
                </div>
            </form>
        </div>
    )
}

export default Register