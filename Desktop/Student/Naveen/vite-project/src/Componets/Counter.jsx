
import React from 'react'
import { COUNTER_ACTIONS, useCount } from "../../app/CounterProvider";

export function CounterComponet() {
const {state,dispatch}=useCount()
  return (
    <div className='flex w-dvw mt-16 flex-col justify-center items-center gap-5'>
    <div className='font-medium text-xl'>Count: {state}</div>
    <div className='flex gap-5 text-2xl'>
      <button className='text-lg px-5 py-1 rounded-md text-white shadow-md bg-red-500 cursor-pointer' onClick={()=>dispatch({type:COUNTER_ACTIONS.DECREMENT})}>
        -
      </button>
      <button className='text-lg px-5 py-1 rounded-md text-white shadow-md bg-green-500 cursor-pointer' onClick={()=>dispatch({type:COUNTER_ACTIONS.INCREMENT})}>
        +
      </button>
    </div>
    </div>
  )
}

