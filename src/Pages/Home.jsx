import React from 'react'
import LandingPage from './LandingPage'
import WhyUs from './WhyUs'
import Ticker from './Ticker'
import Testimonial from './Testimonial'
import Footer from '../Components/Footer'


function Home() {
  return (
    <div>
        <LandingPage/>
        <WhyUs/>
        <Ticker/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home