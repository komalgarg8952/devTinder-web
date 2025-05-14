import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
   <>
   <Navbar/>
   <div className='text-5xl font-bold underline'>hello</div>

   <Outlet/>
   <Footer/>
   </>
  )
}

export default Body