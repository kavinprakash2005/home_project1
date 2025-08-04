
import './index.css'
import React from 'react'

import { createRoot } from 'react-dom/client'


import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Testimonial from './components/Testimonial.jsx'
import Contact from './components/Contact.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer.jsx'




createRoot(document.getElementById('root')).render(
  <>
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer/>
      

      
      
      
    </div>

  


  </>,
)