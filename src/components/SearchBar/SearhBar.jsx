import React from 'react'
import './SearhBar.css'
import {FaSearch} from "react-icons/fa";
function SearhBar() {
  return (
    <>
        <div className='SearchBar_Container'>
            <div className="SearchBar_Container2">
                <div className="search_div">
                    <input type='text' className='iBox_SearchBar'></input>
                    <FaSearch className="searchIcon_SearchBar"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearhBar