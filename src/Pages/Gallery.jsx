import React from "react";
import '../App.css'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Gallery() {
  return (
    <div className="back">
    <div className="g-c">
        <Navbar path="/galleries"/>
        <h1 className="b-c-h">Gallery</h1>
        <div className="gallery-c">
      <div className="gallery">
          <img
            src={require("../Assests/pexels-andrea-piacquadio-3844533.jpg")}
            alt="img"
          />
        <div className="desc">A strong work culture is the bedrock of a thriving organization, fostering unity and shared values among its members.</div>
      </div>

      <div className="gallery">
          <img
            src={require("../Assests/pexels-cottonbro-studio-5990030.jpg")}
            alt="img"
          />
        <div className="desc">A strong work culture is the bedrock of a thriving organization, fostering unity and shared values among its members.</div>
      </div>

      <div className="gallery">
          <img
            src={require("../Assests/pexels-startup-stock-photos-7070.jpg")}
            alt="img"
          />
        <div className="desc">A strong work culture is the bedrock of a thriving organization, fostering unity and shared values among its members.</div>
      </div>

      <div className="gallery">
          <img
            src={require("../Assests/pexels-tima-miroshnichenko-5439381.jpg")}
            alt="img"
          />
        <div className="desc">A strong work culture is the bedrock of a thriving organization, fostering unity and shared values among its members.</div>
      </div>

      <div className="gallery">
          <img
            src={require("../Assests/pexels-tima-miroshnichenko-5439381.jpg")}
            alt="img"
          />
        <div className="desc">A strong work culture is the bedrock of a thriving organization, fostering unity and shared values among its members.</div>
      </div>

      <div className="gallery">
          <img
            src={require("../Assests/pexels-startup-stock-photos-7070.jpg")}
            alt="img"
          />
        <div className="desc">A strong work culture is the bedrock of a thriving organization, fostering unity and shared values among its members.</div>
      </div>

      <div className="gallery">
          <img
            src={require("../Assests/pexels-cottonbro-studio-5990030.jpg")}
            alt="img"
          />
        <div className="desc">A strong work culture is the bedrock of a thriving organization, fostering unity and shared values among its members.</div>
      </div>

      <div className="gallery">
          <img
            src={require("../Assests/pexels-andrea-piacquadio-3844533.jpg")}
            alt="img"
          />
        <div className="desc">A strong work culture is the bedrock of a thriving organization, fostering unity and shared values among its members.</div>
      </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Gallery;
