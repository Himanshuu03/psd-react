import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../App.css';
import SlideShow from "../Components/SlideShow";
function Slider() {
  return (
    <div>
      <div className="slider-container">
        <Navbar />
        <div>
          <SlideShow/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Slider;
