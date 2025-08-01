import React from 'react'
import home1 from '../assets/homeimg1.jpg'

const About = () => {
    return (
        <div className=' flex flex-col items-center justify-center container mx-auto p-14 
     md-px-20 lg:px-32 w-full overflow-hidden  bg-sky-500/20'  id='About'>
            <h1 className='text-2xl sm:text font-bold mb-2'>About
                <span className='underline underline-offset-4 decoration-1 under font-light'> Our brand</span>
            </h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>passionate about properities, dedicated to your vision</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={home1} alt='' className='w-full sm:w-1/2 max-w-lg rounded-3xl' />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>

                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>years of excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Project completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p>delivery</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>15+</p>
                            <p>on going projects</p>
                        </div>

                    </div>
                    <p className='my-10 max-w-lg'>leonardo da vinci once said,
                        "simplicity is the ultimate sophistication." at our company, we believe in
                        the power of simplicity to create elegant and functional designs.
                        with over a decade of experience in the industry.

                    </p>
                    <button className='bg-blue-500 text-white px-8 py-2 rounded'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About