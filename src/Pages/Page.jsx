import React from 'react'
import '../App.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import img1 from '../Assests/pexels-andrea-piacquadio-3844533.jpg'
import img2 from '../Assests/pexels-cottonbro-studio-5990030.jpg'
import img3 from '../Assests/pexels-startup-stock-photos-7070.jpg'
import img4 from '../Assests/pexels-tima-miroshnichenko-5439381.jpg'

function Page() {
  return (
    <>
    <div className='s-c-h'>
    <Navbar path="pages"/>
    <h1 className='b-c-h'>Pages</h1>
    <h1 className='b-c-h'>Our Other Project</h1>
    <div className='blog-container'>
        <Card heading="Project 1" srcc={img1}/>
        <Card heading="Project 2" srcc={img2}/>
        <Card heading="Project 3" srcc={img3}/>
        <Card heading="Project 4" srcc={img4}/>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Page;