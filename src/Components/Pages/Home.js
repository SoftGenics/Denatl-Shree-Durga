import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'
import Footer from '../Footer/Footer'
import BookAppoitment from '../BookAppoitment/BookAppoitment'
import OurServices from '../OurServices/OurServices'
import OfficeInfo from '../OfficeInfo/OfficeInfo'
import Doctors from '../Doctors/Doctors'
function home() {
  return (
    <div>
        <HeroSection />
        <Doctors />
        <About />
        <BookAppoitment />

        <OurServices />
        <OfficeInfo />
        <Footer />
    </div>
  )
}

export default home