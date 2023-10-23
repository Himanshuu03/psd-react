import React from "react";
import "../App.css";

function WhyUs() {
  return (
    <div>
      <div className="why-us" id="tiker-check2">
        <h1>Why us?</h1>
        <div className="why-us-content">
          <p>
            At Ultrapremiun, we take pride in being your ideal partner for all
            your web design and development needs. Our commitment to excellence
            and dedication to your success set us apart.
          </p>
        </div>
      </div>
      <div className="why-us-2">
        <div className="why-us-2-content">
          <div className="card-why-us-2">
            <div className="why-us-2-img">
              <img src={require("../Assests/share.png")} alt="pp" />
            </div>
            <div>
              <p>
                We believe in a transparent, client-centered approach.
                Throughout your project, you'll have clear communication with
                our team, ensuring you're always informed about the status and
                progress.
              </p>
            </div>
          </div>

          <div className="card-why-us-2 border-card">
            <div className="why-us-2-img">
              <img src={require("../Assests/think.png")} alt="pp" />
            </div>
            <div>
              <p>
                We don't believe in one-size-fits-all solutions. Every project
                we undertake is approached with a fresh perspective, tailored to
                your unique goals, industry, and audience. Our custom solutions
                ensure that your online presence stands out.
              </p>
            </div>
          </div>
          <div className="card-why-us-2">
            <div className="why-us-2-img">
              <img src={require("../Assests/clock.png")} alt="pp" />
            </div>
            <div>
              <p>
                With years of industry experience, our team of skilled
                professionals possesses a deep understanding of web design and
                development. We've successfully delivered projects for a wide
                range of clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
