
import React from 'react'
import Featured from '../Components/Featured'
import AboutUs from '../Components/AboutUs'

import Transform from '../Components/Transform'
import IndoorPlants from '../Components/IndoorPlants'
import Footer from '../Components/Footer'

import Testimonial from '../Components/Testimonial'

import ParallaxPage from '../Components/ParallaxPage'

const HomePage = () => {
  return (
    <div>
    <ParallaxPage />
    <div style={{position:'relative',top:'110vh'}}>
      
    <Transform />
    <Featured />
    <AboutUs />
    <IndoorPlants />
    <Testimonial />
    <Footer />
    </div>
  </div>
  )
}

export default HomePage
