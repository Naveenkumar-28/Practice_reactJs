import React, { useState } from 'react'
import { user } from './Router'

function Cart() {
  const[active,setActive]=useState(false)
  return (
    <div >
        <h1 style={{textTransform:'uppercase', textAlign:'center',marginBlock:20}}>My Cart</h1>
        <button onClick={()=>setActive((pre)=>!pre)}>Click</button>
        {active&& <table  border={"1px solid "} style={{borderCollapse:'collapse'}}>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
        {user.cart.map((product,index)=>{
            return <tr style={{paddingBlock:20}} key={index}>
                <td>{index+1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
          </tr>
            })}
            </tbody>
        </table>}
       
    </div>
  )
}

export default Cart
