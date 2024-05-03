import React from 'react'
import Navbar from './../layout/Navbar/index'
import Footer from './../layout/Footer/index'
import { Outlet } from 'react-router-dom'
function UserRoot() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserRoot