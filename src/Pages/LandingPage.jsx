import React from 'react'
import Navbar from '../Components/Navbar'
import '../App.css'

function LandingPage() {
  return (
    <div className="main-page">
      <Navbar/>
        <div className="main-page-content">
          <div>
            <h1>Premium Solution</h1>
            <h1>for a Modern Website</h1>
            <p className="m-p-c-h">Psdfreebies.com</p>
          </div>
          <div className="main-page-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit,sed do
              ejusmod tempor incididunt ut labore er doiore macna algua. ot enm
              ad minim venam commodo consecuar
            </p>
          </div>
        </div>
    </div>
  )
}

export default LandingPage