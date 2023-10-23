import React from "react";
import "../App.css";

function Testimonial() {
  return (
    <div>
      <div className="testimonial" id="testi">
        <p className="testimonial-head">Testimonials</p>
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-user">
            <div className="testimonial-card">
              <div>
                <p>
                  "Credibly" innovate granular internal or "organic" sources
                  whereas high standards in web readiness.
                </p>
              </div>
            </div>
            <div className="testimonil-data">
              <div className="user-img"></div>
              <div className="testimonil-data-parts">
                <p className="testimonil-data-name">HIMANSHU</p>
                <p className="testimonil-data-title">Software Developer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-user">
            <div className="testimonial-card">
              <div>
                <p>
                  Their commitment to quality and client satisfaction is evident
                  in every step of the process.
                </p>
              </div>
            </div>
            <div className="testimonil-data">
              <div className="user-img"></div>
              <div className="testimonil-data-parts">
                <p className="testimonil-data-name">HARSHIT</p>
                <p className="testimonil-data-title">Software Developer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-user">
            <div className="testimonial-card">
              <div>
                <p>
                  "From day one, they understood our vision and executed it
                  flawlessly. The impact is tremendous.
                </p>
              </div>
            </div>
            <div className="testimonil-data">
              <div className="user-img"></div>
              <div className="testimonil-data-parts">
                <p className="testimonil-data-name">GEETANSH</p>
                <p className="testimonil-data-title">Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
