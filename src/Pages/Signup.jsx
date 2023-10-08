import React, { useContext } from "react";
import CompanyLogo from "../Components/CompanyLogo";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'
import Footer from "../Components/Footer";
import { AppContext } from "../contextapi/Context";

function Signup() {

  const navigate = useNavigate();

  const {signUpData,setSignUpData}= useContext(AppContext);

  function changeHandle(event){
    setSignUpData((prevData)=>{
      return{
        ...prevData,
        [event.target.name] :event.target.value
      }
    })
  }

  function clickHandler(){
    if(signUpData.fname !== "" && signUpData.lname !== "" && signUpData.email !== "" && signUpData.phoneno !==  "" && signUpData.password !== "" && signUpData.confirmPassword !== ""){
      if(signUpData.password !== signUpData.confirmPassword){
        alert("password and confirm password are not same")
      }
      else{
        navigate("/");
      }
    }
  }

  function submitHandler(event){
    event.preventDefault();
  }
  return (
    <>
    <div className="s-c">
      <CompanyLogo />
      <div className='sign-up-header'>
      <form className="sign-up-form" onSubmit={submitHandler}>
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
              name="fname"
              value={signUpData.fname}
              onChange={changeHandle}
              required
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
              name="lname"
              value={signUpData.lname}
              onChange={changeHandle}
              required
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
              name="email"
              value={signUpData.email}
              onChange={changeHandle}
              required
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
              name="phoneno"
              value={signUpData.phoneno}
              onChange={changeHandle}
              required
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
              name="password"
              value={signUpData.password}
              onChange={changeHandle}
              required
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
              name="confirmPassword"
              value={signUpData.confirmPassword}
              onChange={changeHandle}
              required
            />
          </div>
        </div>




          <button className="Contact-submit"
          onClick={clickHandler}
          >Submit</button>
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
