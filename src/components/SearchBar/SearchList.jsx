import React from 'react';
import './SearchList.css';
import {FaSearch} from 'react-icons/fa'
function SearchList(TitleArray) {
  return (
    <>
        <div className="Container_SearchList">
          {
            TitleArray.map(m=>{
              return key
            })
          }
            <p className='titleItem'>
              <FaSearch/>
              item 1</p>
            <p className='titleItem'>
              <FaSearch/>
              item 2</p>
        </div>
    </>
  )
}

export default SearchList