import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../App.css";
import { BiSolidLogIn } from "react-icons/bi";
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function LandingPage() {
  const [state, setState] = useState(false);
  return (
    <>
      <div className="main-page">
        <Navbar path="/" />
        <div className="main-page-content">
          <div>
            <h1>Premium Solution</h1>
            <h1>for a Modern Website</h1>
            <p className="m-p-c-h">Ultrapremiun.com</p>
          </div>
          <div className="main-page-text">
            <p>
              At Ultra Premiun, we are dedicated to transforming your digital
              vision into reality. As a leading web design and development
              company, we offer a comprehensive range of services that cater to
              all your online needs.
            </p>
          </div>
        </div>
      </div>
      <div className={`floater ${state ? "active" : ""}`}>
        <div className="floater-part-one">
          <p>
            Feel free to choose the one that best aligns with your brand's tone
            and message for the "Join Now" button.
          </p>
        </div>
        <div className="floater-part-two">
          <input
            type="text"
            placeholder="enter email address"
            className="floater-inp"
            style={{ color: "white" }}
          />
          <button className="floater-btn"
          onClick={()=>{
            toast.error("under maintenance")
          }}
          >Join</button>
        </div>
      </div>
      <div
        className="join-now"
        onClick={() => {
          setState(!state);
        }}
      >
        <BiSolidLogIn />
      </div>
    </>
  );
}

export default LandingPage;
