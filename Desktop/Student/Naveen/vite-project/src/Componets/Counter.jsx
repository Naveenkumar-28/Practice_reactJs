import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
  return (
    <div className='counter_container'>
        <h1>Count: {count}</h1>
        <div className='btn_container'>
            <button className='btn' onClick={()=>setCount((prev)=>prev+5)}>+5</button>
            <button className='btn' onClick={()=>setCount((prev)=>prev+10)}>+10</button>
            <button className='btn' onClick={()=>setCount((prev)=>prev-10)}>-10</button>
            <button className='btn' onClick={()=>setCount((prev)=>prev-5)}>-5</button>
        </div>
    </div>
  )
}

export default Counter