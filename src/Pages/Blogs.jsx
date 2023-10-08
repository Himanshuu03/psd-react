import React from 'react'
import Card from '../Components/Card'
import img1 from '../Assests/pexels-andrea-piacquadio-3844533.jpg'
import img2 from '../Assests/pexels-cottonbro-studio-5990030.jpg'
import img3 from '../Assests/pexels-startup-stock-photos-7070.jpg'
import img4 from '../Assests/pexels-tima-miroshnichenko-5439381.jpg'
import '../App.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Blogs() {
  return (
    <div className='back'>
    <div className='bl-c'>
    <Navbar path="/blogs"/>
    <h1 className='b-c-h'>Blogs</h1>
    <div className='blog-container'>
        <Card heading="Blog 1" srcc={img1}/>
        <Card heading="Blog 2" srcc={img2}/>
        <Card heading="Blog 3" srcc={img3}/>
        <Card heading="Blog 4" srcc={img4}/>
        <Card heading="Blog 5" srcc={img1}/>
        <Card heading="Blog 6" srcc={img2}/>
        <Card heading="Blog 7" srcc={img3}/>
        <Card heading="Blog 8" srcc={img4}/>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Blogs