import React from 'react'
import Home from '../Pages/Home/Home';
import {Routes, Route } from 'react-router-dom';
import Library from '../Pages/Library/Library';


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
    </Routes>
  )
}

export default AllRoutes