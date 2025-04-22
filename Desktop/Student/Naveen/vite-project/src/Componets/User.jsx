import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { user } from './Router'
import Cart from './Cart'

function User() {
  const [inputVal,setInputVal]=useState('')
  const inputRef=useRef(null)
  
//   const getValue=()=>{
//     let total=0

//     for (let i= 0; i < 100000000; i++) {
//       total++
//     }
//     console.log('render',total);
    
//     return total
//   }
  
//  const value=useMemo(()=>getValue(),[])

  // const getValue=useCallback(()=>{
  //   console.log(inputVal);
    
  // },[inputVal])

//  getValue()


useEffect(() => {
inputRef.current.focus()
}, [])


  return (
    <>
    <input ref={inputRef} value={inputVal} type="text" onChange={(e)=>setInputVal(e.target.value)}/>
    {/* <p>Total {total}</p> */}
    <div>Name: {user.name}</div>
    <div>Email: {user.email}</div>
    </>
  )
}

export default User