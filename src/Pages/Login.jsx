import React, { useContext } from 'react'
import CompanyLogo from '../Components/CompanyLogo'
import { FaUserCircle } from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import Footer from '../Components/Footer'
import { AppContext } from '../contextapi/Context'

function Login() {
  const {loginData,setLoginData} = useContext(AppContext);

  function handleChange(event){
    setLoginData((prevData)=>{
      return{
        ...prevData,
        [event.target.name] : event.target.value 
      }
    })
  }

  function handleClick(){
    setLoginData((prevData)=>{
      return{
        ...prevData,
        state: !loginData.state,
      }
    })
    navigate("/");
  }
  const navigate = useNavigate();
  return (
    <>
    <div className='l-c'>
      <CompanyLogo/>
      <div className='main-login-header'>
      <form className='login-form'>
      <FaUserCircle className='login-icons'/>
      <h1 className='login-header'>Login</h1>
      <div className='login-password login'>
      <label className='Contact-label'>
            Company Email<sup className='asterick'>*</sup>
      </label>
      <br/><br/>
      <input type='email' placeholder='name@company.com' className='Contact-label-input' name="email" value={loginData.email}
      required
      onChange={handleChange}
      />
      </div>

      <div className='login-password login'>
      <label className='Contact-label'>
            Password<sup className='asterick'>*</sup>
      </label>
      <br/><br/>
      <input type='password' placeholder='' className='Contact-label-input'name="password" value={loginData.password}
      required
      onChange={handleChange}
      />
      </div>


      <button className='Contact-submit login-password-btn'
      onClick={handleClick}
      >
            Submit
      </button>

      <p className='already-login'>Create new account <span className='already-login-signup links'>
        <Link to="/sign-up">
         Signup
        </Link>
        </span></p>
      </form>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Login