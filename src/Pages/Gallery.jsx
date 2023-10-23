import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Gallery() {
  return (
    <div className="back">
      <div className="g-c">
        <Navbar path="/galleries" />
        <header className="page-header">
          <h1>Galleries</h1>
        </header>
        <div className="gallery-c">
          <div className="gallery">
            <img
              src={require("../Assests/pexels-andrea-piacquadio-3844533.jpg")}
              alt="img"
            />
            <div className="desc">
              A strong work culture is the bedrock of a thriving organization,
              fostering unity and shared values among its members.
            </div>
          </div>

          <div className="gallery">
            <img
              src={require("../Assests/pexels-cottonbro-studio-5990030.jpg")}
              alt="img"
            />
            <div className="desc">
              We are committed to delivering high-quality services that meet and
              exceed your expectations. From web design to customer support
            </div>
          </div>

          <div className="gallery">
            <img
              src={require("../Assests/pexels-startup-stock-photos-7070.jpg")}
              alt="img"
            />
            <div className="desc">
              We're results-oriented. Our focus is on achieving measurable
              success for your business. Your satisfaction is our measure of
              success.
            </div>
          </div>

          <div className="gallery">
            <img
              src={require("../Assests/pexels-tima-miroshnichenko-5439381.jpg")}
              alt="img"
            />
            <div className="desc">
              We value your input and maintain clear, transparent communication
              throughout our collaboration.Your feedback is always welcome.
            </div>
          </div>

          <div className="gallery">
            <img
              src={require("../Assests/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept.jpg")}
              alt="img"
            />
            <div className="desc">
              We understand that every client is unique. Our solutions are
              customized to your specific needs, ensuring that you receive
              exactly what you require.
            </div>
          </div>

          <div className="gallery">
            <img
              src={require("../Assests/handshake-close-up-executives.jpg")}
              alt="img"
            />
            <div className="desc">
              Are you ready to join the ranks of satisfied clients who have
              experienced the difference of working with Ultra Premiun?
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
