import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {
  const navigate= useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className="nav">
        <div className='nav_contents'>
          <div className="left">
   <Link to="/"><img className='nav_logo' src="https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-bank-icon-png-image_708538.jpg" alt="" /></Link> 
   <ul className='list'>
    <li>
   <Link className='home' to="/">Home</Link>
   <Link className='customer' to="/customers">Customers</Link>
   <Link className='aboutUs' to="/aboutUs">About Us</Link>
   </li>
   </ul>
    </div>
      <div className='right'>
      <button onClick={handleLogout} className="Logout_btn">Logout</button>
      </div>
    </div>
    </div>
  )
}

export default Nav
