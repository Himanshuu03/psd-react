import React from "react";
import { GiCheckMark } from "react-icons/gi";
import "../App.css";

function Ticker() {
  return (
    <div>
      <div className="tiker" id="tiker-check">
        <div className="tiker-content">
          <h3>Some of the key features</h3>
          <div className="tiker-content-part">
            <GiCheckMark className="icons2" />
            <p>
              We begin by understanding your business, goals, and target
              audience to create a clear project roadmap.
            </p>
          </div>
          <div className="tiker-content-part">
            <GiCheckMark className="icons2" />
            <p>
              Our creative team conceptualizes and designs your website,
              ensuring a unique and captivating visual identity.
            </p>
          </div>
          <div className="tiker-content-part">
            <GiCheckMark className="icons2" />
            <p>
              Our skilled developers bring the design to life, ensuring that
              your website is responsive, secure, and user-friendly.
            </p>
          </div>
        </div>
        <div className="tiker-photo">
        </div>
      </div>
    </div>
  );
}

export default Ticker;
