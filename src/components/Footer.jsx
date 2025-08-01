import React from 'react'
import brand from '../assets/brandimg.png'


const Footer = () => {
  return (
    <div className='pt-20 px-4 md:px:32 lg:px-32 bg-neutral-950 w-full overflow-hidden ' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8  md:mb-0'>
          <img src={brand} className='h-10 w-20 rounded' alt="Brand Logo" />
          <p className='text-gray-400 mt-4'>A humble beginning with a small construction project in year 2005 propped up by its core values of integrity, commitment, and loyalty boosted the company to evolve phenomenally under the dynamic leadership of its founding partner Mr.R.Kavin Today, the company undertook the role of chief contractor for small to medium size projects and executes project management services to synchronize professional trades for industrial/commercial undertakings. </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href='#header' className='hover:text-white'>Home</a>
            <a href='#About' className='hover:text-white'>About</a>
            <a href='#Contact' className='hover:text-white'>Contact</a>
            <a href='#Testimonial' className='hover:text-white'>Testimonial</a>
            <a href='#' className='hover:text-white'>Private policy</a>
            
            

            
              
            
              
              
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>subscribe to our new letter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>the latest news, articles and resources ,sent to your inbox weekly</p>
          <div className='flex gap-2'>
            <input type='email' placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none
                w-full md:w-auto'/>
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>
              Subscribe</button>
          </div>

        </div>

      </div>
      <div className='border-t border-gray-700 mt-10 py-4 text-center text-gray-500'>
        Copyright 2025 © kavinprakash. All rights reserved.
      </div>

    </div>
  )
}

export default Footer