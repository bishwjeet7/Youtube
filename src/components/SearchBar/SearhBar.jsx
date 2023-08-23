import React from 'react'
import './SearhBar.css'
import {FaSearch} from "react-icons/fa";
import {BsMicFill} from "react-icons/bs";
import SearchList from './SearchList';


function SearhBar() {
  return (
    <>
        <div className='SearchBar_Container'>
            <div className="SearchBar_Container2">
                <div className="search_div">
                    <input type='text' className='iBox_SearchBar' placeholder='Search'></input>
                    <FaSearch className="searchIcon_SearchBar"/>
                    <BsMicFill className="Mic_SearchBar" />
                    {
                      <SearchList/>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default SearhBar