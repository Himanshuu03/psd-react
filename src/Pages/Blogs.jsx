import React from 'react'
import Card from '../Components/Card'
import img1 from '../Assests/web.avif'
import img2 from '../Assests/digital.avif'
import img3 from '../Assests/ecom.avif'
import img4 from '../Assests/app.avif'
import img5 from '../Assests/indu.avif'
import '../App.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Blogs() {
  return (
    <div className='back'>
    <div className='bl-c'>
    <Navbar path="/blogs"/>
    <header className="page-header">
        <h1>Welcome to Our Blogs</h1>
    </header>
    <div className='blog-container'>
        <Card heading="Web Design" srcc={img1} content="Explore the latest trends, best practices, and tips for creating captivating websites that drive success."/>
        <Card heading="Digital Marketing" srcc={img2} content="Dive into the world of digital marketing, from SEO strategies to social media tactics and everything in between."/>
        <Card heading="E-Commerce" srcc={img3} content="Discover how to optimize your online store and provide a seamless shopping experience for your customers."/>
        <Card heading="App Development" srcc={img4} content="Stay up to date with mobile app development trends and insights for Android and iOS platforms."/>
        <Card heading="Industry Insights" srcc={img5} content="Gain valuable industry-specific knowledge and stay informed about the latest developments in your field."/>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Blogs