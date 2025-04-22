import React from 'react'
import { user } from './Router'

function Favorites() {
  return (
    <div >
    <h1 style={{textTransform:'uppercase', textAlign:'center',marginBlock:20}}>My Favorits</h1>
    <table  border={"1px solid "} style={{borderCollapse:'collapse'}}>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
    {user.wishlist.map((product,index)=>{
        return <tr style={{paddingBlock:20}} key={index}>
            <td>{index+1}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
      </tr>
        })}
        </tbody>
    </table>
</div>
  )
}

export default Favorites