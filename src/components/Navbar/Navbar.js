import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.scss'
import Logo from '../../assets/images/Logo.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <Link to=''>
                <img src={Logo} alt="logo" className='logo'/>
            </Link> 
        </div>
        <div className='menu'>
            <Link to='/'>Home</Link>
            <Link to='/exercises'>Exercises</Link>
        </div>
    </div>
  )
}

export default Navbar