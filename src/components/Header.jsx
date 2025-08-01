import React from 'react'
import Navbar from './Navbar.jsx'
import home6 from '../assets/homeimg6.jpg'


const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden object-fit:cover'
      style={{ backgroundImage: `url(${home6})` }} id='Header'>

      <Navbar />
      <div className=' container text-center mx-auto py-4 px-6 md:px-20 
       lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[80px] inline-block max-w-3xl 
         font-semibold pt-20'>Explore homes that fit yours dreams</h2>
        <div className='space-x-6 mt-16'>
          <a href='#Project' className='border border-white px-8 py-3 rounded '>Projects</a>
          <a href='#Contact' className='bg-blue-500 px-8 py-3 rounded '>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header