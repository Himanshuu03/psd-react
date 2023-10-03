import React from 'react'
import LandingPage from './LandingPage'
import WhyUs from './WhyUs'
import Ticker from './Ticker'
import Testimonial from './Testimonial'
import Footer from '../Components/Footer'
// import { useLocation } from 'react-router-dom'


function Home() {
  // const { pathname }= useLocation();
  // console.log(pathname);
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