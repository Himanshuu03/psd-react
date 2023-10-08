import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import '../App.css'
import {BiSolidLogIn} from 'react-icons/bi'

function LandingPage() {
  const [state,setState] = useState(false);
  return (
    <>
    <div className="main-page">
      <Navbar path="/"/>
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
    <div className={
      `floater ${state ? "active" : ""}`
    }
    >
        <div className="floater-part-one">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit,
            sed do eiusmod tempoer incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
        <div className="floater-part-two">
          <input
            type="text"
            placeholder="enter email address"
            className="floater-inp"
            style={
              {color:"white",
            }
            }
          />
          <button className="floater-btn"
          >Join</button>
        </div>
      </div>
      <div className="join-now"
      onClick={()=>{
        setState(!state);
      }}
      >
        <BiSolidLogIn/>
      </div>
    </>
  )
}

export default LandingPage