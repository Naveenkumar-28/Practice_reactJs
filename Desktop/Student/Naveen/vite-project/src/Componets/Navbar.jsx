import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        {/* <div className='logo_container'>
            <img className='logo' src="./logo.jpg" alt="logo" />
            <h1 className='logo_title'>Tiger</h1>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="#">Settings</Link></li>
            <li><Link to="#">About</Link></li>
        </ul> */}
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/cart'}>Cart</Link></li>
          <li><Link to={'/settings'}>Settings</Link></li>
        </ul>
       
    </nav>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     <Outlet />
   </div>
    </>
     
  )
}

export default Navbar
