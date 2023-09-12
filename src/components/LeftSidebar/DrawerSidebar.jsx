import React from 'react'
import './LeftSidebar.css'
import { AiOutlineHome } from 'react-icons/ai'

function DrawerSidebar() {
  return (
    <div className='container_DrawerLeftSidebar'>
        <div className='container2_DrawerLeftSidebar'>
            <div className='Drawer_leftsidebar'>
                <div className="icon_sidebar_div">
                    <p>
                        <AiOutlineHome size={22} className='icon_sidebar' style={{margin:"auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">Home</div>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DrawerSidebar