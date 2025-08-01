import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { projectData } from '../assets/assests';
import { useState, useEffect } from 'react';
const Project = () => {
    const [currentIndex, setcurrentIndex] = useState(0);
    const [cardToShow, setcardToShow] = useState(1);

    useEffect(() => {
        const updateCardToShow = () => {
            if (window.innerWidth >= 1024) {
                setcardToShow(projectData.length);
            }
            else {
                setcardToShow(1);
            };
        };
        updateCardToShow();
        window.addEventListener('resize', updateCardToShow);
        return () => {
            window.removeEventListener('resize', updateCardToShow);
        };

    }, [])
    const nextProject = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length)
    }
    const prevProject = () => {
        setcurrentIndex((prevIndex) => prevIndex == 0 ? projectData.length - 1 : prevIndex - 1)
    }
    return (
        <div className='container mx-auto py-4 pt-20 px-6 md:px-20 overflow-hidden' id='Project'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
                Projects<span className='underline underline-offset-4 decoration-1  m-2 under font-light'>Completed</span>
            </h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>crafting spaces,building legacies-explore owr portfolio</p>
            {/* slider div */}
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject} className='p-3 bg-teal-500 rounded mr-2' aria-label='Previous Project'>
                    <FaChevronLeft />
                </button>
                <button onClick={nextProject} className='p-3 bg-teal-500 rounded mr-2' aria-label='Next Project'>
                    <FaChevronRight />
                </button>
            </div>
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardToShow}%)` }}>
                    {projectData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} className='h-95 w-120 mb-9' alt={project.title} />
                            <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>{project.price}<span>|</span>{project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )

}

export default Project