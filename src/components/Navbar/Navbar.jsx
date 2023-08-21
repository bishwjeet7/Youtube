import React from 'react'
import './Navbar.css'
import logo from './youtube.ico'
function Navbar() {
  return (
    <div className='Container_Navbar'>
        <div className='Burger_Logo_Navbar'>
            <div className='burger'>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className='logo_div_Navbar'>
                <img src={logo} alt='logo' className='Logo'/>
                <p className='logo_title_navbar'> Youtube</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar