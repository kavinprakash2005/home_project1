import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { testimonialData } from '../assets/assests'
const Testimonial = () => {
    return (
        <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonial'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer
                <span className='underline underline-offset-4 decoration-1 m-2 under font-light'>Testimonial</span></h2>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>real stories from those who found home with us</p>

            <div className='flex flex-wrap justify-center gap-8 '>
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className='max-w-[310px] border shadow-lg rounded-lg p-8 py-12 text-center'>
                        <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 object-fit:contain
                        rounded-full mx-auto mt-4' />
                        <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <AiFillStar key={index} className='text-yellow-500 inline-block' />
                            ))}
                        </div>
                        <p className='text-gray-600 '>{testimonial.text}</p>
                    </div>
                ))}


            </div>



        </div>
    )
}

export default Testimonial