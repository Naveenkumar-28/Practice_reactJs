import React from 'react'
import { useNavigate } from 'react-router-dom'

function Customers({customers}) {
    const navigator=useNavigate()

  return (
    <ul>
        {customers.map((customer,index)=>{
            return <li key={index}>
                <span>{customer.name}</span>
                <span>{customer.age}</span>
                <button onClick={()=>navigator(`/${customer.id}`)}>Click</button>
            </li>
        })}
    </ul>
  )
}

export default Customers