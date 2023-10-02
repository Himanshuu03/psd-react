import React from "react";
import CompanyLogo from "../Components/CompanyLogo";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css'
import Footer from "../Components/Footer";

function Signup() {
  return (
    <>
    <div className="s-c">
      <CompanyLogo />
      <div className='sign-up-header'>
      <form className="sign-up-form">
        <FaUserCircle className="login-icons" />
        <h1 className="login-header">Sign Up</h1>

        <div className="Contact-us-label">
          <div>
            <label className="Contact-label">
              First Name<sup className="asterick">*</sup>
            </label>
            <br />
            <br />
            <input
              type="text"
              placeholder="e.g.,Himanshu"
              className="Contact-label-input"
            />
          </div>
          <div>
            <label className="Contact-label">
              <span>Last Name</span>
              <sup className="asterick">*</sup>
            </label>
            <br />
            <br />
            <input
              type="text"
              placeholder="Jangra"
              className="Contact-label-input"
            />
          </div>
        </div>

        <div className="Contact-us-label">
          <div>
            <label className="Contact-label">
              Email<sup className="asterick">*</sup>
            </label>
            <br />
            <br />
            <input
              type="email"
              placeholder="name@company.com"
              className="Contact-label-input"
            />
          </div>

          <div>
            <label className="Contact-label">
              Phone No.<sup className="asterick">*</sup>
            </label>
            <br />
            <br />
            <input
              type="tel"
              placeholder="+91-930XXXXXX0"
              className="Contact-label-input"
            />
          </div>
        </div>
        
        <div className="Contact-us-label">
          <div>
            <label className="Contact-label">
              Password<sup className="asterick">*</sup>
            </label>
            <br />
            <br />
            <input
              type="password"
              placeholder=""
              className="Contact-label-input"
            />
          </div>

          <div>
            <label className="Contact-label">
              Comfirm Password<sup className="asterick">*</sup>
            </label>
            <br />
            <br />
            <input
              type="password"
              placeholder=""
              className="Contact-label-input"
            />
          </div>
        </div>



        <Link to="/">
          <button className="Contact-submit">Submit</button>
        </Link>
        <p className="already-login">
          Already a member ?{" "}
          <span className="already-login-signup links">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
      </div>
    </div>
    <Footer/>
    </> 
  );
}

export default Signup;
