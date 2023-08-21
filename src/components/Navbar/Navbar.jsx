import React from 'react';
import './Navbar.css';
import logo from './youtube.ico';
import '../SearchBar/SearhBar.css'
import SearhBar from '../SearchBar/SearhBar';
import {RiVideoAddLine} from 'react-icons/ri';
import {BiUserCircle} from 'react-icons/bi';
import {IoMdNotificationsOutline} from "react-icons/io";

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
        <SearhBar/>
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
        <div className='apps_Box'>
          <p className='appBox'></p>
          <p className='appBox'></p>
          <p className='appBox'></p>
          <p className='appBox'></p>
          <p className='appBox'></p>
          <p className='appBox'></p>
          <p className='appBox'></p>
          <p className='appBox'></p>
          <p className='appBox'></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar"/>
        <div className='Auth_cont_Navbar'>
          <BiUserCircle size={22}/>
          <b>Sign in</b>
        </div>
    </div>
  )
}

export default Navbar