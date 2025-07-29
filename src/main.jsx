
import './index.css'
import React from 'react'

import { createRoot } from 'react-dom/client'


import Header from './components/Header.jsx'
import About from './components/About.jsx'


createRoot(document.getElementById('root')).render(
  <>
     <Header/>
     <About/>
     
  
    
  </>,
)