import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SinglePages from './SinglePages'

function First() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
           {/* <SinglePages/> */}
        <Footer/>
     
    </div>
  )
}

export default First