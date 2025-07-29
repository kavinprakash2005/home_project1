import React from 'react'



const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6
             md:px-20 lg:px-32 bg-transparent'>
                <h1 className='text-white bg-cyan-950 py-1 px-5 rounded-full'> kavin Homes</h1>
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Project</a>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testmonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signup</button>
            </div>
        </div>
    )
}

export default Navbar