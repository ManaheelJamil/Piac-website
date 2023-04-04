import React from 'react'

import Navbar from './components/Navbar'
import Body from './components/Body'
import ImageSlider from './components/Slider1'
import Header from './components/Header'
import Images from './components/Images'
import Instructor from './components/Instructor'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <div>
        {/* <Navbar/> */}
        <Body/>
        <Header/>
        <Images/>
        <ImageSlider/>
         {/* <Partnet/> */}
        <Instructor/> */
        {/* <Courses/> */}
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default page



