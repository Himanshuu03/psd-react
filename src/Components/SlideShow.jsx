import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css'
function SlideShow() {
  return (
     <Carousel autoPlay className='slider-wrap'>
                <div>
                    <img src={require("../Assests/pexels-andrea-piacquadio-3844533.jpg")} alt='img' height="500px"/>
                    <p className="legend">Work Flow</p>
                </div>
                <div>
                    <img src={require("../Assests/pexels-cottonbro-studio-5990030.jpg")} alt='img' height="500px"/>
                    <p className="legend">Great Staff</p>
                </div>
                <div>
                    <img src={require("../Assests/pexels-startup-stock-photos-7070.jpg")} alt='img' height="500px"/>
                    <p className="legend">Great Experience</p>
                </div>
                <div>
                    <img src={require("../Assests/pexels-tima-miroshnichenko-5439381.jpg")} alt='img' height="500px"/>
                    <p className="legend">Love To Work</p>
                </div>
        </Carousel>
  )
}

export default SlideShow