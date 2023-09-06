import React from 'react'
import Home from '../Pages/Home/Home';
import {Routes, Route } from 'react-router-dom';


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default AllRoutes