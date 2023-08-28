import React, { useState } from 'react'
import './SearhBar.css'
import {FaSearch} from "react-icons/fa";
import {BsMicFill} from "react-icons/bs";
import SearchList from './SearchList';


function SearhBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchListA, setSearchList] = useState(false);
  const TitleArray=["video1","Video 2", "Animation video", "Movies"].filter(q=>q.includes(searchQuery));
  return (
    <>
        <div className='SearchBar_Container'>
            <div className="SearchBar_Container2">
                <div className="search_div">
                    <input type='text' className='iBox_SearchBar' placeholder='Search'
                    onChange={e=>setSearchQuery(e.target.value)} onClick={e=>setSearchList(true)}
                    />
                    <FaSearch className="searchIcon_SearchBar"
                    onClick={e=>setSearchList(false)}/>
                    <BsMicFill className="Mic_SearchBar" />
                    {
                      searchQuery && searchListA &&
                      <SearchList TitleArray={TitleArray}/>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default SearhBar