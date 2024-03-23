/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='bg-gradient-to-l from-purple-950 to-gray-700'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


