import React, { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu])




    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6
             md:px-20 lg:px-32 bg-transparent'>
                <h1 className='text-yellow-300 py-1 px-5  ' > kavin <span>Homes.</span> </h1>
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-amber-200'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-cyan-200'>About</a>
                    <a href="#Project" className='cursor-pointer hover:text-rose-400'>Project</a>
                    <a href="#Testimonial" className='cursor-pointer hover:text-yellow-200'>Testimonials</a>
                     
                </ul>
                <button className='hidden md:block bg-sky-200 px-8 py-2 rounded-full'>Signup</button>
                <FaBars onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer' />
            </div>
            {/* ---------------mobile-menu----------------*/}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white
            transition-all ` }>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <RxCross2 onClick={() => setShowMobileMenu(false)} className='w-6' />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a onClick={() => setShowMobileMenu(false)} href='#Header' className='px-4 py2 rounded-full inline-block'>Home</a>
                    <a onClick={() => setShowMobileMenu(false)} href='#About' className='px-4 py2 rounded-full inline-block'>About</a>
                    <a onClick={() => setShowMobileMenu(false)} href='#Project' className='px-4 py2 rounded-full inline-block'>Project</a>
                    <a onClick={() => setShowMobileMenu(false)} href='#Testimonial' className='px-4 py2 rounded-full inline-block'>Testimonials</a>
                    <a onClick={() => setShowMobileMenu(false)} href='#Contact' className='px-4 py2 rounded-full inline-block'>Contact</a>
                     
                </ul>
            </div>
        </div>
    )
}

export default Navbar