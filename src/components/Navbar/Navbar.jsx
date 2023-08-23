import React from 'react';
import './Navbar.css';
import logo from './youtube.ico';
import '../SearchBar/SearhBar.css'
import SearhBar from '../SearchBar/SearhBar';
import {RiVideoAddLine} from 'react-icons/ri';
import {BiUserCircle} from 'react-icons/bi';
import {IoMdNotificationsOutline} from "react-icons/io";

function Navbar() {
  // const CurrentUser = null;
  const CurrentUser = {
    result:{
      email: "xyz@gmail.com",
      joinedOn: "2222-07-15T09:57:23.489Z",
    },
  };
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
          {
            CurrentUser ? (
              <>
                <div className='Channel_logo_App'>
                  <p className='fstChar_logo_App'>
                    {
                      CurrentUser?.result.name ?(
                        <>
                          {CurrentUser?.result.name.charAt(0).toUpperCase()}
                        </>
                      ):(<>
                        {CurrentUser?.result.email.charAt(0).toUpperCase()}
                      </>)
                    }
                  </p>
                </div>
              </>
            ):(
          <>
          <p className='Auth_btn'>
            <BiUserCircle size={22}/>
            <b>Sign in</b>
          </p>
          </>
          )}
        </div>
    </div>
  )
}

export default Navbar