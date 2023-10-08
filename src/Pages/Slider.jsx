import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../App.css';
import SlideShow from "../Components/SlideShow";
function Slider() {
  return (
    <div className="back">
      <div className="slider-container">
        <Navbar path="/slider"/>
        <h1 className="b-c-h">Slider</h1>
        <div>
          <SlideShow/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Slider;
